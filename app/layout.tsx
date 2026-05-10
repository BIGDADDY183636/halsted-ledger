import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-4",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tax.jbar.studio"),
  title: "Halsted Ledger — Tax & Accounting for Chicago Small Businesses",
  description:
    "Independent tax, accounting, and advisory firm serving Chicago's small businesses. Real partnership. Year-round support.",
  openGraph: {
    title: "Halsted Ledger — Tax & Accounting for Chicago Small Businesses",
    description:
      "Independent tax, accounting, and advisory firm serving Chicago's small businesses. Real partnership. Year-round support.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
