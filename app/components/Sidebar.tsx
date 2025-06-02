import React, { useState, useEffect } from "react";
import Image from 'next/image';
import profileImage from './img/profile.png';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // appel initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Gère le scroll du body pour mobile
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

  // Détecte si on est en desktop
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  

  if (!hasMounted) return null;

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Bouton toggle visible seulement sur mobile */}
      <button
        className="btn d-md-none btn-toggle-sidebar"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
      <i className="bi bi-list fs-2 text-white" ></i>
      </button>

      {/* Overlay mobile */}
      {isOpen && !isDesktop && (
        <div
          className="sidebar-overlay d-md-none"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <nav
      className={`custom-sidebar-bg text-white vh-100 p-3 position-fixed top-0 start-0 d-flex flex-column flex-shrink-0 ${isOpen || isDesktop ? "open" : ""}`}>
    
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
          <div className="profile-photo-container">
            <Image
              src={profileImage}
              alt="Photo de profil"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span className="sidebar-text">
            Emmanuel <br /> GARNIER BOIDUN
          </span>

          <div className="sidebar-social-links">
            <a href="https://www.linkedin.com/in/emmanuel-garnier-boidun-456a85208/" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/GARNIER-Emmanuel?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.instagram.com/manuu_bdn/" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
          </div>

          <hr style={{ width: "100%" }} />

          <ul className="nav nav-pills flex-column mb-auto w-100 sidebar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link text-white d-flex align-items-center" onClick={closeSidebar}>
                <i className="bi bi-house"></i> Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link text-white d-flex align-items-center" onClick={closeSidebar}>
                <i className="bi bi-person"></i> À propos
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link text-white d-flex align-items-center" onClick={closeSidebar}>
                <i className="bi bi-award"></i> Compétences
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link text-white d-flex align-items-center" onClick={closeSidebar}>
                <i className="bi bi-briefcase"></i> Expériences Pro
              </a>
            </li>
            <li>
              <a href="#education" className="nav-link text-white d-flex align-items-center" onClick={closeSidebar}>
                <i className="bi bi-book"></i> Formations
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link text-white d-flex align-items-center" onClick={closeSidebar}>
                <i className="bi bi-folder"></i> Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link text-white d-flex align-items-center" onClick={closeSidebar}>
                <i className="bi bi-chat-right-text"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
