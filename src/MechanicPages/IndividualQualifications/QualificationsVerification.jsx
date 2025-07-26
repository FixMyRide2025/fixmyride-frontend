import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./QualificationsVerification.css";

const skills = [
  "Engine Repair & Diagnostics",
  "Electrical & Battery Systems",
  "Tire Services & Wheel Alignment",
  "Brake & Suspension Work",
  "AC & Climate Control Repair",
  "Hybrid & EV Systems",
  "Other"
];

const QualificationsVerification = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [referenceContact, setReferenceContact] = useState("");
  return (
    <div className={`qualifications-register-container`}>
      <div className={`qualifications-left${showSuccess ? ' qualifications-blur' : ''}`}>
        <div className="qualifications-logo-row">
          <img src="/src/assets/carlogo.svg" alt="FixMyRide Logo" className="qualifications-logo" />
          <span className="qualifications-brand">FixMyRide</span>
        </div>
        <div className="qualifications-quote-icon">&ldquo;</div>
        <div className="qualifications-quote">
          In the 2025s, roadside assistance is getting smarter and faster — with platforms like FixMyRide bringing instant, on-demand help right to your location, anytime, anywhere.
        </div>
        <div className="qualifications-quote-author">
          Vincent Obi <span className="qualifications-verified">✔</span>
        </div>
        <div className="qualifications-quote-corner"></div>
      </div>
      <div className={`qualifications-right${showSuccess ? ' qualifications-blur' : ''}`}>
        <div className="qualifications-top-row">
          <Link to="/bank-verification" className="qualifications-back-link">&lt; Back</Link>
          <span className="qualifications-step">STEP 04/04<br/>Qualifications Verification</span>
        </div>
        <h2 className="qualifications-title">Complete Your Profile!</h2>
        <p className="qualifications-desc">For the purpose of industry regulation, your <br />details are required.</p>
        <hr className="qualifications-divider" />
        <form className="qualifications-form" onSubmit={e => {
          e.preventDefault();
          setShowSuccess(true);
        }}>
          <label className="qualifications-skills-label">Type of skills</label>
          <div className="qualifications-skills-row">
            {skills.map(skill => (
              <button
                type="button"
                key={skill}
                className={`qualifications-skill-btn${selectedSkill === skill ? " selected" : ""}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
          <label>Years of experience</label>
          <select className="qualifications-select" required>
            <option className="placeholder" value="">Select the period of time</option>
            <option value="1-2">1-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years</option>
          </select>
          <label>Reference Contact (optional but adds trust)</label>
          <input
            type="tel"
            value={referenceContact}
            onChange={e => {
              // Remove all non-digit characters
              const onlyNums = e.target.value.replace(/\D/g, "");
              setReferenceContact(onlyNums);
            }}
            placeholder="Enter the reference contact number"
            className="qualifications-input"
          />
          <label>Google map linked to garage</label>
          <input
            type="text"
            placeholder="Paste the url here"
            className="qualifications-input"
          />
          <label>Are You Currently Working with a Garage?</label>
          <select className="qualifications-select">
            <option className="placeholder" value="">Select & If yes: input garage name</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button type="submit" className="residency-btn">Submit</button>
        </form>
        <div className="qualifications-info-secure">
          <span className="qualifications-info-lock-svg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="5" y="9" width="10" height="7" rx="2" stroke="#bdbdbd" strokeWidth="1.5"/>
              <path d="M7 9V7a3 3 0 1 1 6 0v2" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="13" r="1" fill="#bdbdbd"/>
            </svg>
          </span>
          Your info is safely secured
        </div>
      </div>
      {showSuccess && (
        <div className="qualifications-success-modal">
          <button
            className="qualifications-success-close"
            onClick={() => setShowSuccess(false)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="qualifications-success-logo" style={{ marginBottom: 10 }}>
            <img src="/src/assets/carlogo.svg" alt="FixMyRide Logo" style={{ width: 48, height: 48 }} />
          </div>
          <div className="qualifications-success-title" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
            FixMyRide
          </div>
          <div className="qualifications-success-msg" style={{ fontSize: "1.15rem", fontWeight: 600, textAlign: "center", marginBottom: 12 }}>
            Your details have been successfully submitted!<br />
            We’ll verify and notify you soon!
          </div>
          <div className="qualifications-success-desc" style={{ fontSize: "1rem", color: "#bdbdbd", textAlign: "center", marginBottom: 22 }}>
            Let’s give great service to our clients.<br />
            Welcome to the FixMyRide team!
          </div>
          <button
            className="qualifications-success-btn"
            onClick={() => navigate('/')}
            style={{ background: "#4f7cf7", color: "#fff", border: "none", borderRadius: 8, fontSize: "1rem", fontWeight: 600, padding: "12px 28px", cursor: "pointer" }}
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default QualificationsVerification;
