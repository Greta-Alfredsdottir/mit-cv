import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = ({ projects, setSelectedProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract all unique tags across all projects
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        
        <div className="section-header">
          <h2>Featured Work</h2>
          <p>A curated collection of web applications, database engines, and cryptographic platforms I have engineered.</p>
        </div>

        {/* Project Tag Filters */}
        <div className="projects-filter">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card card-glass">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span 
                    className="learn-more"
                    onClick={() => setSelectedProject(project)}
                  >
                    Learn Details <ArrowRight size={14} />
                  </span>

                  <div className="links">
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer" title="View Source on GitHub" aria-label="GitHub Link">
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noreferrer" title="Launch App" aria-label="Live Demo Link">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
