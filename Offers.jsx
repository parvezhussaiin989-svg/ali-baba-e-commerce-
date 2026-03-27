import React, { useState, useEffect } from 'react';
import './Offers.css';

// Local assets ya placeholder images use karein
import watch from '../../assets/items/Item(3).png';
import laptop from '../../assets/items/Item(13).png';
import camera from '../../assets/items/Item(10).png';
import headphones from '../../assets/items/Item(11).png';
import phone from '../../assets/items/Item(12).png';

const Offers = () => {
  // Simple Countdown Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 4, hours: 13, mins: 34, secs: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const offerItems = [
    { name: "Smart watches", discount: "-25%", img: watch },
    { name: "Laptops", discount: "-15%", img: laptop },
    { name: "GoPro cameras", discount: "-40%", img: camera },
    { name: "Headphones", discount: "-20%", img: headphones },
    { name: "Phones", discount: "-25%", img: phone },
  ];

  return (
    <section className="offers-section animate-fade-in">
      <div className="offers-container">
        
        {/* Left: Countdown Box */}
        <div className="offers-timer-box">
          <div className="timer-content">
            <h3>Deals and offers</h3>
            <p>Hygiene equipments</p>
            <div className="timer-grid">
              <div className="time-unit"><b>{timeLeft.days}</b> <span>Days</span></div>
              <div className="time-unit"><b>{timeLeft.hours}</b> <span>Hour</span></div>
              <div className="time-unit"><b>{timeLeft.mins}</b> <span>Min</span></div>
              <div className="time-unit"><b>{timeLeft.secs}</b> <span>Sec</span></div>
            </div>
          </div>
        </div>

        {/* Right: Items Grid */}
        <div className="offers-items-grid">
          {offerItems.map((item, index) => (
            <div className="offer-item-card" key={index}>
              <div className="offer-img-wrapper">
                <img src={item.img} alt={item.name} />
              </div>
              <p className="offer-item-name">{item.name}</p>
              <span className="offer-badge">{item.discount}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offers;