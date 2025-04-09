import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import { NavBar } from "@/components/NavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "reservbite",
  description:
    "Book your next hotel stay with ReserveBite. Search hotels by location, ratings & availability. Fast, mobile-friendly booking on Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
