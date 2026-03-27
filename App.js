import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Import
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import CategorySection from './components/CategorySection/CategorySection';
import InquirySection from './components/InquirySection/InquirySection';
import Recommended from './components/Recommended/Recommended';
import ExtraServices from './components/ExtraServices/ExtraServices';
import RegionSection from './components/RegionSection/RegionSection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

// Pages Import
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';

// Static Data (For Testing)
import { products, recommendedItems, services } from './data/mockData';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Offers />
              <CategorySection title="Home and outdoor" bannerImg="banner1.png" items={products.slice(0, 8)} />
              <CategorySection title="Consumer electronics" bannerImg="banner2.png" items={products.slice(8, 16)} />
              <InquirySection />
              <Recommended recommendedProducts={recommendedItems} />
              <ExtraServices services={services} />
              <RegionSection />
            </>
          } />

          {/* Other Pages */}
          <Route path="/products" element={<ProductList products={products} />} />
          <Route path="/product/:id" element={<ProductDetail product={products[0]} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;