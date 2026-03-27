import React from 'react';
import './ExtraServices.css';

const ExtraServices = ({ services = [] }) => {
  return (
    <section className="extra-services-section">
      <div className="extra-services-container">
        <h2 className="extra-services-title">Our extra services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              {/* Main Image */}
              <div className="service-img-wrapper">
                <img src={service.img} alt={service.title} className="service-main-img" />
                
                {/* Floating Icon */}
                <div className="service-icon-circle">
                  <i className={service.iconClass}></i>
                </div>
              </div>

              {/* Title / Description */}
              <div className="service-info">
                <p>{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;