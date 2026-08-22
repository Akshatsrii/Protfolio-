import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const MyWork = () => {
  return (
    <div id="work" className="projects-section">
      <div className="projects-container">
        <div className="section-title-wrapper">
          <h1 className="section-heading-gradient">PROJECTS</h1>
          <p className="section-subtitle">A showcase of my recent developments.</p>
        </div>
        
        <div className="projects-grid">
          {mywork_data.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrapper">
                <img src={project.w_img} alt={project.w_title} className="project-img" />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h2 className="project-name">{project.w_title}</h2>
                  <div className="project-links">
                    {project.w_live && (
                      <a href={project.w_live} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live Demo">
                        <ExternalLinkIcon />
                      </a>
                    )}
                    {project.w_github && (
                      <a href={project.w_github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub Repository">
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="project-desc">{project.w_desc}</p>
                
                <div className="project-tech">
                  {project.w_tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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

export default MyWork;
