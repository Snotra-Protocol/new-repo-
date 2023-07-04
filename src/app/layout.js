"use client";
import Header from "./components/header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
        <body>{children}</body>
        {/* Diğer bileşenler veya içerik */}
    </html>
  );
}
