import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Psychiatry Care</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
