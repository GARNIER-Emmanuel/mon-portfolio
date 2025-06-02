"use client";

import Sidebar from './components/Sidebar';
import BodyPage from './components/BodyPage';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./styles/webcss.css";
import "./styles/mobilecss.css";

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
        <body className="root-body">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>

        <Sidebar />
        <BodyPage />
        <main>{children}</main>
      </body>
    </html>
  );
}
