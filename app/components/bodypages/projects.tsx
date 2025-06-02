import React from "react";

const projects = [
  {
    id: 2,
    title: "Projet FeedlyReader",
    image: "/FeedlyReader.png",
    summary: "Application web de lecture de flux RSS centralisée.",
    description: `FeedlyReader centralise les flux RSS par thèmes pour une lecture rapide et claire.

Développé avec React/Next.js, il offre une interface fluide et responsive. Il intègre une gestion avancée des flux et une sélection intelligente des articles les plus pertinents par catégorie.

Ce projet illustre mes compétences en frontend moderne, API et UX/UI.`,
    github: "https://github.com/tonpseudo/feedlyreader",
    site: "https://feedly-reader.vercel.app/",
    date: "2024",                  // ajout date
    tag: "perso",                   // ajout tag
  },
  
  {
    id: 1,
    title: "Projet Android Immo'Bill",
    image: "/ProjetImmo.png",
    summary: "Application mobile de gestion locative pour agences immobilières.",
    description: `Développé sous Android Studio, Immo'Bill facilite la réservation de villas et offre une vue complète sur les locataires, les villas et leurs équipements.

Le projet a été organisé avec un planning Gantt pour répartir les tâches efficacement. La base de données a été modélisée avec JMerise, générant automatiquement le code SQL nécessaire.

Une documentation technique complète a été réalisée, soulignant mon implication personnelle et mes contributions au développement de l'application.`,
    github: "https://github.com/tonpseudo/immobill",
    site: "https://github.com/tonpseudo/projet-inter",
    date: "2023",
    tag: "formation",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="carousel-container" id="projects">
      {projects.map(({ id, title, image, summary, description, github, site, date, tag }) => (
        <div key={id} className="project-card">
          <img src={image} alt={title} className="project-image" />
          <div className="project-content">
            <div className="project-title">{title}</div>
            <div className="project-meta">
              <span className="project-date">{date}</span>
              <span className={`project-tag project-tag-${tag}`}>{tag}</span>
            </div>
            <div className="project-summary">{summary}</div>
          </div>
          <div className="project-description">
            <p>{description}</p>
            <div className="project-buttons">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                Voir sur GitHub
              </a>
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button"
              >
                Voir le site en ligne
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
