import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chandralekha Jewels | Exquisite Gold Jewellery",
  description: "Discover and buy BIS 916 Hallmarked gold jewels. Handcrafted traditional, modern, and bridal collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-background`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
