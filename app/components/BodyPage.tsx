import React, { useRef, useEffect, useState } from 'react';
import imgDev from '../img/dev.png';
import imgPp from '../img/pp.png';
const skillsData = [
  {
    title: 'Langages de Programmation',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java (POO)', level: 80 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    title: 'Frameworks et Bibliothèques',
    skills: [
      { name: 'ReactJS', level: 85 },
      { name: 'Next.js React', level: 70 },
      { name: 'Angular', level: 65 },
      { name: 'Symfony', level: 70 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    title: 'CMS et Plateformes',
    skills: [
      { name: 'WordPress', level: 80 },
      { name: 'PrestaShop', level: 70 },
      { name: 'Joomla', level: 60 },
    ],
  },
  {
    title: 'Bases de Données',
    skills: [
      { name: 'MySQL (SQL)', level: 85 },
      { name: 'PostgreSQL (SQL)', level: 70 },
      { name: 'MongoDB (NoSQL)', level: 65 },
    ],
  },
  {
    title: 'Systèmes et Outils Techniques',
    skills: [
      { name: 'Machines virtuelles', level: 70 },
      { name: 'Installation & paramétrage OS', level: 70 },
      { name: 'Docker & Docker Compose', level: 75 },
      { name: 'Commandes DOS & UNIX', level: 80 },
      { name: 'Scripts', level: 75 },
    ],
  },
  {
    title: 'IDE et Environnements de Développement',
    skills: [
      { name: 'VSCode (IDE)', level: 90 },
      { name: 'NetBeans (IDE)', level: 60 },
      { name: 'IntelliJ (IDE)', level: 65 },
      { name: 'Eclipse (IDE)', level: 60 },
    ],
  },
  {
    title: 'Réseaux et Sécurité',
    skills: [
      { name: 'Administration réseau (IP, sous-réseaux, matériel)', level: 65 },
      { name: 'Sécurité : Loi, RGPD, CNIL, chiffrement', level: 60 },
      { name: 'Signature électronique', level: 55 },
      { name: 'Pare-feu, Antivirus', level: 65 },
      { name: 'Sécurisation du SI', level: 65 },
      { name: 'Protocoles : SSH, FTP, Serveur web', level: 70 },
    ],
  },
  {
    title: "Méthodes et Techniques d'Analyse",
    skills: [
      { name: "Méthodes d'analyse : MERISE, UML", level: 70 },
      { name: 'Architecture logicielle : MVC, DAO', level: 75 },
    ],
  },
];


export default function BodyPage() {
  const [flipped, setFlipped] = useState<boolean[]>(skillsData.map(() => false));

  // Fonction pour flip une carte
  const toggleFlip = (index: number) => {
    setFlipped(prev => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <main className="bodypage-container" id="home">
      <div className="hero-image-container">
        <img src={imgDev.src} alt="Photo principale" className="hero-image" />
        <div className="hero-text">
          <h2>Emmanuel GARNIER BOIDUN</h2>
          <p>Développeur Full-Stack</p>
        </div>
      </div>

      {/* À propos */}
      <div className="about-section" id="about">
        <h2>
          <strong>À propos de moi</strong>
        </h2>
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
      </div>

      {/* Section Compétences avec cards flip */}
      <section className="skills-section" id="skills">
        <h2><strong>Compétences</strong></h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(index)} // clic pour flip la carte
              style={{ cursor: 'pointer' }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{category.title}</h3>
                </div>
                <div
                  className="flip-card-back"
                  style={{
                    height: '300px',
                    overflowY: 'auto',
                    padding: '10px',
                    boxSizing: 'border-box',
                  }}
                >
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <p>{skill.name}</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
