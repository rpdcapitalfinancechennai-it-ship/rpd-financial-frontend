import "./Home.css";
import home from "../assets/home.png";
import { FaBullseye, FaEye } from "react-icons/fa";
import { FaRupeeSign, FaHome, FaUserTie, FaUsers, FaCar, FaShieldAlt, FaHandshake, FaBusinessTime, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

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

    <Link to="/business-loans" className="service-card">
      <FaRupeeSign size={40} />
      <h3>Loans</h3>
      <p>Personal • Business • Mortgage Loans</p>
    </Link>

    <Link to="/enterprises" className="service-card">
      <FaHandshake size={40} />
      <h3>Enterprises</h3>
      <p>Wholesale Rice, Dal, Oil & Cashews</p>
    </Link>

    <Link to="/travel-zone" className="service-card">
      <FaGlobe size={40} />
      <h3>Travel Zone</h3>
      <p>Domestic & International Group Tours</p>
    </Link>

    <Link to="/insurance-plan" className="service-card">
      <FaShieldAlt size={40} />
      <h3>Insurance</h3>
      <p>Life protection with assured returns</p>
    </Link>

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
<section className="contact-clean">

  {/* LEFT — INFO + FORM */}
  <div className="contact-left">

    <h2>Contact Us</h2>
    <p className="contact-desc">
      Reach out to RPD Capital Finance for trusted financial guidance and
      professional support.
    </p>

    <form className="contact-form-clean">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="text" placeholder="Phone Number" required />
      <textarea rows="4" placeholder="Your Message" required></textarea>

      <button type="submit">Send Message</button>
    </form>

    <div className="contact-info-clean">
      <p><strong>RPD Capital Finance</strong></p>
      <p>
        Plot No.328LA, S Kolathur Main Road,<br />
        Viduthalai Nagar, Kovilambakkam,<br />
        Chennai – 600129
      </p>
      <p><strong>Email:</strong> rpdcapitalfinancechennai@gmail.com</p>
      <p><strong>Phone:</strong> +91 96633 16054</p>
    </div>

  </div>

  {/* RIGHT — MAP */}
  <div className="contact-map">
    <iframe
      title="RPD Capital Finance Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3989358161743!2d80.19775297484088!3d12.946305087366687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9a2d96cf69%3A0x7f148c8f38a45e2!2sRPD%20Capital%20Finance!5e0!3m2!1sen!2sin!4v1763125487558!5m2!1sen!2sin"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    ></iframe>
  </div>

</section>




      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} RPD Financial Services. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
