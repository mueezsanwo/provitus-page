import React, { useState } from 'react';
import './navbar.css';
import icon from '../images/Icon.png';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
  <div className="header-inner">
  <div className="logo">
  <img src={icon} alt="Positivus Logo" className="logo-image" />
  <span>Positivus</span>
</div>


    <div className={`nav-container ${isMobileMenuOpen ? 'active' : ''}`}>
      <nav className="nav-links">
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Use cases</a>
        <a href="#blog">Pricing</a>
        <a href="#contact">Blog</a>
      </nav>
      <button className="header-button mobile-only">Request a quote</button>
      <button className="header-button desktop-only">Request a quote</button>
    </div>

    <div className="hamburger">
      ☰
    </div>
  </div>
</header>

  );
};

export default NavBar;
