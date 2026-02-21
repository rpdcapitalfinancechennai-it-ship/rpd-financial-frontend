import Breadcrumb from "../components/Breadcrumb";
import "./Insurance.css";

export default function Insurance() {
  return (
    <div className="insurance-container">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="insurance-hero-section">
        <div className="hero-content">
          <h1 className="hero-title">INSURANCE</h1>

          <div className="hero-text">
            <p>
              We are a licensed Insurance Brokerage Company committed to helping
              individuals and businesses choose the right insurance solutions
              with confidence.
            </p>

            <p className="hero-partners">
              Partnering with leading providers and 50 + insurance partners
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-stats">
            <div className="stat-item">
              <div className="insurance-stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>

            <div className="stat-item">
              <div className="insurance-stat-number">50+</div>
              <div className="stat-label">Partner Insurers</div>
            </div>

            <div className="stat-item">
              <div className="insurance-stat-number">24/7</div>
              <div className="stat-label">Claim Support</div>
            </div>
          </div>

          <div className="partners-section">
            <h3 className="partners-title">Trusted by Leading Insurers</h3>
            <div className="partners-logos">
              <div className="partner-logo">TATA AIG</div>
              <div className="partner-logo">SBI Insurance</div>
              <div className="partner-logo">Future Generali</div>
              <div className="partner-logo">Aditya Birla</div>
            </div>
          </div>

          <div className="value-grid">
            <div className="value-card primary">3% Interest
              <div className="value-icon" aria-hidden="true">🛡️</div>
              <h4>Complete Coverage</h4>
              <p>
                Best policies from multiple providers compared for maximum
                protection
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon" aria-hidden="true">⚡</div>
              <h4>Quick Claims</h4>
              <p>
                Hassle-free settlements with 24/7 support when you need it most
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon" aria-hidden="true">💰</div>
              <h4>Transparent Pricing</h4>
              <p>No hidden fees, clear terms, and honest advice always</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Categories */}
      <section className="categories-section">
        <div className="categories-content">
          <div className="section-header">
            <h2 className="section-title">Our Insurance Solutions</h2>
          </div>

          <div className="cards-grid">
            <div className="insurance-card vehicle-card">
              <div className="card-header">
                <div className="card-icon" aria-hidden="true">🚗</div>
                <h3>Vehicle Insurance</h3>
              </div>
              <div className="card-body">
                <p>
                  Complete protection against repair costs, liabilities, and
                  unexpected damages.
                </p>
                <ul>
                  <li>Specialized heavy vehicle insurance</li>
                  <li>Quick claim settlements</li>
                  <li>Hassle-free processes</li>
                </ul>
              </div>
            </div>

            <div className="insurance-card health-card">
              <div className="card-header">
                <div className="card-icon" aria-hidden="true">🩺</div>
                <h3>Health Insurance</h3>
              </div>
              <div className="card-body">
                <p>
                  Protect your health and family from unexpected medical
                  expenses.
                </p>
                <p className="highlight-text">
                  Specialized group medical coverage for businesses &
                  institutions.
                </p>
              </div>
            </div>

            <div className="insurance-card life-card">
              <div className="card-header">
                <div className="card-icon" aria-hidden="true">💙</div>
                <h3>Life Insurance</h3>
              </div>
              <div className="card-body">
                <p>
                  Combines life insurance security with assured returns.
                </p>
                <ul>
                  <li>Guaranteed maturity benefits</li>
                  <li>Flexible premium options</li>
                  <li>Long-term financial security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
