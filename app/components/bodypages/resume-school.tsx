import { useState } from "react";

const educations = [
  {
    title: "Master 1re année développeur full stack",
    school: "Sup de Vinci, Bordeaux",
    date: "Depuis 2024",
    description: "Formation actuelle en alternance orientée développement full stack.",
    image: "/SupDeVinci.png"
  },
  {
    title: "Bachelor Concepteur développeur d'applications",
    school: "CESI, Bordeaux",
    date: "Obtenu en 2024",
    description: "Formation en alternance avec forte composante pratique.",
    image: "/cesi.png"
  },
  {
    title: "BTS SIO (Services Informatiques aux Organisations) option SLAM",
    school: "Lycée Saint-John Perse, Pau",
    date: "Obtenu en 2023",
    description: "Spécialisation en Solutions Logicielles et Applications Métiers.",
    image: "/SaintJhonPerse.png"
  },
  {
    title: "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable",
    school: "Lycée Saint-Cricq, Pau",
    date: "Obtenu en 2021",
    description: "Spécialisation en innovation technologique et développement durable.",
    image: "/Saint-Criq.png"
  }
];


export default function ExperienceTimeline() {
  const [activeEducationIndex, setActiveEducationIndex] = useState(0);

  return (
    <div className="education-section">
          {/* Bloc Formations */}
      <div className="skills-section" id="education">
        <h2><strong>Formations</strong></h2>
        <div className="timeline-title" />
        <div className="timeline-bar">
          {educations.map((edu, index) => (
            <div
              key={index}
              className={`timeline-point 
                ${index === activeEducationIndex ? "active" : ""} 
                ${index < activeEducationIndex ? "past" : ""}`}
              onClick={() => setActiveEducationIndex(index)}
              style={{ left: `${(index / (educations.length - 1)) * 100}%` }}
            >
              <span className="year-label">{edu.date}</span>
            </div>
          ))}

          <div
            className="timeline-progress"
            style={{ width: `${(activeEducationIndex / (educations.length - 1)) * 100}%` }}
          ></div>
        </div>

        <div className="timeline-details" style={{ display: "flex", alignItems: "center" }}>
            {educations[activeEducationIndex].image && (
              <img 
                src={educations[activeEducationIndex].image} 
                alt={educations[activeEducationIndex].school + " logo"} 
                className="experience-logo"
              />
            )}
            <div>
            <h3>{educations[activeEducationIndex].title}</h3>
            <h4>{educations[activeEducationIndex].school}</h4>
            <p>{educations[activeEducationIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
