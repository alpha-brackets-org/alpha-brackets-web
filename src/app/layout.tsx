import React from "react";
import { Plus_Jakarta_Sans, Zain } from "next/font/google";
import WebLayout from "@/components/layout/WebLayout";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const zain = Zain({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-zain",
});

export const metadata = {
  metadataBase: new URL("https://alphabrackets.com"),
  title: {
    default: "Alpha Brackets | Accelerate from Architecture to Launch",
    template: "%s | Alpha Brackets",
  },
  description:
    "Alpha Brackets is a strategic technology partner bridging business intelligence and accelerated technical execution. Future-ready architecture, compressed deployment cycles, zero-waste engineering.",
  keywords: [
    "Strategic Technology Partner",
    "Accelerated Deployment",
    "SaaS Architecture",
    "AI-Augmented Development",
    "Technical Scalability",
    "Alpha Brackets",
  ],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
  },
  openGraph: {
    title: "Alpha Brackets | Accelerate from Architecture to Launch",
    description:
      "Business Intelligence-Led Development. We compress your time-to-market with embedded collaboration, zero-waste engineering, and future-ready architecture.",
    url: "https://alphabrackets.com",
    siteName: "Alpha Brackets",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Brackets — Strategic Technology Partner",
    description: "From Architecture to Launch — in Compressed Cycles.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${zain.variable}`}
    >
      <body suppressHydrationWarning className="font-sans">
        <ToastProvider>
          <WebLayout>{children}</WebLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
