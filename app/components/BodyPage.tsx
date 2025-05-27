import React from 'react';
import photo from '../img/dev.png'; // adapte le chemin

export default function BodyPage() {
  return (
 <main className="bodypage-container" id="home">
    <div className="scroll-wrapper">

    <div className="hero-image-container">
      <img src={photo.src} alt="Photo principale" className="hero-image" />
      <div className="hero-text">
        <h2>Emmanuel GARNIER BOIDUN</h2>
        <p>Développeur Full-Stack</p>
      </div>
    </div>

  </div>
  
  <section className="content-section">
    <h1>Bienvenue sur mon portfolio</h1>
    <p>Voici la section principale avec du contenu scrollable.</p>

    {[...Array(50)].map((_, i) => (
      <p key={i}>Paragraphe de contenu numéro {i + 1}</p>
    ))}
  </section>
</main>

  );
}
