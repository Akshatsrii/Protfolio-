import React, { useEffect } from 'react';
import './Experiences.css';
import Experiences_Data from '../../assets/experiences_data';

const ReactLogo = () => (
  <svg width="32" height="32" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2" fill="#0078D7"></circle>
    <g stroke="#0078D7" strokeWidth="1.2" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const Experiences = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll('.anim-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="experiences" className="experiences-section">
      <div className="experiences-container">
        <div className="section-title-wrapper anim-element fade-in-up">
          <h1 className="section-heading-gradient">EXPERIENCE</h1>
          <p className="section-subtitle">A timeline of my professional journey.</p>
        </div>
        
        <div className="editorial-timeline">
          {Experiences_Data.map((exp, index) => (
            <div key={index} className="timeline-block anim-element fade-in-up">
              
              <div className="timeline-left">
                <div className="sticky-content">
                  <div className="timeline-date">{exp.date}</div>
                  <div className="timeline-logo">
                    {exp.logo === 'REACT_SVG' ? (
                      <ReactLogo />
                    ) : (
                      <img src={exp.logo} alt={exp.company} />
                    )}
                  </div>
                </div>
              </div>
              
              <div className="timeline-divider">
                <div className="timeline-node"></div>
              </div>
              
              <div className="timeline-right">
                <h2 className="timeline-role">{exp.role}</h2>
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="timeline-company linkable">
                    {exp.company}
                    <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                ) : (
                  <h3 className="timeline-company">{exp.company}</h3>
                )}
                
                <div className="timeline-points">
                  {exp.points.map((point, i) => (
                    <p key={i} className="point-text">
                      <span className="point-accent"></span>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;