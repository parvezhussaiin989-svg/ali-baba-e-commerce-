import React from 'react';
import './InquirySection.css';

const InquirySection = () => {
  return (
    <section className="inquiry-section">
      <div className="inquiry-overlay">
        <div className="inquiry-content">
          <h2 className="animate-text">An easy way to send requests to all suppliers</h2>
          <p className="animate-subtext">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt.
          </p>
          <button className="mobile-only-btn">Send inquiry</button>
        </div>

        <div className="inquiry-form-card animate-card">
          <h3>Send quote to suppliers</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="What item you need?" />
            </div>
            <div className="form-group">
              <textarea placeholder="Type more details" rows="3"></textarea>
            </div>
            <div className="form-row">
              <input type="number" placeholder="Quantity" />
              <select>
                <option>Pcs</option>
                <option>Kg</option>
                <option>Liters</option>
              </select>
            </div>
            <button type="submit" className="submit-inquiry-btn">Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;