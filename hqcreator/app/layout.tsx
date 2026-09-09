import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://hqcreator.com"),
  title: {
    default: "HQ Creator — Business Tools for Solo Creators",
    template: "%s | HQ Creator",
  },
  description:
    "Honest reviews and comparisons of invoicing, scheduling, contract, and editing tools built for solo creators running a one-person business.",
  openGraph: {
    type: "website",
    siteName: "HQ Creator",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-86PK4K1M4X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-86PK4K1M4X');
          `}
        </Script>
      </head>
      <body className="min-h-screen font-body text-charcoal antialiased">
        <OrganizationJsonLd />
        <Header />
        <main className="mx-auto max-w-4xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
