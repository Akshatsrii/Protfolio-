import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const skillsRef = useRef([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const statRefs = useRef([]);
  const tagRefs = useRef([]);
  const [counts, setCounts] = useState({ p: 0, i: 0, h: 0, d: 0 });
  const animatedCounts = useRef(false);

  const skills = [
    { name: "React.js", level: 85 },
    { name: "Node.js & Express.js", level: 80 },
    { name: "MongoDB & MySQL", level: 75 },
    { name: "DSA & Problem Solving", level: 70 },
    { name: "REST APIs & Auth", level: 72 },
    { name: "Docker", level: 68 },
    { name: "Hetzner (Cloud/VPS)", level: 60 },
  ];

  const stats = [
    { icon: "ti-code", num: 10, suffix: "+", label: "Projects Built", key: "p" },
    { icon: "ti-briefcase", num: 3, suffix: "+", label: "Internships", key: "i" },
    { icon: "ti-trophy", num: 5, suffix: "+", label: "Hackathons", key: "h" },
    { icon: "ti-cpu", num: 500, suffix: "+", label: "DSA Problems", key: "d" },
  ];

  const tags = [
    "React.js","Node.js","Express.js","MongoDB","MySQL",
    "JavaScript","TypeScript","Tailwind CSS","REST APIs",
    "JWT Auth","Git & GitHub","DSA","Docker","Hetzner","Open Source","UI/UX",
  ];

  const animateCounts = () => {
    if (animatedCounts.current) return;
    animatedCounts.current = true;
    const targets = { p: 10, i: 3, h: 5, d: 500 };
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        p: Math.floor(ease * targets.p),
        i: Math.floor(ease * targets.i),
        h: Math.floor(ease * targets.h),
        d: Math.floor(ease * targets.d),
      });
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    // Intersection observer for cards fade-in
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => { if (el) cardObserver.observe(el); });

    // Skill bars observer
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsRef.current.forEach((el, idx) => {
              if (el) {
                setTimeout(() => {
                  el.querySelector(".skill-bar").style.width = el.dataset.w + "%";
                  el.classList.add("skill-visible");
                }, idx * 120);
              }
            });
            skillObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current[0]) skillObserver.observe(skillsRef.current[0]);

    // Stats counter observer
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounts();
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    statRefs.current.forEach((el) => { if (el) statsObserver.observe(el); });

    // Tags stagger observer
    const tagObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tagRefs.current.forEach((el, idx) => {
              if (el) {
                setTimeout(() => el.classList.add("tag-visible"), idx * 50);
              }
            });
            tagObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (tagRefs.current[0]) tagObserver.observe(tagRefs.current[0]);

    return () => {
      cardObserver.disconnect();
      skillObserver.disconnect();
      statsObserver.disconnect();
      tagObserver.disconnect();
    };
  }, []);

  return (
    <div id="about" className="ab" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .ab {
          background: #0a0f0a;
          min-height: 100vh;
          padding: 70px 5%;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          color: #fff;
        }

        .ab-orb1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(163,230,53,0.18) 0%, transparent 70%);
          top: -180px; left: -160px;
          pointer-events: none;
          animation: orb-drift 12s ease-in-out infinite alternate;
        }
        .ab-orb2 {
          position: absolute;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(132,204,22,0.12) 0%, transparent 70%);
          bottom: -100px; right: -80px;
          pointer-events: none;
          animation: orb-drift 16s ease-in-out infinite alternate-reverse;
        }
        .ab-orb3 {
          position: absolute;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(163,230,53,0.09) 0%, transparent 70%);
          top: 45%; right: 8%;
          pointer-events: none;
          animation: orb-drift 10s ease-in-out infinite alternate;
        }

        @keyframes orb-drift {
          from { transform: translate(0, 0); }
          to { transform: translate(30px, 40px); }
        }

        .ab-inner { max-width: 1000px; margin: 0 auto; position: relative; z-index: 2; }

        /* ── Header ── */
        .ab-head {
          text-align: center;
          margin-bottom: 60px;
          animation: fade-down 0.8s ease both;
        }

        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(163,230,53,0.08);
          border: 1px solid rgba(163,230,53,0.22);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 12px;
          font-weight: 600;
          color: #a3e635;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .ab-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #a3e635;
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(163,230,53,0.6); }
          50%      { box-shadow: 0 0 0 5px rgba(163,230,53,0); }
        }

        .ab-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 14px;
        }
        .ab-title span { color: #a3e635; }

        .ab-subtitle {
          font-size: 15px;
          color: rgba(255,255,255,0.4);
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Grid ── */
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        /* ── Cards ── */
        .ab-card {
          background: rgba(163,230,53,0.04);
          border: 1px solid rgba(163,230,53,0.14);
          border-radius: 20px;
          padding: 30px 32px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .ab-card:nth-child(1) { transition-delay: 0.1s; }
        .ab-card:nth-child(2) { transition-delay: 0.25s; }
        .ab-card:nth-child(3) { transition-delay: 0.4s; }
        .ab-card:nth-child(4) { transition-delay: 0.55s; }

        .ab-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ab-card:hover {
          border-color: rgba(163,230,53,0.32);
          box-shadow: 0 0 32px rgba(163,230,53,0.06);
        }

        .ab-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #a3e635, transparent);
        }

        .ab-bio-card { grid-column: 1 / -1; padding: 36px 40px; }

        .bio-avatar-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        .bio-avatar {
          width: 68px; height: 68px;
          border-radius: 18px;
          background: linear-gradient(135deg, #1a2e0a, #2d5016);
          border: 2px solid rgba(163,230,53,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #a3e635;
          flex-shrink: 0;
          animation: avatar-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s both;
        }

        @keyframes avatar-pop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }

        .bio-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }
        .bio-role { font-size: 13px; color: #a3e635; font-weight: 500; }

        .bio-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(163,230,53,0.2), transparent);
          margin-bottom: 24px;
        }

        .bio-paras p {
          font-size: 14.5px;
          line-height: 1.9;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
          opacity: 0;
          transform: translateX(-16px);
          animation: slide-in-text 0.6s ease forwards;
        }
        .bio-paras p:nth-child(1) { animation-delay: 0.4s; }
        .bio-paras p:nth-child(2) { animation-delay: 0.6s; }
        .bio-paras p:nth-child(3) { animation-delay: 0.8s; }
        .bio-paras p:last-child { margin-bottom: 0; }

        @keyframes slide-in-text {
          to { opacity: 1; transform: translateX(0); }
        }

        .hl   { color: #a3e635; font-weight: 600; }
        .hl-w { color: rgba(255,255,255,0.85); font-weight: 500; }

        /* ── Skill bars ── */
        .card-label {
          font-size: 11px;
          font-weight: 700;
          color: rgba(163,230,53,0.5);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .skill-item {
          margin-bottom: 20px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .skill-item:last-child { margin-bottom: 0; }
        .skill-item.skill-visible { opacity: 1; transform: translateX(0); }

        .skill-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .skill-top span:first-child {
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }

        .skill-val {
          font-size: 12px;
          font-weight: 600;
          color: #a3e635;
          background: rgba(163,230,53,0.08);
          border: 1px solid rgba(163,230,53,0.18);
          padding: 2px 10px;
          border-radius: 100px;
        }

        .skill-track {
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          overflow: hidden;
        }

        .skill-bar {
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #3a6e00, #a3e635);
          border-radius: 100px;
          transition: width 1.4s cubic-bezier(0.23,1,0.32,1);
          position: relative;
          overflow: hidden;
        }

        .skill-bar::after {
          content: '';
          position: absolute;
          top: 0; left: -60%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shimmer 2.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%   { left: -60%; }
          100% { left: 120%; }
        }

        /* ── Stats ── */
        .ab-stats-card { display: flex; flex-direction: column; }

        .stat-item {
          padding: 16px 0;
          border-bottom: 1px solid rgba(163,230,53,0.07);
          display: flex;
          align-items: center;
          gap: 16px;
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .stat-item:last-child { border-bottom: none; padding-bottom: 0; }
        .stat-item:first-child { padding-top: 0; }
        .stat-item.stat-visible { opacity: 1; transform: translateX(0); }

        .stat-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: rgba(163,230,53,0.1);
          border: 1px solid rgba(163,230,53,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          color: #a3e635;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .stat-item:hover .stat-icon {
          transform: scale(1.12) rotate(-4deg);
          background: rgba(163,230,53,0.18);
        }

        .stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #a3e635;
          line-height: 1;
          margin-bottom: 3px;
        }
        .stat-lbl { font-size: 12px; color: rgba(255,255,255,0.4); }

        /* ── Tags ── */
        .ab-tags-card { grid-column: 1 / -1; }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .tag {
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 7px 16px;
          border-radius: 100px;
          cursor: default;
          opacity: 0;
          transform: scale(0.85) translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease, color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .tag.tag-visible { opacity: 1; transform: scale(1) translateY(0); }

        .tag:hover {
          color: #a3e635;
          background: rgba(163,230,53,0.08);
          border-color: rgba(163,230,53,0.25);
          transform: scale(1.05) translateY(-2px);
        }

        /* ── Status strip ── */
        .status-strip {
          margin-top: 20px;
          border: 1px solid rgba(163,230,53,0.14);
          border-radius: 16px;
          padding: 18px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(163,230,53,0.03);
          flex-wrap: wrap;
          gap: 12px;
          opacity: 0;
          transform: translateY(20px);
          animation: fade-up 0.7s ease 1s both;
        }

        @keyframes fade-up {
          to { opacity: 1; transform: translateY(0); }
        }

        .status-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.7);
        }

        .status-ping {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #a3e635;
          position: relative;
          flex-shrink: 0;
        }
        .status-ping::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid #a3e635;
          animation: ping 2s ease-out infinite;
          opacity: 0;
        }
        @keyframes ping {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2);   opacity: 0; }
        }

        .status-right { display: flex; gap: 10px; flex-wrap: wrap; }

        .status-chip {
          font-size: 12px;
          padding: 5px 14px;
          border-radius: 100px;
          font-weight: 500;
          transition: transform 0.2s ease;
        }
        .status-chip:hover { transform: translateY(-2px); }

        .chip-green {
          background: rgba(163,230,53,0.1);
          color: #a3e635;
          border: 1px solid rgba(163,230,53,0.2);
        }
        .chip-gray {
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.08);
        }

        @media (max-width: 768px) {
          .ab { padding: 60px 5%; }
          .ab-grid { grid-template-columns: 1fr; }
          .ab-bio-card { grid-column: 1; padding: 28px 24px; }
          .ab-tags-card { grid-column: 1; }
          .status-strip { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="ab-orb1" />
      <div className="ab-orb2" />
      <div className="ab-orb3" />

      <div className="ab-inner">
        <div className="ab-head">
          <div className="ab-eyebrow">
            <div className="ab-eyebrow-dot" />
            Who am I
          </div>
          <h1 className="ab-title">About <span>Me</span></h1>
          <p className="ab-subtitle">Pre-final year IT undergrad crafting full-stack experiences</p>
        </div>

        <div className="ab-grid">

          {/* Bio Card */}
          <div className="ab-card ab-bio-card" ref={(el) => (cardRefs.current[0] = el)}>
            <div className="bio-avatar-row">
              <div className="bio-avatar">AS</div>
              <div>
                <div className="bio-name">Akshat Srivastava</div>
                <div className="bio-role">Full-Stack Developer · MERN Stack</div>
              </div>
            </div>
            <div className="bio-divider" />
            <div className="bio-paras">
              <p>I'm a pre-final year <strong className="hl-w">Information Technology</strong> undergraduate at <strong className="hl-w">Rajasthan Technical University, Kota</strong> — passionate about building products that blend great design with solid engineering. I specialize in the <strong className="hl">MERN stack</strong>.</p>
              <p>Hands-on experience across <strong className="hl">React.js</strong>, <strong className="hl">Node.js</strong>, <strong className="hl">Express.js</strong> and <strong className="hl">MongoDB</strong> — from frontend UI and backend APIs to auth systems, database design, and secure integrations through internships, hackathons, and real-world projects.</p>
              <p>I actively sharpen my <strong className="hl">Data Structures &amp; Algorithms</strong> and <strong className="hl">DevOps</strong> skills — working with <strong className="hl">Docker</strong> for containerization and <strong className="hl">Hetzner</strong> for cloud deployments to ship reliable, production-ready applications.</p>
            </div>
          </div>

          {/* Skills Card */}
          <div className="ab-card ab-bio-card" ref={(el) => (cardRefs.current[1] = el)}>
            <div className="card-label">Technical Skills</div>
            {skills.map((skill, i) => (
              <div
                key={i}
                className="skill-item"
                data-w={skill.level}
                ref={(el) => (skillsRef.current[i] = el)}
              >
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span className="skill-val">{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-bar" />
                </div>
              </div>
            ))}
          </div>



          {/* Tags Card */}
          <div className="ab-card ab-tags-card" ref={(el) => (cardRefs.current[3] = el)}>
            <div className="card-label">Technologies &amp; Interests</div>
            <div className="tags-row">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="tag"
                  ref={(el) => (tagRefs.current[i] = el)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="status-strip">
          <div className="status-left">
            <div className="status-ping" />
            Available for internships &amp; collaborations
          </div>
          <div className="status-right">
            <span className="status-chip chip-green">Open to Work</span>
            <span className="status-chip chip-gray">RTU Kota · 2025</span>
            <span className="status-chip chip-gray">IT Undergrad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;