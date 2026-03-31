import React, { useEffect, useRef } from "react";

const About = () => {
  const skillsRef = useRef([]);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionsRef.current) {
      observer.observe(sectionsRef.current);
    }

    skillsRef.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React.js", level: 85 },
    { name: "Node.js & Express.js", level: 80 },
    { name: "MongoDB & MySQL", level: 75 },
    { name: "DSA & Problem Solving", level: 70 },
  ];

  return (
    <div id="about" className="about">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 80px 5%;
          position: relative;
          overflow: hidden;
        }

        .about-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #ff6b00, #ff8c00);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #ff8c00, #ffa500);
          bottom: -50px;
          right: -50px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #ff6b00, #ff4500);
          top: 50%;
          right: 10%;
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        .about-title {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
          opacity: 0;
          animation: fadeInDown 1s ease forwards;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-title h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .highlight {
          background: linear-gradient(135deg, #ff6b00, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-underline {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #ff6b00, transparent);
          margin: 0 auto;
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(255, 107, 0, 0.5);
        }

        .about-sections {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .about-sections.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .about-content {
          background: linear-gradient(135deg, rgba(255, 107, 0, 0.05), rgba(0, 0, 0, 0.3));
          border: 2px solid rgba(255, 107, 0, 0.2);
          border-radius: 30px;
          padding: 50px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .about-para {
          margin-bottom: 50px;
        }

        .about-para p {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #cccccc;
          margin-bottom: 25px;
          text-align: justify;
        }

        .text-highlight {
          color: #ff6b00;
          font-weight: 700;
          position: relative;
          transition: all 0.3s ease;
        }

        .text-highlight:hover {
          color: #ff8c00;
          text-shadow: 0 0 10px rgba(255, 107, 0, 0.5);
        }

        .about-skills {
          display: grid;
          gap: 30px;
        }

        .about-skill {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.6s ease;
        }

        .about-skill.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .skill-header p {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 1px;
        }

        .skill-percentage {
          font-size: 1rem;
          font-weight: 700;
          color: #ff6b00;
          background: rgba(255, 107, 0, 0.1);
          padding: 5px 15px;
          border-radius: 20px;
          border: 1px solid rgba(255, 107, 0, 0.3);
        }

        .skill-bar-container {
          width: 100%;
          height: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
        }

        .skill-bar {
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #ff6b00, #ff8c00, #ffa500);
          border-radius: 10px;
          position: relative;
          transition: width 1.5s ease;
          animation: fillBar 1.5s ease forwards;
          animation-play-state: paused;
        }

        .about-skill.animate .skill-bar {
          width: var(--skill-width);
          animation-play-state: running;
        }

        @keyframes fillBar {
          from { width: 0; }
          to { width: var(--skill-width); }
        }

        .skill-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .about {
            padding: 60px 5%;
          }

          .about-title h1 {
            font-size: 2.5rem;
          }

          .about-content {
            padding: 30px;
          }

          .about-para p {
            font-size: 1rem;
            text-align: left;
          }
        }
      `}</style>

      <div className="about-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className="about-title">
        <h1>
          About <span className="highlight">Me</span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-sections" ref={sectionsRef}>
        <div className="about-content">
          <div className="about-para">
            <p className="para-1">
              I am <strong className="text-highlight">Akshat Srivastava</strong>, a pre-final year{" "}
              <strong className="text-highlight">Information Technology</strong> undergraduate at{" "}
              <strong className="text-highlight">Rajasthan Technical University, Kota</strong>, and a
              passionate <strong className="text-highlight">Full-Stack Web Developer</strong> specializing
              in the MERN stack.
            </p>

            <p className="para-2">
              I have hands-on experience building responsive, scalable, and
              user-centric web applications using{" "}
              <strong className="text-highlight">
                React.js, Node.js, Express.js, and MongoDB
              </strong>
              . Through internships, hackathons, and real-world projects, I've
              worked on frontend UI development, backend APIs, authentication,
              database design, and secure integrations.
            </p>

            <p className="para-3">
              Alongside development, I actively strengthen my{" "}
              <strong className="text-highlight">Data Structures & Algorithms</strong> skills to improve
              problem-solving and write efficient, optimized code. I enjoy
              learning new technologies, collaborating in team environments,
              and building solutions that solve real-world problems.
            </p>
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="about-skill"
                ref={(el) => (skillsRef.current[index] = el)}
              >
                <div className="skill-header">
                  <p>{skill.name}</p>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <div
                    className="skill-bar"
                    style={{ "--skill-width": `${skill.level}%` }}
                  >
                    <div className="skill-glow"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;