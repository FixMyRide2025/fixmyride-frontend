import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BusinessMechanic.css";

const BusinessRegister4 = () => {
  const [selectedService, setSelectedService] = useState("General Vehicle Servicing");
  const [mechanics, setMechanics] = useState("");
  const [googleMap, setGoogleMap] = useState("");
  const [walkIn, setWalkIn] = useState("Yes");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const services = [
    "General Vehicle Servicing",
    "Engine Diagnostics & Repairs",
    "Battery & Electrical System Services",
    "Brake & Suspension Work",
    "AC & Climate Control Repair",
    "Hybrid & EV Systems",
    "Emergency Roadside Assistance",
    "Other"
  ];

  return (
    <div className="residency-register-container">
      <div className="residency-left">
        <div className="residency-logo-row">
          <img src="/src/assets/carlogo.svg" alt="FixMyRide Logo" className="residency-logo" />
          <span className="residency-brand">FixMyRide</span>
        </div>
        <div className="residency-quote-icon">&ldquo;</div>
        <div className="residency-quote">
          In the 2025s, roadside assistance is getting smarter and faster — with platforms like FixMyRide bringing instant, on-demand help right to your location, anytime, anywhere.
        </div>
        <div className="residency-quote-author">
          Vincent Obi <span className="residency-verified">✔</span>
        </div>
        <div className="banks-quote-corner"></div>
      </div>
      <div className="residency-right">
        <div className="residency-top-row">
          <Link to="/businessregister3" className="residency-back-link">&lt; Back</Link>
          <span className="residency-step">STEP 04/04<br/>Qualifications Verification</span>
        </div>
        <h2 className="residency-title">Complete Your Profile!</h2>
        <p className="residency-desc">For the purpose of industry regulation, your <br />details are required.</p>
        <hr className="business-desc-divider" />
        <form className="residency-form" onSubmit={e => {
          e.preventDefault();
          setShowModal(true);
        }}>
          <label>List of services</label>
          <div className="qualifications-skills-row">
            {services.map(service => (
              <button
                type="button"
                key={service}
                className={`service-btn${selectedService === service ? " selected" : ""}`}
                onClick={() => setSelectedService(service)}
              >
                {service}
              </button>
            ))}
          </div>
          <label>Team of mechanics</label>
          <select value={mechanics} onChange={e => setMechanics(e.target.value)} required>
            <option value="">Select the number of mechanics</option>
            {[...Array(20)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
          <label>Google map linked to garage</label>
          <input
            type="url"
            placeholder="Paste the url here"
            value={googleMap}
            onChange={e => setGoogleMap(e.target.value)}
            required
          />
          <label>Do you accept walk in clients ?</label>
          <div className="walkin-row">
            <label className="walkin-checkbox">
              <input
                type="checkbox"
                checked={walkIn === "Yes"}
                onChange={() => setWalkIn("Yes")}
              />
              Yes
            </label>
            <label className="walkin-checkbox">
              <input
                type="checkbox"
                checked={walkIn === "No"}
                onChange={() => setWalkIn("No")}
              />
              No
            </label>
          </div>
          <button type="submit" className="residency-btn">Submit</button>
        </form>
        <div className="residency-info-secures">
      {showModal && (
        <>
          <div className="modal-blur" />
          <div className="modal-popup">
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <div className="modal-logo-row">
              <img src="/src/assets/carlogo.svg" alt="FixMyRide Logo" className="modal-logo" />
              <span className="modal-brand">FixMyRide</span>
            </div>
            <div className="modal-title">Your details have been successfully submitted! <br /> We'll verify and notify you soon!</div>
            <div className="modal-desc">Let’s give great service to our clients.<br/>Welcome to the FixMyRide team!</div>
            <button className="modal-dashboard-btn" onClick={() => navigate("/")}>Go to Dashboard</button>
          </div>
        </>
      )}
          <span className="residency-info-lock-svg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="5" y="9" width="10" height="7" rx="2" stroke="#bdbdbd" strokeWidth="1.5"/>
              <path d="M7 9V7a3 3 0 1 1 6 0v2" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="13" r="1" fill="#bdbdbd"/>
            </svg>
          </span>
          Your info is safely secured
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister4;
