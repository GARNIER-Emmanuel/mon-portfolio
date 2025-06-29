import React from 'react';
import imgPp from '../img/pp.png';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2><strong>À propos de moi</strong></h2>
      <p>
        Je suis un développeur passionné, spécialisé en Full-Stack avec une
        expérience en React, Node.js, et bien d'autres technologies. J'aime
        créer des applications performantes et intuitives.
        <br />
        En dehors du code, je m'intéresse à la musique, au sport et à la
        cinématographie. <br />
        Je suis également motivé par le travail en équipe, la résolution de
        problèmes complexes et l'apprentissage continu dans un secteur en
        évolution rapide.
      </p>
      <div className="profile-about-container">
        <img src={imgPp.src} alt="Photo de profil" className="profile-photo" />
        <div className="contact-info">
          <h3>Développeur Full-Stack</h3>
          <p><strong>Nom complet :</strong> Emmanuel GARNIER BOIDUN</p>
          <p><strong>Date de naissance :</strong> 22 juillet 2002</p>
          <p><strong>Âge :</strong> 22 ans</p>
          <p><strong>Niveau d'étude :</strong> Master 1re année</p>
          <p><strong>Téléphone :</strong> 06 61 74 29 19</p>
          <p><strong>Email :</strong> manu.boidun@gmail.com</p>
          <p><strong>Adresse :</strong> 15 route de margaux, 33480 Avensan</p>
          <p><strong>Centres d'intérêt :</strong> Musique, Sport, Cinématographie</p>
          <p><strong>Langues :</strong> Français (natif), Anglais (B1), Espagnol (A2)</p>
        </div>
      </div>
    </section>
  );
}
