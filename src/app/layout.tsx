import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Chandralekha Jewels | Exquisite Gold Jewellery",
  description: "Discover and buy BIS 916 Hallmarked gold jewels. Handcrafted traditional, modern, and bridal collections.",
  icons: {
    icon: "/clj-logo-white-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen bg-background font-sans">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
