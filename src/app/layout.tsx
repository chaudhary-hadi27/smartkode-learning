import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ✅ Move themeColor here
export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "SmartKode - AI-Powered Coding Bootcamp",
  description: "SmartKode is an AI-powered coding bootcamp that helps you learn programming faster and smarter.",
  metadataBase: new URL("https://learn.smartkode.io"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SmartKode - AI-Powered Coding Bootcamp",
    description: "SmartKode is an AI-powered coding bootcamp that helps you learn programming faster and smarter.",
    url: "https://learn.smartkode.io",
    siteName: "SmartKode",
    type: "website",
    images: [
      {
        url: "/video/bg.jpg",
        width: 1200,
        height: 630,
        alt: "SmartKode Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartKode Learning - AI Bootcamp",
    description: "Join SmartKode to master AI, Automation, and Web Dev with real-world projects.",
    images: ["/video/bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
