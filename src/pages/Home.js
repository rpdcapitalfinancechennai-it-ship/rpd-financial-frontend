import "./Home.css";
import home from "../assets/home.png";
import { FaBullseye, FaEye } from "react-icons/fa";
import { FaRupeeSign, FaHome, FaUserTie, FaUsers, FaCar, FaShieldAlt, FaHandshake, FaBusinessTime, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-page">

      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <img src={home} className="hero-img" alt="home" />
        <div className="hero-overlay">
          <h1>Welcome to RPD Capital Finance</h1>
          <p>Secure Fixed Deposits • Flexible Loans • Trusted Financial Services</p>
        </div>
      </section>


      {/* ---------- INTRO SECTION ---------- */}
      <section className="intro fade-up">
        <h2>About RPD Financial Services</h2>
          <p>
          RPD Financial Services is a professional organization committed to delivering expert financial 
          solutions to meet your diverse financial needs — all in one place to fulfill your dreams.
          We address client financial requirements with precision and efficiency. Our commitment to excellence 
          and deep understanding of the financial sector enable us to deliver the best solutions for your unique needs.
          Partner with us to experience dedicated service and professional advice designed to help
          you achieve your financial goals.
          </p>
      </section>


      {/* ---------- MISSION & VISION ---------- */}
      <section className="mission-vision">
  
            <div className="mv-box mv-left fade-left">
              <FaBullseye className="mv-icon" />
              <h2>OUR MISSION</h2>
              <p>
                To deliver a proactive, planned approach to help our clients achieve
                their financial needs through integrity, passion, and a relentless
                commitment to goal attainment.
              </p>
            </div>

            <div className="mv-box mv-right fade-right">
              <FaEye className="mv-icon" />
              <h2>OUR VISION</h2>
              <p>
                With core values of transparency, integrity and high business ethics,
                we intend to become the most trusted and affordable financial company.
              </p>
            </div>
        </section>



      {/* ---------- BUSINESSES SECTION ---------- */}
      <section className="services fade-up">
        <h2>Our Businesses</h2>

        <div className="service-list">

          <div className="service-card">
            <FaRupeeSign size={40} />
            <h3>Fixed Deposit</h3>
            <p>Safe investment with guaranteed returns. Best interest rates in the market.</p>
          </div>

          <div className="service-card">
            <FaBusinessTime size={40} />
            <h3>Business Loan</h3>
            <p>Flexible loans with competitive rates tailored for your business growth.</p>
          </div>

          <div className="service-card">
            <FaRupeeSign size={40} />
            <h3>Line of Credit</h3>
            <p>Access funds anytime to manage your daily operations efficiently.</p>
          </div>

          <div className="service-card">
            <FaHome size={40} />
            <h3>Home Loan</h3>
            <p>Own your dream home with our easy and fast processing home loan.</p>
          </div>

          <div className="service-card">
            <FaUserTie size={40} />
            <h3>Personal Loan</h3>
            <p>Make your dreams come true with our personal loan solutions.</p>
          </div>

          <div className="service-card">
            <FaShieldAlt size={40} />
            <h3>Insurance</h3>
            <p>
              Protect your tangible and intangible assets from financial loss with our attractive policies.
            </p>
          </div>

          <div className="service-card">
            <FaHandshake size={40} />
            <h3>Enterprises</h3>
            <p>Experts in wholesale grocery trading — rice, dals, oil, cashew and nuts.</p>
          </div>

          <div className="service-card">
            <FaGlobe size={40} />
            <h3>Travel Zone</h3>
            <p>20+ years experience in domestic and international group tours.</p>
          </div>

        </div>
      </section>


      {/* ---------- WE SERVE ---------- */}
      <section className="serve fade-up">
        <h2>We Serve To</h2>
        <ul>
          <li>Professionals</li>
          <li>Small & Medium Enterprises</li>
          <li>Business Owners</li>
          <li>Entrepreneurs</li>
        </ul>
      </section>
      
      
{/* ---------- CONTACT SECTION ---------- */}
<section className="contact-section">
  
  {/* LEFT — CONTACT FORM */}
  <div className="contact-box contact-left">
    <h2>Contact Us</h2>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <input type="text" placeholder="Phone Number" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>

      <button type="submit" className="contact-btn">Send Message</button>
    </form>
  </div>

  {/* RIGHT — ADDRESS + MAP */}
  <div className="contact-box contact-right">

    <h2>Our Office</h2>

    <p><strong>RPD Capital Finance</strong></p>
    <p>Plot No.328LA, S Kolathur Main Road,<br />
       Viduthalai Nagar, Kovilambakkam,<br />
       Chennai-600129</p>

    <p><strong>Email:</strong> rpdcapitalfinancechennai@gmail.com</p>
    <p><strong>Phone:</strong> +91 96633 16054</p>

    <div className="map-box">
      <iframe
        title="office-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3989358161743!2d80.19775297484088!3d12.946305087366687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9a2d96cf69%3A0x7f148c8f38a45e2!2sRPD%20Capital%20Finance!5e0!3m2!1sen!2sin!4v1763125487558!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </div>

</section>



      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} RPD Financial Services. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
