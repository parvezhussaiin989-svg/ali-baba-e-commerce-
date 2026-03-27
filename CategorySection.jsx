import React from 'react';
import './CategorySection.css';

const CategorySection = ({ title, bannerImg, items = [] }) => {
  return (
    <div className="cat-section-container">
      <div className="cat-card-wrapper">
        
        {/* Left Side: Banner */}
        <div 
          className="cat-banner" 
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="cat-banner-content">
            <h3>{title}</h3>
            <button className="cat-source-btn">Source now</button>
          </div>
        </div>

        {/* Right Side: 8 Items Grid */}
        <div className="cat-items-grid">
          {items.map((item, index) => (
            <div className="cat-item-card" key={index}>
              <div className="cat-item-info">
                <p className="cat-item-name">{item.name}</p>
                <span className="cat-item-price">From <br /> USD {item.price}</span>
              </div>
              <div className="cat-item-img">
                <img src={item.img} alt={item.name} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CategorySection;