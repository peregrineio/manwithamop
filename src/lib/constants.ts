export const SERVICE_TYPES = {
  standard_clean: { label: "Standard Clean", price: 120, duration: 2 },
  deep_clean: { label: "Deep Clean", price: 185, duration: 3 },
  move_in_out: { label: "Move-In/Out Clean", price: 210, duration: 4 },
  carpet_only: { label: "Carpet Only", price: 85, duration: 1.5 },
  custom: { label: "Custom", price: 0, duration: 0 },
} as const;

export type ServiceType = keyof typeof SERVICE_TYPES;

export const DEFAULT_TAX_RATE = 0.0825; // TX sales tax 8.25%
export const COMPANY_NAME = "Man With a Mop LLC";
export const COMPANY_PHONE = "(972) 555-XXXX";
export const COMPANY_EMAIL = "hello@manwithamop.com";
export const SERVICE_AREA = [
  "Cypress",
  "Katy",
  "Hockley",
  "Magnolia",
  "Tomball",
  "Conroe",
] as const;

export const REGION_LABEL = "Northwest Houston";

export const LEAD_SOURCES = [
  "website",
  "referral",
  "social_media",
  "walk_in",
  "thumbtack",
  "nextdoor",
] as const;

export const LEAD_STAGES = [
  "new_lead",
  "contacted",
  "quoted",
  "booked",
  "completed",
  "lost",
] as const;

export const JOB_STATUSES = [
  "scheduled",
  "in_progress",
  "completed",
  "cancelled",
] as const;

export const INVOICE_STATUSES = [
  "draft",
  "sent",
  "paid",
  "overdue",
  "cancelled",
] as const;
