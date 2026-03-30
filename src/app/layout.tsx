import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Industrial Tech Master Quiz — Laser Safety Assessment",
  description:
    "Adaptive laser safety quiz with remediation-based learning for industrial laser technicians, aligned to ANSI Z136.1.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-industrial-50 text-industrial-900 antialiased">
        {children}
      </body>
    </html>
  );
}
