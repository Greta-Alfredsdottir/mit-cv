import React from 'react';
import { BookOpen, Award, ExternalLink, Calendar } from 'lucide-react';

const Publications = ({ publications = [], certifications = [] }) => {
  const hasPublications = publications && publications.length > 0;
  const hasCertifications = certifications && certifications.length > 0;

  if (!hasPublications && !hasCertifications) return null;

  return (
    <section id="research" className="section">
      <div className="container">
        
        <div className="section-header">
          <h2>{hasPublications ? "Publications & Honors" : "Certifications & Credentials"}</h2>
          <p>
            {hasPublications 
              ? "Research publications in machine learning and professional industry certifications." 
              : "Vocational diplomas and official certifications validating my expertise."}
          </p>
        </div>

        {hasPublications ? (
          <div className="extras-container">
            {/* Publications column */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} style={{ color: 'var(--accent-color)' }} /> Research Publications
              </h3>
              
              {publications.map((pub, index) => (
                <div key={index} className="pub-card card-glass">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <h3>{pub.title}</h3>
                    {pub.link && pub.link !== '#' && (
                      <a href={pub.link} target="_blank" rel="noreferrer" className="icon-btn" style={{ width: '1.75rem', height: '1.75rem' }} title="Read Paper">
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <div className="authors">{pub.authors}</div>
                  <div className="venue">{pub.venue} ({pub.year})</div>
                  <p className="abstract">
                    <strong>Abstract:</strong> {pub.abstract}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications column */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} style={{ color: 'var(--accent-color)' }} /> Certifications
              </h3>

              {certifications.map((cert, index) => (
                <div key={index} className="cert-card card-glass">
                  <div className="cert-icon">
                    <Award size={20} />
                  </div>
                  <div className="cert-details">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem', fontSize: '0.75rem' }}>
                      <Calendar size={10} /> Certified {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Certifications Only Grid Layout */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card card-glass" style={{ margin: 0, padding: '1.5rem' }}>
                <div className="cert-icon" style={{ width: '3rem', height: '3rem' }}>
                  <Award size={24} />
                </div>
                <div className="cert-details">
                  <h4 style={{ fontSize: '1.1rem' }}>{cert.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', fontSize: '0.8rem' }}>
                    <Calendar size={12} /> Obtained {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Publications;
