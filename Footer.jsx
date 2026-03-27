import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-symbol.png'; // Path check kar lena apne folder ke hisab se

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Section 1: Brand Info */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Brand Logo" />
            <span>Brand</span>
          </div>
          <p className="footer-desc">
            Best information about the company gies here but now lorem ipsum is 
            reserved for loren non-profit organizations.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Section 2: Links Groups */}
        <div className="footer-links-wrapper">
          <div className="footer-link-group">
            <h4>About</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Find store</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4>Partnership</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Find store</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4>Information</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Money Refund</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4>For users</h4>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">My Orders</a></li>
            </ul>
          </div>
        </div>

        {/* Section 3: App Stores */}
        <div className="footer-apps">
          <h4>Get app</h4>
          <div className="app-buttons">
            <button className="app-btn">
              <i className="fa-brands fa-apple"></i>
              <span>Download on the <br /> <b>App Store</b></span>
            </button>
            <button className="app-btn">
              <i className="fa-brands fa-google-play"></i>
              <span>Get it on <br /> <b>Google Play</b></span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Ecommerce Inc.</p>
          <div className="footer-lang">
            <img src="https://flagcdn.com/w20/us.png" alt="US Flag" />
            <span>English</span>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;