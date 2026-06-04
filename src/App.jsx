import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { cvData } from './data/cvData';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('accent') || 'crimson';
  });

  const [selectedProject, setSelectedProject] = useState(null);

  // Sync theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync accent to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('accent', accent);
  }, [accent]);

  return (
    <>
      <Header 
        theme={theme} 
        setTheme={setTheme} 
        accent={accent} 
        setAccent={setAccent} 
        name={cvData.personalInfo.name}
        hasPublications={cvData.publications && cvData.publications.length > 0}
      />
      
      <main>
        <Hero personalInfo={cvData.personalInfo} />
        
        <Timeline 
          education={cvData.education} 
          experience={cvData.experience} 
        />
        
        <Skills 
          skills={cvData.skills} 
          interests={cvData.interests} 
          extras={cvData.personalInfo.extras}
        />
        
        <Projects 
          projects={cvData.projects} 
          setSelectedProject={setSelectedProject} 
        />
        
        <Publications 
          publications={cvData.publications} 
          certifications={cvData.certifications} 
        />
        
        <Contact personalInfo={cvData.personalInfo} />
      </main>

      <Footer personalInfo={cvData.personalInfo} />

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}

export default App;
