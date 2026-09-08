import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Our Story & 36+ Year Heritage | Advent Security Group Australia",
  description: "Discover Advent Security's story—from its beginnings in 1990 in Bourke Street, Melbourne with one client to an established Australian leader in physical guarding, electronic security, CCTV analytics, and 24/7 command operations.",
  keywords: [
    "Advent Security",
    "Security Company Melbourne",
    "Australian Security Services",
    "Corporate Concierge Melbourne",
    "Electronic Security CCTV",
    "24/7 Alarm Monitoring Australia",
    "Security Risk Consulting"
  ],
  authors: [{ name: "Advent Security Group" }],
  openGraph: {
    title: "Our Story & Heritage | Advent Security Group Australia",
    description: "36+ Years of Australian defense excellence, protecting commercial, government, retail & healthcare infrastructure.",
    type: "website",
    locale: "en_AU",
    siteName: "Advent Security Group",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
