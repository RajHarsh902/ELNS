import React, { useState } from 'react';
import logo from '../../../assets/images/logo.jpg';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <a href='/'> <img src={logo} alt="Logo" /> </a>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/news'>News</a></li>
          <li><a href='/career'>Career</a></li>
          <li><a href='/aktuprep'>Exam</a></li>
        </ul>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default NavBar;