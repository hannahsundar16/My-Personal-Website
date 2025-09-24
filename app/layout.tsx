import type { Metadata } from "next";
import { Archivo as ArchivoFont } from "next/font/google";
import React from "react";
import "./globals.css";

const Archivo = ArchivoFont({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hannah Sundar",
  description: "Hannah Sundar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Archivo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
