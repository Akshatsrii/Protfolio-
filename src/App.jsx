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

  useEffect(() => {
    const updatePosition = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} />
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
