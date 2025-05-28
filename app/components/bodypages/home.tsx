import React from 'react';
import imgDev from '../img/dev.png';

export default function Home() {
  return (
    <section className="hero-image-container" id="home">
      <img src={imgDev.src} alt="Photo principale" className="hero-image" />
      <div className="hero-text">
        <h2>Emmanuel GARNIER BOIDUN</h2>
        <p>Développeur Full-Stack</p>
      </div>
    </section>
  );
}
