import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left: Category Menu */}
        <aside className="hero-sidebar">
          <ul>
            <li className="active">Automobiles</li>
            <li>Clothes and wear</li>
            <li>Home interiors</li>
            <li>Computer and tech</li>
            <li>Tools, equipments</li>
            <li>Sports and outdoor</li>
            <li>Animal and pets</li>
            <li>Machinery tools</li>
            <li>More category</li>
          </ul>
        </aside>

        {/* Center: Main Banner with Animation */}
        <div className="hero-main-banner">
          <div className="banner-content">
            <h3 className="fade-in-left">Latest trending</h3>
            <h1 className="reveal-text">Electronic items</h1>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>

        {/* Right: User Actions / Info */}
        <div className="hero-right-side">
          <div className="user-card animate-pop">
            <div className="user-info">
              <div className="avatar-circle">
                <i className="fa-solid fa-user"></i>
              </div>
              <p>Hi, user <br /> let's get started</p>
            </div>
            <button className="join-btn">Join now</button>
            <button className="login-btn">Log in</button>
          </div>

          <div className="promo-card orange animate-pop delay-1">
            <p>Get US $10 off <br /> with a new supplier</p>
          </div>

          <div className="promo-card teal animate-pop delay-2">
            <p>Send quotes with <br /> supplier preferences</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;