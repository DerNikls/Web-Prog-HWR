import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/component/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoraWAN - A LoRaWAN-Blog-Page",
  description: "Blog-Site for a study-project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="de">
      <body className={inter.className}>{children}</body>
      </html>
  );
}
