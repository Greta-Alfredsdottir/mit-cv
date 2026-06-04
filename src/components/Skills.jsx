import React from 'react';
import { Code, Server, Wrench, Coffee, CheckCircle } from 'lucide-react';

const Skills = ({ skills, interests, extras = [] }) => {
  const getCategoryIcon = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('lang') || name.includes('core') || name.includes('sprog') || name.includes('web') || name.includes('udvikling')) return <Code size={18} />;
    if (name.includes('lib') || name.includes('frame') || name.includes('support') || name.includes('infra')) return <Server size={18} />;
    return <Wrench size={18} />;
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        
        <div className="section-header">
          <h2>Skills & Profile</h2>
          <p>My professional tools, administrative skills, and personal strengths.</p>
        </div>

        <div className="skills-container">
          
          {/* Left Column: Context and Interests */}
          <div className="skills-left">
            <h3>Dedicated & Solution-Oriented</h3>
            <p>
              I have many years of experience in the labor market and am passionate about finding connections and solutions. With a strong numerical understanding, an IT background, and extensive experience in bookkeeping and Excel, I always deliver high-quality work.
            </p>
            <p>
              I work in a structured and thorough manner with figures and documentation, take responsibility for my tasks, and am motivated to learn about new people and workflows.
            </p>

            {extras.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent-color)', fontWeight: 700 }}>Employment Benefits</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {extras.map((extra, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle size={16} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                      <span>{extra}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Personal Interests</h4>
            <div className="interests-flex">
              {interests.map((interest, index) => (
                <div key={index} className="interest-item">
                  <Coffee size={14} style={{ color: 'var(--accent-color)' }} />
                  {interest}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skill categories */}
          <div className="skills-categories">
            {skills.categories.map((category, catIndex) => (
              <div key={catIndex} className="skill-category-card card-glass">
                <h4>
                  {getCategoryIcon(category.name)}
                  {category.name}
                </h4>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div 
                          className="progress-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
