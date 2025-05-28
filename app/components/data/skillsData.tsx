export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Langages de Programmation',
    icon: 'bi-code-slash',
    skills: [
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'Java (POO)', level: 90 },
      { name: 'PHP', level: 80 },
    ],
  },
  {
    title: 'Frameworks et Bibliothèques',
    icon: 'bi-box-seam',
    skills: [
      { name: 'ReactJS', level: 50 },
      { name: 'Next.js React', level: 60 },
      { name: 'Angular', level: 40 },
      { name: 'Symfony', level: 60 },
      { name: 'Tailwind CSS', level: 40 },
    ],
  },
  {
    title: 'CMS et Plateformes',
    icon: 'bi-columns-gap',
    skills: [
      { name: 'WordPress', level: 80 },
      { name: 'PrestaShop', level: 60 },
      { name: 'Joomla', level: 50 },
    ],
  },
  {
    title: 'Bases de Données',
    icon: 'bi-database',
    skills: [
      { name: 'MySQL (SQL)', level: 70 },
      { name: 'PostgreSQL (SQL)', level: 80 },
      { name: 'MongoDB (NoSQL)', level: 70 },
    ],
  },
  {
    title: 'Systèmes et Outils Techniques',
    icon: 'bi-tools',
    skills: [
      { name: 'Machines virtuelles', level: 70 },
      { name: 'Installation & paramétrage OS', level: 90 },
      { name: 'Docker & Docker Compose', level: 80 },
      { name: 'Commandes DOS & UNIX', level: 70 },
      { name: 'Scripts', level: 70 },
    ],
  },
  {
    title: 'IDE et Environnements de Développement',
    icon: 'bi-laptop',
    skills: [
      { name: 'VSCode (IDE)', level: 90 },
      { name: 'NetBeans (IDE)', level: 70 },
      { name: 'IntelliJ (IDE)', level: 80 },
      { name: 'Eclipse (IDE)', level: 60 },
    ],
  },
  {
    title: 'Réseaux et Sécurité',
    icon: 'bi-shield-lock',
    skills: [
      { name: 'Administration réseau (IP, sous-réseaux, matériel)', level: 60 },
      { name: 'Sécurité : Loi, RGPD, CNIL, chiffrement', level: 80 },
      { name: 'Signature électronique', level: 60 },
      { name: 'Pare-feu, Antivirus', level: 70 },
      { name: 'Sécurisation du SI', level: 60 },
      { name: 'Protocoles : SSH, FTP, Serveur web', level: 60 },
    ],
  },
  {
    title: "Méthodes et Techniques d'Analyse",
    icon: 'bi-journal-text',
    skills: [
      { name: "Méthodes d'analyse : MERISE, UML", level: 90 },
      { name: 'Architecture logicielle : MVC, DAO', level: 90 },
    ],
  },
];

export default skillsData;
