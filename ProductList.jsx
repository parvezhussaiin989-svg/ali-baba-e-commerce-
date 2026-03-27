import React, { useState } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products = [] }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <section className="product-list-page">
      <div className="list-container">
        
        {/* Left Side: Filters Sidebar */}
        <aside className="list-sidebar">
          <div className="filter-group">
            <h4>Category</h4>
            <ul>
              <li className="active">Mobile accessory</li>
              <li>Electronics</li>
              <li>Smartphones</li>
              <li>Modern tech</li>
            </ul>
          </div>
          <hr />
          <div className="filter-group">
            <h4>Price range</h4>
            <div className="range-inputs">
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max" />
            </div>
            <button className="apply-btn">Apply</button>
          </div>
        </aside>

        {/* Right Side: Products Area */}
        <main className="list-main-content">
          
          {/* Top Bar: Sort & View Toggle */}
          <div className="list-top-bar">
            <p>{products.length} items in <b>Mobile accessory</b></p>
            <div className="top-bar-actions">
              <select className="sort-select">
                <option>Newest first</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div className="view-btns">
                <button 
                  className={viewMode === 'grid' ? 'active' : ''} 
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fa-solid fa-grid-2"></i>
                </button>
                <button 
                  className={viewMode === 'list' ? 'active' : ''} 
                  onClick={() => setViewMode('list')}
                >
                  <i className="fa-solid fa-list"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`products-container ${viewMode}`}>
            {products.map((item, index) => (
              <div 
                key={item.id} 
                className="stagger-item" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-next">Next <i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </main>

      </div>
    </section>
  );
};

export default ProductList;