import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { category: "Languages", items: "JavaScript (ES6+), TypeScript, Java, C++, Python, SQL" },
    { category: "Frontend", items: "React.js, Next.js, Three.js, HTML5, CSS3, Tailwind CSS" },
    { category: "Backend", items: "Node.js, Express.js, REST APIs, JWT Authentication, Socket.IO" },
    { category: "Databases", items: "MongoDB, PostgreSQL, Firebase Firestore" },
    { category: "Cloud & DevOps", items: "Docker, Docker Compose, Linux, Hetzner Cloud, Nginx, GitHub Actions, CI/CD" },
    { category: "AI & Integrations", items: "NumPy, Pandas, Gemini AI, Cloudinary, Stripe" },
    { category: "Core CS", items: "Data Structures & Algorithms, OOP, DBMS, OS, Networks, System Design" }
  ];

  return (
    <div id="about" className="about-container" ref={sectionRef}>
      <div className="section-title-wrapper center">
        <h1 className="section-heading-gradient">ABOUT & SKILLS</h1>
        <p className="section-subtitle" style={{marginBottom: '50px'}}>Who I am and what I do.</p>
      </div>
      
      <div className="about-content">
        <div className="about-left-col">
          <div className="about-card">
            <h3 className="card-title">Who I Am</h3>
            <p className="card-text">
              I am an <span className="highlight">Information Technology</span> undergrad at RTU Kota (2023-2027), deeply passionate about architecting robust digital solutions. I thrive on translating complex challenges into elegant, scalable software.
            </p>
          </div>
          
          <div className="about-card">
            <h3 className="card-title">What I Do</h3>
            <p className="card-text">
              I specialize in developing high-impact applications that drive business growth. From building an AI-powered platform to engineering scalable microservices handling thousands of records, I am driven to create solutions that matter. Beyond web development, I am heavily invested in <span className="highlight">competitive programming</span> and open-source contributions.
            </p>
          </div>
          
          <div className="about-profiles">
            <a href="https://leetcode.com/u/Akshatsrivastava007/" target="_blank" rel="noopener noreferrer" className="profile-btn">
              <span className="profile-icon">{"</>"}</span>
              <div className="profile-info">
                <span className="profile-name">LeetCode</span>
                <span className="profile-stat">300+ DSA Solved</span>
              </div>
            </a>
            
            <a href="https://github.com/Akshatsrii" target="_blank" rel="noopener noreferrer" className="profile-btn">
              <span className="profile-icon">{"{ }"}</span>
              <div className="profile-info">
                <span className="profile-name">GitHub</span>
                <span className="profile-stat">2000+ Commits</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="about-right-col skills-col">
          <div className="skills-card">
            <h3 className="card-title">Technical Arsenal</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-row">
                  <div className="skill-category">{skill.category}</div>
                  <div className="skill-items">{skill.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;