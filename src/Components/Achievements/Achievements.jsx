import React, { useEffect, useRef } from "react";
import "./Achievements.css";
import Achievements_Data from "../../assets/achievements_data";

const Achievements = () => {
  const achievementsRef = useRef([]);
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

    achievementsRef.current.forEach((achievement) => {
      if (achievement) observer.observe(achievement);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="achievements" className="achievements">
      {/* Background Effects */}
      <div className="achievements-background">
        <div className="floating-orb ach-orb-1"></div>
        <div className="floating-orb ach-orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="achievements-title" ref={containerRef}>
        <h1>
          My <span className="highlight">Achievements</span>
        </h1>
        <div className="title-underline"></div>
        <p className="subtitle">Recognition and milestones in my journey</p>
      </div>

      <div className="achievements-container">
        {Achievements_Data.map((item, index) => {
          return (
            <div
              key={index}
              className="achievement-card"
              ref={(el) => (achievementsRef.current[index] = el)}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="achievement-number">
                <span className="number-text">{String(index + 1).padStart(2, '0')}</span>
                <div className="number-glow"></div>
              </div>

              <div className="achievement-content">
                <h3 className="achievement-type">{item.s_no}</h3>
                <h2 className="achievement-title">{item.s_name}</h2>
                <p className="achievement-description">{item.s_desc}</p>
              </div>

              <div className="achievement-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="card-glow-border"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;