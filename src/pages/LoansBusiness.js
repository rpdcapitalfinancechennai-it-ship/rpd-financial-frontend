import React from 'react';
import './LoansBusiness.css';
import Breadcrumb from "../components/Breadcrumb";

const availableLoans = [
  {
    id: 'personal',
    title: 'Personal Loan',
    image: '/images/loans/personal-loan.png',
    description: 'For personal financial needs such as education, marriage, and emergencies.',
    icon: '💳',
    
    color: '#10b981'
  },
  {
    id: 'business',
    title: 'Business Loan',
    image: '/images/loans/business-loan.png',
    description: 'Supports business expansion, working capital, and operational growth.',
    icon: '💼',
    
    color: '#3b82f6'
  },
  {
    id: 'mortgage',
    title: 'Mortgage Loan',
    image: '/images/loans/mortgage-loan.png',
    description: 'Loan against property with higher value and longer repayment tenure.',
    icon: '🏠',
    
    color: '#f59e0b'
  }
];

const requiredDocuments = [
  {
    title: 'Identity Proof',
    icon: '🪪',
    items: ['Aadhaar Card', 'PAN Card', 'Voter ID / Passport'],
    color: '#3b82f6'
  },
  {
    title: 'Address Proof',
    icon: '📍',
    items: ['Aadhaar Card', 'Utility Bill', 'Rental Agreement'],
    color: '#10b981'
  },
  {
    title: 'Income Proof',
    icon: '💰',
    items: ['Salary Slip / Business Proof', 'Bank Statement (6 Months)', 'IT Returns'],
    color: '#f59e0b'
  },
  {
    title: 'Property Documents',
    icon: '🏠',
    items: ['Property Papers', 'EC Copy', 'Approved Plan'],
    color: '#8b5cf6'
  }
];


const loanTypes = [
  {
    title: 'Monthly Interest Loan',
    icon: '📅',
    description: 'Pay interest every month. Principal payable at the end of tenure.',
    rate: '3%',
    color: '#ef4444'
  },
  {
    title: 'Monthly EMI Loan',
    icon: '📊',
    description: 'Structured EMI repayment with reduced interest burden.',
    rate: '1.5%',
    highlight: true,
    color: '#10b981'
  },
  {
    title: 'Daily Loan',
    icon: '💼',
    description: 'Convenient daily repayment option for traders & small businesses.',
    rate: '3%',
    color: '#8b5cf6'
  }
];

const LoansPage = () => {
  return (
    <div className="loan-page-wrapper">
      <Breadcrumb />
      {/* HERO */}
      <section className="modern-hero">
        <div className="hero-bg"></div>
        <h1 className="hero-title">
          Loans <span>Details</span>
        </h1>
        <p className="hero-subtitle">
          Simple loan structures with transparent interest rates and flexible repayment options.
        </p>
        <div className="hero-actions">
  <a href="/contact" className="hero-contact-btn">
    Know Your Eligibility
    <span className="arrow">→</span>
  </a>
</div>

        <div className="amount-range-card">
      <div className="amount-header">
        <span className="amount-label">Loan Amount Range</span>
        <span className="amount-badge">Flexible</span>
      </div>

      <div className="amount-values">
        <div className="amount-item">
          <span className="amount-title">Minimum</span>
          <h3>₹ 20,000</h3>
        </div>

        <div className="amount-divider"></div>

        <div className="amount-item">
          <span className="amount-title">Maximum</span>
          <h3>₹ 10 Lakhs</h3>
        </div>
      </div>

        <p className="amount-note">
          Loan amount depends on eligibility, income & document verification.
        </p>
        <div className="rate-badge">3% Interest</div>
</div>

      </section>

      <section className="content-section">
        <div className="loan-container">
          {/* LOAN TYPES */}
          <div className="info-card">
            <h2>Loan Types</h2>
            <div className="premium-loan-types">
              {loanTypes.map((loan, index) => (
                <div key={index} className={`loan-type-card ${loan.highlight ? 'highlight' : ''}`} style={{'--card-color': loan.color}}>
                  <div className="loan-type-header">
                    <span className="loan-icon" style={{background: `linear-gradient(135deg, ${loan.color}, ${loan.color}cc)`}}>{loan.icon}</span>
                    <h3>{loan.title}</h3>
                  </div>
                  <p>{loan.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AVAILABLE LOANS - NOW MODERN */}
          <div className="info-card">
            <h2>Available Loans</h2>
            <div className="premium-loan-grid">
              {availableLoans.map((loan, index) => (
                <div key={loan.id} className="modern-loan-card" style={{'--card-color': loan.color}}>
                  <div className="loan-image-container">
                    <img src={loan.image} alt={loan.title} />
                  </div>
                  <div className="loan-content">
                    <span className="loan-icon">{loan.icon}</span>
                    <h3>{loan.title}</h3>
                    <p>{loan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* REQUIRED DOCUMENTS */}
<div className="info-card">
  <h2>Required Documents</h2>

  <div className="documents-grid">
    {requiredDocuments.map((doc, index) => (
      <div
        key={index}
        className="document-card"
        style={{ '--card-color': doc.color }}
      >
        <div className="document-header">
          <span className="document-icon">{doc.icon}</span>
          <h3>{doc.title}</h3>
        </div>

        <ul className="document-list">
          {doc.items.map((item, i) => (
            <li key={i}>
              <span className="check">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default LoansPage;
