import React, { useState, useEffect } from "react";
import Image from 'next/image';
import profileImage from '../img/profile.png';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Empêche le scroll du body quand sidebar mobile ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Bouton toggle uniquement visible sur mobile */}
      <button
        className="btn btn-dark d-md-none fixed-top m-2"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        style={{
          zIndex: 1050,
          width: "40px",
          height: "40px",
          padding: "0",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <i className="bi bi-app" style={{ fontSize: "1.5rem" }}></i>
      </button>

      {/* Overlay semi-transparent mobile */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
          style={{ zIndex: 1045 }}
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
     <nav
        className="custom-sidebar-bg text-white vh-100 p-3 position-fixed top-0 start-0 d-flex flex-column flex-shrink-0"
        style={{
          width: "250px",
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
        }}
      >

        {/* Conteneur centré verticalement et horizontalement */}
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: "12px",
              border: "3px solid white",
              backgroundColor: "#444",
            }}
          >
            <Image
              src={profileImage}
              alt="Photo de profil"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span className="fs-5 fw-semibold text-center mb-4">Emmanuel <br /> GARNIER BOIDUN</span>

          {/* Réseaux sociaux */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            <a href="https://www.linkedin.com/in/emmanuel-garnier-boidun-456a85208/" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <i className="bi bi-linkedin"></i>
            </a>
            
            <a href="https://github.com/GARNIER-Emmanuel?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <i className="bi bi-github"></i>
            </a>

            <a href="https://www.instagram.com/manuu_bdn/" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <i className="bi bi-instagram"></i>
            </a>
          </div>

          <hr style={{ width: "100%" }} />

          <ul className="nav nav-pills flex-column mb-auto w-100">
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link text-white d-flex align-items-center"
                onClick={closeSidebar}
              >
                <i
                  className="bi bi-house"
                  style={{ fontSize: "1.2rem", marginRight: "8px" }}
                ></i>
                Accueil
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="nav-link text-white d-flex align-items-center"
                onClick={closeSidebar}
              >
                <i
                  className="bi bi-person"
                  style={{ fontSize: "1.2rem", marginRight: "8px" }}
                ></i>
                À propos
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="nav-link text-white d-flex align-items-center"
                onClick={closeSidebar}
              >
                <i
                  className="bi bi-award"
                  style={{ fontSize: "1.2rem", marginRight: "8px" }}
                ></i>
                Compétences
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="nav-link text-white d-flex align-items-center"
                onClick={closeSidebar}
              >
                <i
                  className="bi bi-briefcase"
                  style={{ fontSize: "1.2rem", marginRight: "8px" }}
                ></i>
                Expériences Pro
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="nav-link text-white d-flex align-items-center"
                onClick={closeSidebar}
              >
                <i
                  className="bi bi-folder"
                  style={{ fontSize: "1.2rem", marginRight: "8px" }}
                ></i>
                Projets
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="nav-link text-white d-flex align-items-center"
                onClick={closeSidebar}
              >
                <i
                  className="bi bi-chat-right-text"
                  style={{ fontSize: "1.2rem", marginRight: "8px" }}
                ></i>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* CSS pour forcer la sidebar visible sur desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          nav {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}
