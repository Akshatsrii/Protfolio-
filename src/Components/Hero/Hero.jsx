import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";

const Hero = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer (MERN)";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-image-container">
          <div className="image-glow-ring"></div>
          <div className="image-border-gradient"></div>
          <img src={profile_img} alt="Akshat Srivastava" className="hero-img" />
          <div className="status-badge">
            <span className="status-dot"></span>
            Available for work
          </div>
        </div>

        <div className="hero-text">
          <div className="greeting-badge">
            <span className="wave">👋</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero-title">
            <span className="name-line">
              <span className="name-highlight">Akshat Srivastava</span>
            </span>
            <br />
            <span className="role">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">
            Full-Stack Web Developer with hands-on experience in building responsive,
            scalable, and user-focused applications using the <strong>MERN stack</strong>. 
            Strong in <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>REST APIs</strong>, 
            with a solid foundation in Data Structures and Algorithms.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">DSA Problems</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">MERN</span>
              <span className="stat-label">Stack Expert</span>
            </div>
          </div>

          <div className="hero-action">
            <div className="hero-connect" onClick={() => setShowIcons(!showIcons)}>
              <span className="button-text">Connect With Me</span>
              <span className="button-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="button-glow"></div>
            </div>

            <a href="/Akshat O Resume.pdf" download className="hero-resume">
              <span className="button-text">Download Resume</span>
              <span className="button-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3V13M10 13L6 9M10 13L14 9M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="button-glow"></div>
            </a>
          </div>

          <div className={`contact-icons ${showIcons ? 'show' : ''}`}>
            <a href="https://www.linkedin.com/in/akshat-srivastava-6105102a7/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <img src="/linkedin.webp" alt="LinkedIn" />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a href="https://github.com/Akshatsrii" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <img src="/Github.webp" alt="GitHub" />
              <span className="social-tooltip">GitHub</span>
            </a>
            <a href="https://leetcode.com/u/Akshatsrivastava007/" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
              <img src="/Leetcode.jpg" alt="LeetCode" />
              <span className="social-tooltip">LeetCode</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;