import React from 'react';
import './RegionSection.css';

const RegionSection = () => {
  const regions = [
    { name: "Arabic Emirates", domain: "shopname.ae", flag: "https://flagcdn.com/w40/ae.png" },
    { name: "Australia", domain: "shopname.au", flag: "https://flagcdn.com/w40/au.png" },
    { name: "United States", domain: "shopname.us", flag: "https://flagcdn.com/w40/us.png" },
    { name: "Russia", domain: "shopname.ru", flag: "https://flagcdn.com/w40/ru.png" },
    { name: "Italy", domain: "shopname.it", flag: "https://flagcdn.com/w40/it.png" },
    { name: "Denmark", domain: "shopname.dk", flag: "https://flagcdn.com/w40/dk.png" },
    { name: "France", domain: "shopname.fr", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "China", domain: "shopname.cn", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "Great Britain", domain: "shopname.gb", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Pakistan", domain: "shopname.pk", flag: "https://flagcdn.com/w40/pk.png" },
  ];

  return (
    <section className="region-section">
      <div className="region-container">
        <h2 className="region-title">Suppliers by region</h2>
        
        <div className="region-grid">
          {regions.map((region, index) => (
            <div 
              className="region-card animate-reveal" 
              key={index}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="region-flag">
                <img src={region.flag} alt={region.name} />
              </div>
              <div className="region-info">
                <p className="country-name">{region.name}</p>
                <span className="country-domain">{region.domain}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionSection;