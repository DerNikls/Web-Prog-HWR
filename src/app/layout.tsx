import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/*
This file defines the RootLayout component, which serves as the layout wrapper for the entire application. It imports
necessary dependencies such as Metadata from Next.js, Inter font from Google Fonts, and the Footer component.
Additionally, it sets up global styles via "./globals.css".
*/

// Define Inter font with a subset of "latin"
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application, such as WebBrowser-Tab-Title and Description
export const metadata: Metadata = {
  title: "LoraWAN - A LoRaWAN-Blog-Page",
  description: "Blog-Site for a study-project.",
};

// RootLayout component to wrap the entire application
export default function RootLayout({
  children, // Children elements to be rendered within the layout
}: Readonly<{
  children: React.ReactNode; // React children elements
}>) {
  return (
      <html lang="de"> {/* Setting HTML Tag for german language */}
      <body className={inter.className}>{children}</body> {/* Applying Inter font and rendering children */}
      </html>
  );
}
