import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import instantLogo from "../../assets/instantlogo.svg";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => (
  <>
    <Navbar />
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Stuck on the road? We'll get you moving in no time.</h1>
          <p>
            Whether it's a flat tire or dead battery, FixMyRide has your back. Get fast, reliable roadside help that fits your needs and your budget.
          </p>
          <hr className="hero-divider" />
          <div className="hero-actions">
            <Link to="/servicerequest1" style={{ textDecoration: 'none' }}>
              <button className="instant-help">
                INSTANT HELP <span className="help-icon"><img src={instantLogo} alt="Instant Help" /></span>
              </button>
            </Link>
            <div className="contact-info">
              <img src="/images/phone-call 1.png" alt="Phone" className="phone-icon" />
              <div>
                <span className="contact-number">123 456 789 0</span>
                <span className="contact-label">24x7 EMERGENCY ASSISTANCE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/bannercar1.png" alt="Car" />
        </div>
      </section>

      {/* Service Form */}
      <form className="service-form">
        <div className="form-group">
          <label>Pick-up Location</label>
          <div className="input-icon">
            <span className="icon">
              {/* Location SVG */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#888" strokeWidth="2" d="M12 21s-7-7.58-7-12A7 7 0 0 1 19 9c0 4.42-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5" stroke="#888" strokeWidth="2"/></svg>
            </span>
            <input id="pickup-location" type="text" placeholder="Search a location" />
          </div>
        </div>
        <div className="form-group">
          <label>Pick-up date</label>
          <div className="input-icon">
            <input id="pickup-date" type="date" />
            <span className="icon">
              {/* Calendar SVG */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3" stroke="#888" strokeWidth="2"/><path stroke="#888" strokeWidth="2" d="M16 3v4M8 3v4"/><path stroke="#888" strokeWidth="2" d="M3 9h18"/></svg>
            </span>
          </div>
        </div>
        <div className="form-group">
          <label>Drop-off Location</label>
          <div className="input-icon">
            <span className="icon">
              {/* Location SVG */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#888" strokeWidth="2" d="M12 21s-7-7.58-7-12A7 7 0 0 1 19 9c0 4.42-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5" stroke="#888" strokeWidth="2"/></svg>
            </span>
            <input id="dropoff-location" type="text" placeholder="Search a location" />
          </div>
        </div>
        <div className="form-group">
          <label>Type of Vehicle</label>
          <div className="input-icon">
            <select className="dropdown-select">
              <option value="">Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="truck">Truck</option>
            </select>
            <span className="icon">
              {/* Vehicle SVG */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="6" rx="2" stroke="#888" strokeWidth="2"/><rect x="7" y="7" width="10" height="4" rx="1" stroke="#888" strokeWidth="2"/><circle cx="7.5" cy="17.5" r="1.5" fill="#888"/><circle cx="16.5" cy="17.5" r="1.5" fill="#888"/></svg>
            </span>
          </div>
        </div>
        <Link to="/servicerequest3" style={{ textDecoration: 'none' }}>
          <button type="button" className="find-tow-btn">
            Find Tow Truck
            <span className="icon">
              {/* Arrow SVG */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </Link>
      </form>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <img src="/images/location 1.png" alt="24x7 Availability" />
          <h4 className="feature-title">24x7 Availability</h4>
          <p className="feature-desc">Round-the-clock service, anywhere you need it.</p>
        </div>
        <div className="feature">
          <img src="/images/Vector.png" alt="Verified Providers" />
          <h4 className="feature-title">Verified Providers</h4>
          <p className="feature-desc">Trained professionals, quality guaranteed that you need.</p>
        </div>
        <div className="feature">
          <img src="/images/wallet 1.png" alt="Cost Savings" />
          <h4 className="feature-title">Cost Savings</h4>
          <p className="feature-desc">Affordable rates without cutting corners and additional charges.</p>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h2>Book your luxury car detailing today!</h2>
          <p>
            Click the link below. Fill out the details and we’ll get back to you in less than 24 hours.
          </p>
          <button className="service-plans-btn">See Service Plans</button>
        </div>
        {/* <div className="promo-image">
          <img src="/images/bannercar2.png" alt="Luxury Car" />
        </div> */}
      </section>

      {/* Join With Us */}
      <section className="join-with-us">
        <div className="join-image">
          <img src="/images/techbanner.png" alt="Mechanic" />
        </div>
        <div className="join-content">
          <h2>
            Want to <span className="highlight">Join With</span> Us?
          </h2>
          <div className="stats">
            <div>
              <span>Happy Customers</span>
              <strong>350+</strong>
            </div>
            <div>
              <span>Successful Projects</span>
              <strong>350+</strong>
            </div>
          </div>
          <Link to="/mechanicregister" style={{ textDecoration: 'none' }}>
            <button className="register-btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="testimonials-heading">Client Success Stories</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <div className="stars">{Array(5).fill('★').join('')}</div>
            <p>FixMyRide.lk treated my Audi like royalty. Smooth booking, top-tier service.</p>
            <div className="client-info">
              <strong>Zeen Rai</strong>
              <span>Audi A3 Owner</span>
              <img src="/images/zeen.png" alt="Zeen Rai" className="client-img" />
            </div>
          </div>
          <div className="testimonial">
            <div className="stars">{Array(5).fill('★').join('')}</div>
            <p>Professional, prompt, and perfect for my BMW. Couldn't ask for better.</p>
            <div className="client-info">
              <strong>Masha Nishi</strong>
              <span>BMW 520D Owner</span>
              <img src="/images/maleesha.png" alt="Maleesha Nishi" className="client-img" />
            </div>
          </div>
          <div className="testimonial">
            <div className="stars">{Array(5).fill('★').join('')}</div>
            <p>Great value and service! My Premio feels brand new again.</p>
            <div className="client-info">
              <strong>Jhon Don</strong>
              <span>Toyota Premio Owner</span>
              <img src="/images/Jhon.png" alt="Jhon Don" className="client-img" />
            </div>
          </div>
          <div className="testimonial">
            <div className="stars">{Array(4).fill('★').join('') + '☆'}</div>
            <p>Quick, affordable, and super reliable — FixMyRide.lk nailed it.</p>
            <div className="client-info">
              <strong>Arman Zalik</strong>
              <span>Aqua Owner</span>
              <img src="/images/Arman.png" alt="Arman Zalik" className="client-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);


export default HomePage;