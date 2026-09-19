import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JnJ Garden Resto & Cafe — Hidden Gem di Babakan Dramaga, Bogor",
  description:
    "Hidden gem cafe harga warkop rasa cafe. Titik kumpul keseruan keluarga, sahabat, pasangan, dan komunitas. Buka 08.00–03.00 WIB. Babakan Dramaga, IPB Bogor.",
  keywords: ["cafe bogor", "jnj garden", "resto cafe ipb", "babakan dramaga cafe", "hidden gem bogor"],
  openGraph: {
    title: "JnJ Garden Resto & Cafe",
    description: "Hidden gem cafe di belakang IPB Bogor — harga warkop rasa cafe!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-[#fafaf7] text-gray-800 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
