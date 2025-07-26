import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BusinessMechanic.css";

const API_URL = "/api/auth/mechanic/register/"; // via Vite proxy

// Map service names to backend IDs (adjust IDs if your backend differs)
const SERVICE_TYPES = {
  "General Vehicle Servicing": 1,
  "Engine Diagnostics & Repairs": 2,
  "Battery & Electrical System Services": 3,
  "Brake & Suspension Work": 4,
  "AC & Climate Control Repair": 5,
  "Hybrid & EV Systems": 6,
  "Emergency Roadside Assistance": 7,
  Other: 8,
};

const BusinessRegister4 = () => {
  const navigate = useNavigate();

  // MULTI select now
  const [selectedServices, setSelectedServices] = useState([]);
  const [mechanics, setMechanics] = useState("");
  const [googleMap, setGoogleMap] = useState("");
  const [walkIn, setWalkIn] = useState("Yes");
  const [showModal, setShowModal] = useState(false);
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const services = Object.keys(SERVICE_TYPES);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    const step1 = JSON.parse(localStorage.getItem("biz_step1")) || {};
    const step2 = JSON.parse(localStorage.getItem("biz_step2")) || {};
    const step3 = JSON.parse(localStorage.getItem("biz_step3")) || {};

    const payload = {
      // *** EXACT KEYS your backend said it wants ***
      email: step1.email || "",
      password: step1.password || "",
      mechanic_type: "company",
      company_name: step1.company || "",
      phone_number: (step1.phoneCountry || "") + (step1.phone || ""),
      address: step2.address || "",
      province: step2.province || "",
      district: step2.district || "",
      city: step2.city || "",
      bank_account_number: step3.bankAccountNumber || "",
      bank_name: step3.bankName || "",
      bank_branch: step3.bankBranch || "",
      gooogle_map_location: googleMap, // keeping their typo
      service_types: selectedServices.map((s) => SERVICE_TYPES[s]),
      registration_number: step1.regNumber || "",
      number_of_mechanics: Number(mechanics) || 0,
      accept_walk_in_customers: walkIn === "Yes",
    };

    console.log("Business POST payload:", payload);

    try {
      setSubmitting(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        data = raw;
      }

      if (!res.ok) {
        throw new Error(
          typeof data === "string" ? data : JSON.stringify(data, null, 2)
        );
      }

      console.log("Business API success:", data);

      // clear storage
      localStorage.removeItem("biz_step1");
      localStorage.removeItem("biz_step2");
      localStorage.removeItem("biz_step3");

      setShowModal(true);
    } catch (e2) {
      console.error("Business API error:", e2);
      setErr(e2.message);
    } finally {
      setSubmitting(false);
    }
  };

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
          <Link to="/businessregister3" className="residency-back-link">
            &lt; Back
          </Link>
          <span className="residency-step">
            STEP 04/04
            <br />
            Qualifications Verification
          </span>
        </div>
        <h2 className="residency-title">Complete Your Profile!</h2>
        <p className="residency-desc">
          For the purpose of industry regulation, your <br />
          details are required.
        </p>
        <hr className="business-desc-divider" />

        {err && (
          <pre style={{ color: "red", whiteSpace: "pre-wrap", marginBottom: 10 }}>
            {err}
          </pre>
        )}

        <form className="residency-form" onSubmit={onSubmit}>
          <label>List of services</label>
          <div className="qualifications-skills-row">
            {services.map((service) => {
              const selected = selectedServices.includes(service);
              return (
                <button
                  type="button"
                  key={service}
                  className={`service-btn${selected ? " selected" : ""}`}
                  onClick={() => toggleService(service)}
                >
                  {service}
                </button>
              );
            })}
          </div>

          <label>Team of mechanics</label>
          <select
            value={mechanics}
            onChange={(e) => setMechanics(e.target.value)}
            required
          >
            <option value="">Select the number of mechanics</option>
            {[...Array(50)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <label>Google map linked to garage</label>
          <input
            type="url"
            placeholder="Paste the url here"
            value={googleMap}
            onChange={(e) => setGoogleMap(e.target.value)}
            required
          />

          <label>Do you accept walk in clients?</label>
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

          <button type="submit" className="residency-btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="residency-info-secures">
          {showModal && (
            <>
              <div className="modal-blur" />
              <div className="modal-popup">
                <button className="modal-close" onClick={() => setShowModal(false)}>
                  &times;
                </button>
                <div className="modal-logo-row">
                  <img src="/src/assets/carlogo.svg" alt="FixMyRide Logo" className="modal-logo" />
                  <span className="modal-brand">FixMyRide</span>
                </div>
                <div className="modal-title">
                  Your details have been successfully submitted!
                  <br /> We'll verify and notify you soon!
                </div>
                <div className="modal-desc">
                  Let’s give great service to our clients.
                  <br />
                  Welcome to the FixMyRide team!
                </div>
                <button className="modal-dashboard-btn" onClick={() => navigate("/")}>
                  Go to Dashboard
                </button>
              </div>
            </>
          )}
          <span className="residency-info-lock-svg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="5" y="9" width="10" height="7" rx="2" stroke="#bdbdbd" strokeWidth="1.5" />
              <path
                d="M7 9V7a3 3 0 1 1 6 0v2"
                stroke="#bdbdbd"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="10" cy="13" r="1" fill="#bdbdbd" />
            </svg>
          </span>
          Your info is safely secured
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister4;
