import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card animate-card-in">
      <div className="product-card-img">
        <img src={product.img} alt={product.name} />
        <div className="product-card-overlay">
          <button className="overlay-btn view-btn">
            <i className="fa-solid fa-eye"></i>
          </button>
          <button className="overlay-btn favorite-btn">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>

      <div className="product-card-body">
        <h4 className="product-price">${product.price}</h4>
        
        {/* Rating Stars */}
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <p className="product-name">{product.name}</p>
        
        <button className="add-to-cart-btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;