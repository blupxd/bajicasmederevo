import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bajica Smederevo",
  keywords: "Srbija, Smederevo, Bajica Smederevo, Bajica, restauracija, sanacija, građevinarstvo, ",
  metadataBase: new URL("https://www.bajica.rs")
  description:
    "Porodična građevinska firma sa tradicijom od tri generacije, specijalizovana za sve vrste radova – od sanacija i podova do fasada i restauracije objekata. Kvalitet, tradicija i pažnja prema detaljima su naš prioritet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="rs">
      <body className={overpass.className}>
        <MobileNav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
