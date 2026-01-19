import React, { useEffect, useRef } from "react";
import "./About.css";
import profile_img from "../../assets/profile.png";

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
        <div className="about-left">
          <div className="image-container">
            <div className="image-glow"></div>
            <img src={profile_img} alt="Akshat Srivastava" />
            <div className="image-border"></div>
          </div>
        </div>

        <div className="about-right">
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