import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, FileText, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Hero = ({ personalInfo }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const roles = [
    "webdeveloper",
    "AI Systems Researcher",
    
  ];

  // Simple typing effect for the hero titles
  useEffect(() => {
    let currentRole = roles[typedIndex];
    let isDeleting = false;
    let textIndex = 0;
    let timer;

    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, textIndex + 1));
        textIndex++;

        if (textIndex === currentRole.length) {
          isDeleting = true;
          // Hold the fully typed word for 2.5 seconds
          timer = setTimeout(tick, 2500);
        } else {
          timer = setTimeout(tick, 100);
        }
      } else {
        setTypedText(currentRole.substring(0, textIndex - 1));
        textIndex--;

        if (textIndex === 0) {
          isDeleting = false;
          setTypedIndex((prev) => (prev + 1) % roles.length);
          timer = setTimeout(tick, 500);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [typedIndex]);

  return (
    <section id="home" className="hero section">
      <div className="bg-glow"></div>
      <div className="container hero-container">
        
        {/* Text/Content Plane */}
        <div className="hero-content">
          <span className="greeting">Welcome to my space</span>
          <h1>Hi, I'm {personalInfo.name}</h1>
          <div className="typed-text">
            Creative <span>{typedText}</span>|
          </div>
          <p className="bio">
            {personalInfo.bio} I specialize in engineering systems that blend computational intelligence with fluid, high-fidelity user experiences.
          </p>

          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={18} />
            </a>
            <button onClick={() => window.print()} className="btn btn-secondary">
              <FileText size={18} /> Download CV
            </button>
          </div>
        </div>

        {/* Dynamic Portrait Plane */}
        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="avatar-wrapper">
            <img src={personalInfo.avatar} alt={personalInfo.name} />
          </div>
        </div>

        {/* Print-Only Header info (Visible when printing to PDF, hidden otherwise) */}
        <div className="print-header-info" style={{ display: 'none' }}>
          <div>
            <strong>Email:</strong> {personalInfo.email}
          </div>
          <div>
            <strong>Phone:</strong> {personalInfo.phone}
          </div>
          <div>
            <strong>Location:</strong> {personalInfo.location}
          </div>
          <div>
            <strong>GitHub:</strong> {personalInfo.github.replace('https://', '')}
          </div>
          <div>
            <strong>LinkedIn:</strong> {personalInfo.linkedin.replace('https://', '')}
          </div>
          <div>
            <strong>Website:</strong> {personalInfo.website.replace('https://', '')}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
