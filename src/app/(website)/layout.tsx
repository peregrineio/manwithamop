import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import { WebsiteNav } from "@/components/website/nav";
import { WebsiteFooter } from "@/components/website/footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-site-display",
  display: "swap",
});

const utility = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-site-utility",
  display: "swap",
});

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${utility.variable} font-site-display relative min-h-screen bg-[#F6F1E7] text-[#1B1F24] flex flex-col`}
    >
      <div className="site-grain" aria-hidden="true" />
      <WebsiteNav />
      <main className="flex-1">{children}</main>
      <WebsiteFooter />
    </div>
  );
}
