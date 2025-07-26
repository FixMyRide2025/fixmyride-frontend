import React, { useState } from "react";
import carLogo from "../../assets/carlogo.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ServiceRequest.css";

const ServiceRequest3 = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Maharagama");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="service-request3-container">
      <Navbar />
      <main>
        <div className="map-section">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58638717108!2d79.77380249648661!3d6.9220019823487915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1753466873179!5m2!1sen!2slk"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: "0 0 24px 24px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="location-section">
          <div className="location-title-row">
            <img src="./images/location.png" alt="Location Icon" className="location-icon" />
            <h1 className="location-title">Your Location</h1>
          </div>
          <p className="location-address">92A, High level road, Maharagama</p>
          <input
            className="location-input"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Enter your location"
          />
        </div>
        <div className="navigation-row">
          <button className="nav-btn" onClick={() => navigate("/servicerequest2")}>← Back</button>
          <button className="nav-btn blue" onClick={() => setShowModal(true)}>
            Request Assistance →
          </button>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-popup">
              <div className="modal-logo-row">
                <img src={carLogo} alt="Car Logo" className="modal-logo" />
                <span className="modal-title">FixMyRide</span>
              </div>
              <div className="modal-message-row">
                <span className="modal-message">Searching assistance</span>
                <span className="modal-search-icon">🔍</span>
              </div>
              <button className="modal-cancel-btn" onClick={() => setShowModal(false)}>
                Cancel request
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServiceRequest3;