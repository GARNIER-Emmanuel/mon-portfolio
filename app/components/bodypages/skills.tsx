import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

interface SkillsProps {
  skillsData: SkillCategory[];
}

export default function Skills({ skillsData }: SkillsProps) {
  const [flipped, setFlipped] = useState<boolean[]>(skillsData.map(() => false));

  const toggleFlip = (index: number) => {
    setFlipped(prev => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <section className="skills-section" id="skills">
      <h2><strong>Compétences</strong></h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <i className={`bi ${category.icon}`} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></i>
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
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
