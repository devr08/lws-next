import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Lika Wira Sakti | Layanan Keamanan Terpercaya di Tangerang",
  description:
    "Selamat datang di PT Lika Wira Sakti, mitra keamanan andalan di Tangerang. Kami menyediakan layanan keamanan berkualitas tinggi dengan tim ahli yang berpengalaman. Jaga keamanan aset Anda bersama kami.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
