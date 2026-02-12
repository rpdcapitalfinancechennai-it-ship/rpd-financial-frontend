import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { API } from "../api";

const Home = () => {
  const services = [
    {
      title: 'Loans',
      path: '/business-loans',
      icon: '🏦',
      description: 'Empower your financial journey with diverse loan offerings.',
      color: '#FCD34D'
    },
    {
      title: 'Enterprises',
      path: '/enterprises',
      icon: '🏢',
      description: 'Trusted wholesale suppliers of essential groceries.',
      color: '#D97706'
    },
    {
      title: 'Insurance',
      path: '/insurance-plan',
      icon: '🛡️',
      description: 'Vehicle & Health insurance with quick claims.',
      color: '#B45309'
    },
    {
      title: 'Travel Zone',
      path: '/travel-zone',
      icon: '✈️',
      description: 'Premium group tours - Domestic & International.',
      color: '#F59E0B'
    }
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    service: e.target.service.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch(`${API}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      alert('Failed to send message');
    }
  } catch (error) {
    alert('Server error. Please try again later.');
  }
};


  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Trusted by 100+ Customers</div>
          <h1 className="hero-title">
            Your Complete <span className="gradient-text">Financial</span> Partner
          </h1>
          <p className="hero-subtitle">
            Loans • Enterprises • Insurance • Travel Solutions
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹5L+</div>
              <div className="stat-label">Loans Processed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Claims Settled</div>
            </div>
          </div>
          {/* <div className="hero-buttons">
            <Link to="/service" className="btn btn-primary">Explore Services</Link>
            <Link to="/register" className="btn btn-secondary">Get Started Free</Link>
          </div> */}
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.jpg" 
               alt="RPD Capital Finance" 
               className="hero-img" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="service-card" style={{'--card-color': service.color}}>
                <div className="service-icon-wrapper">
                  <div className="service-icon" style={{backgroundColor: `${service.color}20`}}>
                    <span>{service.icon}</span>
                  </div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with RPD Capital Finance Details */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-card featured">
                <div className="contact-icon">📍</div>
                <h3>RPD Capital Finance</h3>
                <div className="address">
                  <p>Plot No.328LA, S Kolathur Main Road,</p>
                  <p>Viduthalai Nagar, Kovilambakkam,</p>
                  <p><strong>Chennai – 600129</strong></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <p><a href="tel:+919663316054">+91 96633 16054</a></p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p><a href="mailto:rpdcapitalfinancechennai@gmail.com">rpdcapitalfinancechennai@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-form-container">
             <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="form-group">
                    <select name="service" required>
                      <option value="">Select Service Required</option>
                      <option value="Loans">Loans</option>
                      <option value="Enterprises">Enterprises</option>
                      <option value="Travel Zone">Travel Zone</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary full-width">
                    Send Message
                  </button>
              </form>

            </div>
          </div>
          
          {/* RPD Capital Finance Exact Location Map */}
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.3989371791895!2d80.200328!3d12.946305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9a2d96cf69%3A0x7f148c8f38a45e2!2sRPD%20Capital%20Finance!5e0!3m2!1sen!2sin!4v1769608108151!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RPD Capital Finance - Kovilambakkam, Chennai"
              className="location-map"
            />
          </div>
        </div>
      </section>

      {/* Footer - Updated with RPD Capital Finance */}
      <footer className="footer">
        <div className="footer-container">
          {/* <div className="footer-content">
            <div className="footer-brand">
              <h3>RPD Capital Finance</h3>
              <p>Complete financial solutions for modern India</p>
              <div className="footer-contact">
                <p><strong>📍 Plot No.328LA, S Kolathur Main Road, Viduthalai Nagar, Kovilambakkam, Chennai – 600129</strong></p>
                <p>📞 <a href="tel:+919663316054">+91 96633 16054</a></p>
                <p>✉️ <a href="mailto:rpdcapitalfinancechennai@gmail.com">rpdcapitalfinancechennai@gmail.com</a></p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><Link to="/loan">Loans</Link></li>
                  <li><Link to="/fixed-deposit">Fixed Deposit</Link></li>
                  <li><Link to="/chit">Chit Funds</Link></li>
                  <li><Link to="/insurance-plan">Insurance</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Enterprises</h4>
                <ul>
                  <li><Link to="/enterprises">RPD Enterprises</Link></li>
                  <li><Link to="/travel-zone">Travel Zone</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/service">Services</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="footer-bottom">
            <p>&copy; 2026 RPD Capital Finance. All rights reserved. Plot No.328LA, S Kolathur Main Road, Viduthalai Nagar, Kovilambakkam, Chennai – 600129.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
