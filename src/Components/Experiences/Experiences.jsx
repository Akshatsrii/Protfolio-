import React, { useEffect, useRef } from 'react'
import './Experiences.css'
import Experiences_Data from '../../assets/experiences_data'

const Experiences = () => {
  const experiencesRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    experiencesRef.current.forEach((exp) => {
      if (exp) observer.observe(exp);
    });

    return () => observer.disconnect();
  }, []);

  // Extract company and duration from e_name
  const parseExperience = (e_name) => {
    const parts = e_name.split('|');
    return {
      company: parts[0]?.trim() || '',
      duration: parts[1]?.trim() || ''
    };
  };

  // Determine badge type based on role
  const getBadgeType = (role) => {
    if (role.toLowerCase().includes('intern')) return { text: 'Internship', color: 'internship' };
    if (role.toLowerCase().includes('member')) return { text: 'Leadership', color: 'leadership' };
    return { text: 'Professional', color: 'professional' };
  };

  return (
    <div id='experiences' className='experiences'>
      {/* Background Effects */}
      <div className="experiences-background">
        <div className="floating-orb exp-orb-1"></div>
        <div className="floating-orb exp-orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="experiences-title" ref={containerRef}>
        <h1>
          Professional <span className="highlight">Experience</span>
        </h1>
        <div className="title-underline"></div>
        <p className="subtitle">Building real-world applications and gaining hands-on expertise</p>
      </div>

      <div className="experiences-container">
        {Experiences_Data.map((experience, index) => {
          const { company, duration } = parseExperience(experience.e_name);
          const badge = getBadgeType(experience.e_no);
          
          return (
            <div 
              key={index} 
              className='experiences-format'
              ref={(el) => (experiencesRef.current[index] = el)}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="experience-left">
                <div className="experience-number">
                  <span className="number-text">{String(index + 1).padStart(2, '0')}</span>
                  <div className="number-glow"></div>
                </div>
                
                <div className="experience-connector"></div>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div className="header-top">
                    <h2>{experience.e_no}</h2>
                    <div className={`experience-badge ${badge.color}`}>
                      <span className="badge-dot"></span>
                      <span className="badge-text">{badge.text}</span>
                    </div>
                  </div>
                  
                  <div className="company-info">
                    <span className="company-name">{company}</span>
                    {duration && (
                      <>
                        <span className="separator">•</span>
                        <span className="duration">{duration}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <p className="experience-description">{experience.e_desc}</p>

                <div className="experience-footer">
                  <div className="footer-left">
                    <div className="status-indicator">
                      {duration.includes('Present') ? (
                        <>
                          <span className="status-dot active"></span>
                          <span className="status-text">Currently Active</span>
                        </>
                      ) : (
                        <>
                          <span className="status-dot completed"></span>
                          <span className="status-text">Completed</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="experience-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="experience-glow-border"></div>
            </div>
          )
        })}
      </div>

      {/* Timeline Line */}
      <div className="timeline-line"></div>
    </div>
  )
}

export default Experiences