import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

const ProjectModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content card-glass" 
        onClick={(e) => e.stopPropagation()} // Stop closing modal when clicking inside
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="modal-image">
          <img src={project.image} alt={project.title} />
          <div className="modal-image-overlay" />
        </div>

        <div className="modal-body">
          <h2>{project.title}</h2>
          <h3>{project.subtitle}</h3>

          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="modal-description">
            <p>{project.longDescription || project.description}</p>
          </div>

          <div className="modal-footer">
            {project.github && project.github !== '#' && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                <Github size={18} /> Code Repository
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <ExternalLink size={18} /> Launch Application
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
