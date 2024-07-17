import React, { useState } from 'react';
import headerLogo from '../../images/header-logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='main-head-wrapper'>
      <div className="header">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="logo">
          <img src={headerLogo} alt="logo" />
        </div>
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </nav>
        <div className="hire">
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
