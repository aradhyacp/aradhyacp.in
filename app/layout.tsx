import type { Metadata } from "next";
import { Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aradhya CP | Full Stack Developer",
  description:
    "Full Stack Developer & Builder. Building AI-integrated applications, developer tools, and contributing to open source.",
  keywords: [
    "developer",
    "full stack",
    "react",
    "next.js",
    "open source",
    "AI",
    "Aradhya",
  ],
  authors: [{ name: "Aradhya CP" }],
  openGraph: {
    title: "Aradhya CP | Full Stack Developer",
    description:
      "Full Stack Developer & Builder. Building AI-integrated applications and developer tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "h-full antialiased",
        geistMono.variable,
        jetbrainsMono.variable
      )}
      lang="en"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
      }}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-black text-white">
        {children}
      </body>
    </html>
  );
}
