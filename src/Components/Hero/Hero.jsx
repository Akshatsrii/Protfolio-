import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";

const Hero = () => {
  return (
    <div id="home" className="hero-container">
      <div className="hero-content">
        <div className="hero-image-section">
          <div className="image-wrapper animate-image">
            <img src={profile_img} alt="Akshat Srivastava" className="profile-image" />
          </div>
        </div>

        <div className="hero-text-section">
          <h3 className="hero-greeting animate-text stagger-1">
            Hey, there <span className="waving-hand">👋</span>
          </h3>
          
          <h1 className="hero-title animate-text stagger-2">
            I'm <span className="hero-name">Akshat Srivastava</span><br/>
            a Full Stack AI<br/>Developer
          </h1>
          
          <p className="hero-subtitle animate-text stagger-3">
            focused on architecting scalable systems<br/>
            and building robust full-stack applications.
          </p>
          
          <div className="hero-buttons animate-text stagger-4">
            <a href="/Akshat Srivastava.pdf" download className="download-cv-btn">
              Download CV
            </a>
            <a href="#contact" className="contact-btn">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;