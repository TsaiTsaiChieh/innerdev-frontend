import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inner Dev",
  description: "A learning internalization tool for engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-[#E8F5E9] antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#E8F5E9] font-sans text-[#2f3a32]">
        {children}
      </body>
    </html>
  );
}
