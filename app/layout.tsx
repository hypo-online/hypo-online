import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const site = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(site),
  applicationName: "hypo.online",
  openGraph: {
    type: "website",
    siteName: "hypo.online",
    locale: "cs_CZ",
    url: site,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "hypo.online — hypotéky v ČR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
