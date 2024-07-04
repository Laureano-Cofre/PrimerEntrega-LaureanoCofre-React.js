import React, { useState } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="./public/img/logo.png" alt="Logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#discos" onClick={toggleMenu}>Discos</a></li>
          <li><a href="#historia" onClick={toggleMenu}>Historia</a></li>
          <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
