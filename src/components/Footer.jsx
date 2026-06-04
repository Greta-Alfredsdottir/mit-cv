import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './BrandIcons';

const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Social Links */}
        <div className="social-links">
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub Link">
              <Github />
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn Link">
              <Linkedin />
            </a>
          )}
          {personalInfo.twitter && (
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" title="Twitter" aria-label="Twitter Link">
              <Twitter />
            </a>
          )}
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} title="Email" aria-label="Email Link">
              <Mail />
            </a>
          )}
        </div>

        <p>&copy; {currentYear} {personalInfo.name}. Built with React, JavaScript, and SCSS. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
