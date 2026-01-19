import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  const handleMenuClick = (section) => {
    setMenu(section)
    closeMenu()
  }

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-glow"></div>
      
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />

      <div className="logo-text">
        <span className="logo-name">Akshat</span>
        <span className="logo-highlight">Srivastava</span>
        <div className="logo-underline"></div>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />

        <li className={menu === "home" ? "active" : ""}>
          <a href="#home" className="anchor-link" onClick={() => handleMenuClick("home")}>
            <span className="link-text">Home</span>
            <span className="link-hover-effect"></span>
          </a>
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <a href="#about" className="anchor-link" onClick={() => handleMenuClick("about")}>
            <span className="link-text">About Me</span>
            <span className="link-hover-effect"></span>
          </a>
        </li>

        <li className={menu === "experiences" ? "active" : ""}>
          <a href="#experiences" className="anchor-link" onClick={() => handleMenuClick("experiences")}>
            <span className="link-text">Experiences</span>
            <span className="link-hover-effect"></span>
          </a>
        </li>

        <li className={menu === "achievements" ? "active" : ""}>
          <a href="#achievements" className="anchor-link" onClick={() => handleMenuClick("achievements")}>
            <span className="link-text">Achievements</span>
            <span className="link-hover-effect"></span>
          </a>
        </li>

        <li className={menu === "work" ? "active" : ""}>
          <a href="#work" className="anchor-link" onClick={() => handleMenuClick("work")}>
            <span className="link-text">Portfolio</span>
            <span className="link-hover-effect"></span>
          </a>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <a href="#contact" className="anchor-link" onClick={() => handleMenuClick("contact")}>
            <span className="link-text">Contact</span>
            <span className="link-hover-effect"></span>
          </a>
        </li>
      </ul>

      <div className="nav-connect">
        <a href="#contact" className="anchor-link" onClick={() => handleMenuClick("contact")}>
          <span className="connect-text">Connect With Me</span>
          <span className="connect-arrow">→</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar