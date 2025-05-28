import React from 'react';
import imgPp from '../img/pp.png';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2><strong>À propos de moi</strong></h2>
      <p>
        Je suis un développeur passionné, spécialisé en Full-Stack avec une
        expérience en React, Node.js, et bien d’autres technologies. J’aime
        créer des applications performantes et intuitives.
        <br />
        En dehors du code, je m’intéresse à la musique, à la lecture et à
        l’amélioration constante de mes compétences. <br />
        Je suis également motivé par le travail en équipe, la résolution de
        problèmes complexes et l’apprentissage continu dans un secteur en
        évolution rapide.
      </p>
      <div className="profile-about-container">
        <img src={imgPp.src} alt="Photo de profil" className="profile-photo" />
        <div className="contact-info">
          <h3>Développeur Full-Stack</h3>
          <p><strong>Date de naissance :</strong> 22 juillet 2002</p>
          <p><strong>Âge :</strong> 23 ans</p>
          <p><strong>Niveau d'étude :</strong> Master</p>
          <p><strong>Téléphone :</strong> +33 6 61 74 29 19</p>
          <p><strong>Email :</strong> manu.boidun@gmail.com</p>
          <p><strong>Ville :</strong> Bordeaux</p>
          <p><strong>Adresse :</strong> 12 rue des Fleurs, 33000 Bordeaux</p>
          <p><strong>Langues :</strong> Français (natif), Anglais (courant)</p>
          <p><strong>Passions :</strong> Musique, lecture, sport, nouvelles technologies</p>
        </div>
      </div>
    </section>
  );
}
