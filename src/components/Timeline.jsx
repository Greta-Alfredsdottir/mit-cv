import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Timeline = ({ education, experience }) => {
  const [activeTab, setActiveTab] = useState('all');

  // Format all events into a unified array sorted by time if needed,
  // or simply display Work followed by Education depending on filter.
  const workEvents = experience.map(exp => ({
    ...exp,
    type: 'work',
    title: exp.role,
    subtitle: exp.company,
  }));

  const eduEvents = education.map(edu => ({
    ...edu,
    type: 'education',
    title: edu.degree,
    subtitle: edu.institution,
  }));

  const allEvents = [...workEvents, ...eduEvents];

  const filteredEvents = allEvents.filter(event => {
    if (activeTab === 'all') return true;
    return event.type === activeTab;
  });

  return (
    <section id="timeline" className="timeline-section section">
      <div className="container">
        
        <div className="section-header">
          <h2>My Journey</h2>
          <p>A timeline of my professional experience and academic background at TechCollege.</p>
        </div>

        {/* Tab Filters */}
        <div className="timeline-nav">
          <button
            onClick={() => setActiveTab('all')}
            className={`timeline-tab ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Journey
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`timeline-tab ${activeTab === 'work' ? 'active' : ''}`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`timeline-tab ${activeTab === 'education' ? 'active' : ''}`}
          >
            Education
          </button>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-container">
          {filteredEvents.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-badge">
                {item.type === 'work' ? <Briefcase /> : <GraduationCap />}
              </div>

              <div className="timeline-card card-glass">
                <div className="timeline-meta">
                  <span className="period">
                    <Calendar size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {item.period}
                  </span>
                  <span className="location">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <div className="subheading">{item.subtitle}</div>
                
                {item.gpa && (
                  <div className="gpa">
                    GPA: <span>{item.gpa}</span>
                  </div>
                )}

                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}

                {item.bullets && (
                  <ul className="bullets">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {item.courses && (
                  <div className="tags-container">
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Key Courses:</span>
                    {item.courses.map((course, idx) => (
                      <span key={idx} className="tag">
                        {course}
                      </span>
                    ))}
                  </div>
                )}

                {item.skills && (
                  <div className="tags-container" style={{ marginTop: '0.75rem' }}>
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="tag" style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
