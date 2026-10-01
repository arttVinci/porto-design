import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiar Rizky Budiyono, A.Md.T. - Industrial Electronics & Automation Engineer",
  description:
    "Portfolio of Tiar Rizky Budiyono, A.Md.T. Industrial electronics and automation engineer specializing in PLC, ESP32, embedded systems, panel wiring, and IoT support.",
  keywords: [
    "Tiar Rizky Budiyono",
    "Industrial Electronics",
    "Automation Engineer",
    "Politeknik Negeri Jakarta",
    "IoT Support",
    "PT Akebono Brake Astra",
    "ESP32",
    "PLC",
    "Arduino",
    "Control Systems",
  ],
  authors: [{ name: "Tiar Rizky Budiyono" }],
  creator: "Tiar Rizky Budiyono",
  openGraph: {
    title: "Tiar Rizky Budiyono, A.Md.T. - Industrial Electronics & Automation Engineer",
    description:
      "Industrial electronics and automation engineer specializing in PLC, ESP32, embedded control systems, and panel wiring.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
