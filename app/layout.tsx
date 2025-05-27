"use client";

import { Sidebar } from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        style={{
          paddingLeft: window.innerWidth >= 768 ? "250px" : "0",
          transition: "padding-left 0.3s"
        }}
        ><link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />

        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}