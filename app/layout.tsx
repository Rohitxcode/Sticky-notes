import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sticky Notes",
  description: "Nostaligic theme sticky application to create, organize, and search your notes.",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${garamond.variable}`}>
      <body className="font-garamond">{children}</body>
    </html>
  );
}
