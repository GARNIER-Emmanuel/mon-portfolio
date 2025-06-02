import React, { useRef, useEffect, useState } from 'react';
import Home from './bodypages/home';
import About from './bodypages/about';
import Skills from './bodypages/skills';
import skillsData from './data/skillsData';
import Resume from './bodypages/resume';
import ResumeSchool from './bodypages/resume-school';

export default function BodyPage() {
  return (
    <main className="bodypage-container">
      <Home />
      <About />
      <Skills skillsData={skillsData} />
      <Resume/>
      <ResumeSchool/>
    </main>
  );
}
