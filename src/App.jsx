import React, { useEffect, useRef } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experiences from './Components/Experiences/Experiences'
import Achievements from './Components/Achievements/Achievements'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const cursorRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const updatePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || target.closest('button')) {
        cursorRef.current?.classList.add('hover');
        cursorOuterRef.current?.classList.add('hover');
      }
    };

    const handleMouseOut = () => {
      cursorRef.current?.classList.remove('hover');
      cursorOuterRef.current?.classList.remove('hover');
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-inner" ref={cursorRef} />
      <div className="custom-cursor-outer" ref={cursorOuterRef} />
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Achievements/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
