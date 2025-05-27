"use client";

import { Sidebar } from "./components/Sidebar";
import BodyPage from './components/BodyPage';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="root-body">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <Sidebar />
        <BodyPage />
        <main>{children}</main>
      </body>
    </html>
  );
}
