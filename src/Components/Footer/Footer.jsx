import React from "react";
import "./Footer.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col footer-about">
            <h2 className="footer-logo">Akshat Srivastava</h2>
            <p className="footer-tagline">Full-Stack Developer (MERN)</p>
            <p className="footer-description">
              Passionate about building scalable web applications and solving complex problems. Currently pursuing B.Tech in Information Technology at Rajasthan Technical University, Kota.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/akshat-srivastava-6105102a7/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">
                <img src="/linkedin.webp" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Akshatsrii" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">
                <img src="/Github.webp" alt="GitHub" />
              </a>
              <a href="https://leetcode.com/u/Akshatsrivastava007/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LeetCode">
                <img src="/Leetcode.jpg" alt="LeetCode" />
              </a>
            </div>
          </div>
          <div className="footer-col footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Experiences</a></li>
              <li><a href="#projects">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h3>Get In Touch</h3>
            <div className="footer-contact-item">
              <img src={mail_icon} alt="email" />
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:chickusrivastava535@gmail.com">akshatsrivastava1204@gmail.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <img src={call_icon} alt="phone" />
              <div>
                <span className="contact-label">Phone</span>
                <a href="tel:+919024085505">+91 9024085505</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg className="location-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
              </svg>
              <div>
                <span className="contact-label">Location</span>
                <span>Rawatbhata, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Akshat Srivastava. Rajasthan Technical University.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">RTU KOTA</a>
            <span className="separator">•</span>
            <a href="#terms">Informatiom Technology Branch </a>
          </div>
          <button className="scroll-to-top" onClick={handleScrollToTop} aria-label="Scroll to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12H8V20H16V12H20L12 4Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;