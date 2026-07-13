import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Vantrex EA — Institutional Forex Automation",
  description:
    "Institutional-grade MT4 & MT5 Expert Advisors engineered for disciplined execution, capital preservation, and long-term consistency.",
  authors: [{ name: "Alpha Vantrex EA" }],
  openGraph: {
    title: "Alpha Vantrex EA — Institutional Forex Automation",
    description:
      "Institutional-grade MT4 & MT5 Expert Advisors engineered for disciplined execution, capital preservation, and long-term consistency.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Vantrex EA — Institutional Forex Automation",
    description:
      "Institutional-grade MT4 & MT5 Expert Advisors engineered for disciplined execution, capital preservation, and long-term consistency.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
