import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B&B Dental Care | Your Smile, Our Priority",
  description:
    "B&B Dental Care offers expert dental services including dental implants, root canal, teeth whitening, braces and more. Book your appointment today.",
  keywords:
    "dental care, dentist, dental implants, teeth whitening, root canal, braces, Kochi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
