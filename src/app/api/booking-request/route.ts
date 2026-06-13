import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(7).max(40),
  email: z.string().email(),
  service_type: z.enum([
    "standard_clean",
    "deep_clean",
    "move_in_out",
    "carpet_only",
    "custom",
  ]),
  city: z.string().min(2).max(60),
  address: z.string().max(200).optional().or(z.literal("")),
  notes: z.string().max(2000).optional().or(z.literal("")),
  tcpa_consent: z.union([z.literal("on"), z.literal("true"), z.boolean()]),
});

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const buckets = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const arr = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) {
    buckets.set(ip, arr);
    return false;
  }
  arr.push(now);
  buckets.set(ip, arr);
  return true;
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silent accept
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const ip = getIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later or call us." },
      { status: 429 },
    );
  }

  const { name, phone, email, service_type, city, address, notes } = parsed.data;

  // In demo mode (or absent integrations), log + return success.
  const demo =
    process.env.NEXT_PUBLIC_DEMO_MODE === "true" ||
    !process.env.RESEND_API_KEY ||
    !process.env.TWILIO_ACCOUNT_SID;

  if (demo) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[booking-request] DEMO MODE — would notify ops:", {
        name,
        phone,
        email,
        service_type,
        city,
        address,
        notes,
      });
    }
    return NextResponse.json({ success: true, demo: true });
  }

  // Live path: notify ops via Resend, optionally SMS via Twilio
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Man With a Mop <bookings@manwithamop.com>",
      to: ["ops@manwithamop.com"],
      replyTo: email,
      subject: `New booking request: ${name} — ${service_type}`,
      html: `
        <h2>New booking request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service_type}</p>
        <p><b>City:</b> ${city}</p>
        ${address ? `<p><b>Address:</b> ${address}</p>` : ""}
        ${notes ? `<p><b>Notes:</b><br/>${notes.replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[booking-request] notification failed", err);
    return NextResponse.json(
      { error: "Could not send request. Please call us." },
      { status: 502 },
    );
  }
}
