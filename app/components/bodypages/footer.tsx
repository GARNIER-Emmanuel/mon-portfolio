import React from 'react';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Emmanuel GARNIER BOIDUN </p>
        <div className="footer-links">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#experience">Expérience</a>
          <a href="#education">Formation</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
