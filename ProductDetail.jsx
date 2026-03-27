import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, galleryImages = [] }) => {
  const [mainImg, setMainImg] = useState(product?.img || galleryImages[0]);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <section className="detail-section animate-fade-in">
      <div className="detail-container">
        
        {/* Left Side: Images Gallery */}
        <div className="detail-gallery">
          <div className="main-img-card">
            <img src={mainImg} alt="Main Product" className="main-display-img" />
          </div>
          <div className="thumbnail-row">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className={`thumb-card ${mainImg === img ? 'active-thumb' : ''}`}
                onClick={() => setMainImg(img)}
              >
                <img src={img} alt={`thumb-${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="detail-info-card">
          <div className="stock-status">
            <i className="fa-solid fa-check"></i> In stock
          </div>
          <h2 className="detail-title">{product?.name}</h2>
          
          <div className="detail-meta">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <span>9.3</span>
            </div>
            <span className="dot">•</span>
            <span className="meta-item"><i className="fa-solid fa-comment"></i> 32 reviews</span>
            <span className="dot">•</span>
            <span className="meta-item"><i className="fa-solid fa-basket-shopping"></i> 154 sold</span>
          </div>

          <div className="price-box">
            <div className="current-price">${product?.price}</div>
            <div className="old-price">$120.00</div>
          </div>

          <div className="detail-specs">
            <div className="spec-row"><span>Type:</span> <span>Classic Shoes</span></div>
            <div className="spec-row"><span>Material:</span> <span>Plastic material</span></div>
            <div className="spec-row"><span>Design:</span> <span>Modern design</span></div>
          </div>

          <hr className="detail-hr" />

          <div className="detail-actions">
            <button className="buy-now-btn scale-hover">Buy now</button>
            <button className="add-fav-btn"><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>

      {/* Bottom Tabs Section */}
      <div className="detail-tabs-container">
        <div className="tabs-header">
          <button 
            className={activeTab === 'description' ? 'tab-active' : ''} 
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={activeTab === 'reviews' ? 'tab-active' : ''} 
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button 
            className={activeTab === 'shipping' ? 'tab-active' : ''} 
            onClick={() => setActiveTab('shipping')}
          >
            Shipping
          </button>
        </div>
        <div className="tabs-content">
          {activeTab === 'description' && (
            <p className="animate-slide-up">{product?.desc || "No description available."}</p>
          )}
          {activeTab === 'reviews' && <p className="animate-slide-up">No reviews yet. Be the first to review!</p>}
          {activeTab === 'shipping' && <p className="animate-slide-up">Fast shipping via DHL and FedEx within 3-5 business days.</p>}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;