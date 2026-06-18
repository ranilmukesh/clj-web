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
  metadataBase: new URL('https://chandralekhajewels.netlify.app'),
  title: {
    default: "Chandralekha Jewels | BIS 916 Hallmarked Gold in Coimbatore",
    template: "%s | Chandralekha Jewels"
  },
  description: "Coimbatore's trusted jeweler for 35+ years. Discover and buy BIS 916 Hallmarked and HUID-certified gold, diamond, and antique jewelry collections.",
  keywords: ["Gold Jewellery Coimbatore", "BIS 916 Hallmarked", "Buy Gold Rings", "Bridal Jewellery", "Chandralekha Jewels"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chandralekhajewels.netlify.app",
    siteName: "Chandralekha Jewels",
    title: "Chandralekha Jewels | Premium Gold & Diamonds",
    description: "Handcrafted BIS 916 gold and diamond jewellery in Coimbatore.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
