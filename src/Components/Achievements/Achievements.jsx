import React, { useEffect, useRef } from "react";
import "./Achievements.css";

const Achievements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-bento");
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll(".bento-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="achievements" className="bento-section">
      <div className="bento-container" ref={containerRef}>
        <div className="section-title-wrapper">
          <h1 className="section-heading-gradient">BEYOND ACADEMICS</h1>
          <p className="section-subtitle">Extracurricular milestones and achievements.</p>
        </div>

        <div className="bento-grid">
          
          {/* Box 1: Education */}
          <div className="bento-card education-card col-span-2">
            <h2 className="inst-title">Rajasthan Technical University (RTU)</h2>
            <p className="inst-degree">
              B.Tech in Information Technology <span className="dot">•</span> Aug 2023 - Apr 2027
            </p>
            <div className="theme-badge">
              <strong>8.72/10 CGPA</strong> (Till 5th Semester)
            </div>
            {/* Watermark Icon */}
            <svg className="watermark-icon edu-watermark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            </svg>
          </div>

          {/* Box 2: Hackathons */}
          <div className="bento-card hackathons-card col-span-1">
            <h3 className="card-accent">Hackathons</h3>
            
            <div className="list-items">
              <div className="list-item">
                <h4>Unstoppable Hackathon (LNMIIT)</h4>
                <p>Top 10 among 100+ teams</p>
              </div>
              <div className="list-item">
                <h4>Reckon 7.0 Jodhpur</h4>
                <p>Secured Top 15 rank</p>
              </div>
              <div className="list-item">
                <h4>Active Competitor</h4>
                <p>Competed in 50+ hackathons across India</p>
              </div>
            </div>

            <svg className="watermark-icon hack-watermark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>

          {/* Box 3: Open Source & CP */}
          <div className="bento-card community-card col-span-1">
            <h3 className="card-accent">Coding & Open Source</h3>
            
            <div className="list-items" style={{ gap: '15px' }}>
              <div className="list-item">
                <h4>300+ LeetCode</h4>
                <p>DSA & Problem Solving</p>
              </div>
              <div className="list-item">
                <h4>2,000+ GitHub</h4>
                <p>Active contributions</p>
              </div>
              <div className="list-item">
                <h4>3 OS Projects</h4>
                <p>Open-source contributions</p>
              </div>
            </div>
            
            <svg className="watermark-icon hack-watermark" style={{ top: '60%' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>

          {/* Box 4: Development, Cloud & Research */}
          <div className="bento-card achievements-card col-span-2">
            <h3 className="card-accent">Development, Cloud & Research</h3>
            
            <div className="achievements-grid">
              <div className="ach-item">
                <div className="ach-icon code-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <div className="ach-text">
                  <h4>10+ Live Projects</h4>
                  <p>Delivered and deployed robust applications across full-stack and modern AI technologies.</p>
                </div>
              </div>

              <div className="ach-item">
                <div className="ach-icon badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div className="ach-text">
                  <h4>Cloud & DevOps</h4>
                  <p>Containerized complex microservices using <strong>Docker</strong> and deployed efficiently on <strong>Hetzner Cloud</strong>.</p>
                </div>
              </div>

              <div className="ach-item">
                <div className="ach-icon hat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div className="ach-text">
                  <h4>AI & Digital Textiles Research</h4>
                  <p>Researching CNNs for AI in Digital Textiles: Automating RIP and Correcting Fabric Distortion.</p>
                </div>
              </div>
            </div>

            <svg className="watermark-icon trophy-watermark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;