import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ initialItems = [] }) => {
  const [cartItems, setCartItems] = useState(initialItems);

  // Quantity Change Handle
  const updateQty = (id, newQty) => {
    const updated = cartItems.map(item => 
      item.id === id ? { ...item, qty: parseInt(newQty) } : item
    );
    setCartItems(updated);
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);
  const tax = subtotal * 0.1; // 10% Tax
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-main-title">My cart ({cartItems.length})</h2>

        <div className="cart-layout">
          {/* LEFT: Items List */}
          <div className="cart-items-sec">
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div className="cart-item-card" key={item.id}>
                  <div className="cart-item-left">
                    <div className="cart-item-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>Size: Medium, Color: Blue, Material: Plastic</p>
                      <div className="cart-item-btns">
                        <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                        <button className="save-btn">Save for later</button>
                      </div>
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <div className="price-tag">${item.price}</div>
                    <select 
                      className="qty-select" 
                      value={item.qty || 1} 
                      onChange={(e) => updateQty(item.id, e.target.value)}
                    >
                      {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>Qty: {n}</option>)}
                    </select>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">Your cart is empty.</div>
            )}
            
            <div className="cart-back-btn">
              <button><i className="fa-solid fa-arrow-left"></i> Back to shop</button>
              <button className="remove-all" onClick={() => setCartItems([])}>Remove all</button>
            </div>
          </div>

          {/* RIGHT: Summary Card */}
          <aside className="cart-summary-sec">
            <div className="coupon-box">
              <p>Have a coupon?</p>
              <div className="coupon-input">
                <input type="text" placeholder="Add coupon" />
                <button>Apply</button>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-row"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></div>
              <div className="summary-row"><span>Tax (10%):</span> <span className="tax-val">+${tax.toFixed(2)}</span></div>
              <hr />
              <div className="summary-row total-row">
                <span>Total:</span> 
                <span className="total-price">${total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Checkout</button>
              <div className="payment-icons">
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
                <i className="fa-brands fa-paypal"></i>
                <i className="fa-brands fa-apple-pay"></i>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;