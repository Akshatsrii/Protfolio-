import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-minimal">
      <div className="footer-line"></div>
      
      <div className="footer-content">
        {/* Left Side */}
        <div className="footer-left">
          <h2 className="footer-name">Akshat Srivastava</h2>
          <p className="footer-role">Full Stack AI Developer &nbsp;·&nbsp; Kota, Rajasthan</p>
          <p className="footer-copy">
            © {new Date().getFullYear()} Akshat Srivastava. Crafted with <span className="heart">❤️</span> and a lot of ☕
          </p>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="footer-links-group">
            <a 
              href="https://leetcode.com/u/Akshatsrivastava007/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              LeetCode Profile
            </a>

            <div className="social-circles">
              <a href="mailto:akshatsrivastava1204@gmail.com" className="social-circle" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="https://github.com/Akshatsrii" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/akshat-srivastava-6105102a7/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <button className="back-to-top" onClick={handleScrollToTop}>
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;