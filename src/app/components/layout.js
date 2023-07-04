"use client";
import React from "react";
import Header from "./components/header";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
      {/* Diğer bileşenler veya içerik */}
    </html>
  );
};

export default Layout;
