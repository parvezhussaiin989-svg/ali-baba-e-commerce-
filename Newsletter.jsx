import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container animate-fade-in">
        <h2 className="newsletter-title">Subscribe on our newsletter</h2>
        <p className="newsletter-subtitle">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-with-icon">
            <i className="fa-regular fa-envelope"></i>
            <input 
              type="email" 
              placeholder="Email address" 
              required 
            />
          </div>
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;