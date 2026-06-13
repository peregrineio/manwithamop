import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY_NAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manwithamop.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | House Cleaning in Northwest Houston, TX`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "House cleaning across Cypress, Katy, Hockley, Magnolia, Tomball, and Conroe, TX. One insured, background-checked man. Honest pricing. Booking under two minutes.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: COMPANY_NAME,
    locale: "en_US",
    url: SITE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: COMPANY_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-sky-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <div id="main" className="contents">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
