import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-symbol.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-main ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Left: Logo */}
        <div className="nav-logo animate-fade-in">
          <img src={logo} alt="Brand Logo" />
          <span className="brand-name">Brand</span>
        </div>

        {/* Center: Search Bar with Animation */}
        <div className="nav-search-wrapper">
          <div className="search-group">
            <input type="text" placeholder="Search" className="search-input" />
            <select className="search-category">
              <option>All category</option>
              <option>Electronics</option>
              <option>Clothes</option>
            </select>
            <button className="search-btn">Search</button>
          </div>
        </div>

        {/* Right: User Icons */}
        <div className="nav-icons">
          <div className="nav-icon-item bounce-on-hover">
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </div>
          <div className="nav-icon-item bounce-on-hover">
            <i className="fa-solid fa-message"></i>
            <span>Message</span>
          </div>
          <div className="nav-icon-item bounce-on-hover">
            <i className="fa-solid fa-heart"></i>
            <span>Orders</span>
          </div>
          <div className="nav-icon-item bounce-on-hover cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>My cart</span>
            <span className="cart-badge">2</span>
          </div>
        </div>

      </div>

      {/* Bottom Nav: Links Bar */}
      <div className="navbar-bottom">
        <div className="navbar-container">
          <ul className="nav-links">
            <li><i className="fa-solid fa-bars"></i> All categories</li>
            <li>Hot offers</li>
            <li>Gift ideas</li>
            <li>Projects</li>
            <li>Menu item</li>
            <li className="nav-dropdown">Help <i className="fa-solid fa-chevron-down"></i></li>
          </ul>
          <div className="nav-settings">
            <span>English, USD <i className="fa-solid fa-chevron-down"></i></span>
            <span>Ship to <img src="https://flagcdn.com/w20/de.png" alt="Germany" /> <i className="fa-solid fa-chevron-down"></i></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;