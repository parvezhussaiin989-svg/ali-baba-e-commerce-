import React from 'react';
import './Recommended.css';
import ProductCard from '../ProductCard/ProductCard';

const Recommended = ({ recommendedProducts = [] }) => {
  return (
    <section className="recommended-section">
      <div className="recommended-container">
        <h2 className="recommended-title">Recommended items</h2>
        
        <div className="recommended-grid">
          {recommendedProducts.map((product, index) => (
            <div 
              key={product.id || index} 
              className="reveal-item" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line or Load More */}
        <div className="recommended-footer">
          <button className="load-more-btn">
            See more <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommended;