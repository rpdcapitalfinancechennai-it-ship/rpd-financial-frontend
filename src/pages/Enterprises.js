import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from "../components/Breadcrumb";
import './Enterprises.css';

export default function Enterprises() {
  const products = [
    { name: 'Rice', image: '/images/products/rice.jpg', color: '#FBBF24' },
    { name: 'Dal', image: '/images/products/dal.jpg', color: '#EF4444' },
    { name: 'Oil', image: '/images/products/oil.jpg', color: '#10B981' },
    { name: 'Cashews', image: '/images/products/cashews.jpg', color: '#F59E0B' },
    { name: 'Nuts', image: '/images/products/nuts.jpg', color: '#8B4513' }
  ];

  return (
    <div className="enterprises-page">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="enterprises-hero">
        <div className="enterprises-container">
          <div className="hero-content">
            <h1 className="hero-title-enterprise">ENTERPRISES</h1>
            <p className="enterprises-hero-subtitle">
              Trusted wholesale suppliers of essential groceries, focusing on Rice, Dal, 
              Oil, Cashews, and other nuts. We supply retailers, institutions, hotels, 
              and bulk buyers with consistent quality.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="enterprises-container">
          <h2 className="section-title">Our Core Products</h2>
          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={index}
                className="product-card"
                style={{ '--product-color': product.color }}
              >
                <div 
                  className="product-image"
                  style={{ 
                    backgroundImage: `url(${product.image})`,
                    '--product-color': product.color 
                  }}
                >
                  <div className="image-overlay"></div>
                </div>
                <h3>{product.name}</h3>
                <p>Premium quality, consistent supply</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW Redesigned Quality Section */}
      <section className="quality-section">
        <div className="enterprises-container">
          <div className="quality-header">
            <h2 className="section-title">Quality & Reliability</h2>
            <p className="quality-subtitle">
              Our commitment to excellence ensures every delivery meets the highest standards
            </p>
          </div>

          {/* Quality Stats Cards */}
          <div className="quality-stats">
            <div className="stat-card">
              <div className="enterprises-stat-number">100%</div>
              <div className="stat-label">Quality Checked</div>
            </div>
            <div className="stat-card">
              <div className="enterprises-stat-number">24H</div>
              <div className="stat-label">Delivery</div>
            </div>
            <div className="stat-card">
              <div className="enterprises-stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="quality-features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Strict Quality Control</h3>
              <p>Every batch undergoes rigorous testing</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧼</div>
              <h3>Hygienic Handling</h3>
              <p>State-of-the-art processing facilities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Timely Delivery</h3>
              <p>Strong supply chain, on-time every time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Best value for bulk wholesale orders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
