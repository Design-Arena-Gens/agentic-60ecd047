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
  title: "ClickAutomate | Digital Marketing & AI Automation Studio",
  description:
    "ClickAutomate builds high-converting digital marketing, SEO, and AI automation systems that help modern brands accelerate growth on autopilot.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "AI automation",
    "performance marketing",
    "ClickAutomate",
  ],
  openGraph: {
    title: "ClickAutomate | Digital Marketing & AI Automation Studio",
    description:
      "Growth pods, search dominance, and intelligent automations that scale pipeline without extra headcount.",
    url: "https://agentic-60ecd047.vercel.app",
    siteName: "ClickAutomate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickAutomate | Digital Marketing & AI Automation Studio",
    description:
      "Best-in-class digital marketing, SEO, and AI automation services engineered for high-growth teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
