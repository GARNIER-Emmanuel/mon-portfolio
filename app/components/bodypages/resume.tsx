import { useState } from "react";

const experiences = [
  {
    title: "Développeur junior",
    location: "Alternance | Bordeaux",
    date: "septembre 2023 - Aujourd'hui",
    description:
      "Missions dans l'éditique mais, également en développement logiciel Java au sein de l'entreprise CGI.",
    company: "CGI",
    tech: ["Java", "PDFBox", "JavaFX"],
    image: "/cgi.png"
  },
  {
    title: "Stagiaire développeur web",
    location: "Stage | Pau",
    date: "2022 - 2023",
    description:
      "Création d'un formulaire client pour un dentiste avec Symfony chez ElémentRoot.",
    company: "ElémentRoot",
    tech: ["Symfony", "PHP", "HTML", "CSS"],
    image: "/elementroot.png"
  },
  {
    title: "Stagiaire développeur web",
    location: "Stage | Pau",
    date: "2021 - 2022",
    description:
      "Programmation d'un jeu web en HTML, CSS et PHP pour un escape game, chez Madness Escape Game.",
    company: "Madness Escape Game",
    tech: ["HTML", "CSS", "PHP"],
    image: "/madness.png"
  },
  {
    title: "Caissier",
    location: "CDI | Pau",
    date: "2022 - 2023",
    description:
      "Travaille à temps partiel à Intermarché les week-ends.",
    company: "Intermarché",
    image: "/inter.png"
  },
  {
    title: "Stagiaire boucher",
    location: "Stage | Bordeaux",
    date: "2017",
    description:
      "Découverte du métier de boucher à la Boucherie Favin Clément.",
    company: "Boucherie Favin Clément"
  },
  {
    title: "Voyage scolaire",
    location: "Italie",
    date: "2016",
    description:
      "Voyage scolaire en Italie avec option Latin en 2016.",
    company: "Collège"
  }
];

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="experience-section">
        <div className="skills-section" id="experience">
      <h2><strong>Expérience</strong></h2>
        <div className="timeline-title"/>
      <div className="timeline-bar">
        {experiences.map((exp, index) => (
         <div
            key={index}
            className={`timeline-point 
                ${index === activeIndex ? "active" : ""} 
                ${index < activeIndex ? "past" : ""}`}
            onClick={() => setActiveIndex(index)}
            style={{ left: `${(index / (experiences.length - 1)) * 100}%` }}
            >
            <span className="year-label">{exp.date}</span>
         </div>

        ))}

        <div
          className="timeline-progress"
          style={{ width: `${(activeIndex / (experiences.length - 1)) * 100}%` }}
        ></div>
      </div>

      <div className="timeline-details" style={{ display: "flex", alignItems: "center" }}>
        {experiences[activeIndex].image && (
        <img 
            src={experiences[activeIndex].image} 
            alt={experiences[activeIndex].company + " logo"} 
            className="experience-logo"        />
        )}
        <div>
            <h3>{experiences[activeIndex].title}</h3>
            <h4>{experiences[activeIndex].company ?? experiences[activeIndex].location}</h4>
            <p>{experiences[activeIndex].description}</p>

            {experiences[activeIndex].tech && (
            <ul className="tech-list">
                {experiences[activeIndex].tech.map((tech, i) => (
                <li key={i}>{tech}</li>
                ))}
            </ul>
            )}
        </div>
        </div>

      </div>
    

    </div>
  );
}
