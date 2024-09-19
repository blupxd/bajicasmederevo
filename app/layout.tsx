import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bajica Smederevo",
  description: "Oživljavamo Istoriju, Gradimo Budućnost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="rs">
      <body
        className={overpass.className}
      >
        <MobileNav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
