import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google"; // Big bold font for headers
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "800"], // Regular, Bold, ExtraBold
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOT CONCEPT | Infrared Barre Studio",
  description: "The hottest workout in town. Infrared heated barre studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
