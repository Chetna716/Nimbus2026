import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bankGothic = localFont({
  src: "../public/bankgothic-md-bt/BankGothic Md BT.ttf",
  variable: "--font-bankgothic",
});

const neoform = localFont({
  src: "../public/neoform-font-1766056187-0/NeoformDemo-2v5zX.otf",
  variable: "--font-neoform",
});

export const metadata: Metadata = {
  title: "Nimbus 2026 - Tech Fest",
  description: "Get ready for the future with Nimbus 2026.",
  icons: {
    icon: "/nimbuslogoB-01.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bankGothic.variable} ${neoform.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
