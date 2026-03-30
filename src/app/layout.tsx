import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Industrial Laser Safety — Knowledge Assessment Hub",
  description:
    "Adaptive laser safety quizzes with remediation-based learning for industrial laser technicians and safety officers.",
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
