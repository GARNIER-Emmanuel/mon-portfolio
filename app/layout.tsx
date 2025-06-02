"use client";

import Sidebar from './components/Sidebar';
import BodyPage from './components/BodyPage';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./styles/webcss.css";
import "./styles/mobilecss.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="root-body">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76A2z02tPqdjFzN1N00rGdFH2zPz3b2A+X9UpxK+3fnRTwJYhXjFZxjdGA9QwZ0"
          crossOrigin="anonymous"
          defer
        ></script>

        <Sidebar />
        <BodyPage />
        <main>{children}</main>
      </body>
    </html>
  );
}
