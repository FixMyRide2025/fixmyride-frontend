import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ServiceRequest.css";

const API_URL = "/api/service/service-request/"; // make sure your Vite proxy is set

const ServiceRequest3 = () => {
  const navigate = useNavigate();
  const [vehicleModel, setVehicleModel] = useState("");
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiErr, setApiErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiErr("");

    if (!vehicleModel.trim() || !location.trim()) {
      setErrorMsg("Please enter vehicle model & current location.");
      return;
    }
    setErrorMsg("");

    const step1 = JSON.parse(localStorage.getItem("sr_step1") || "{}");
    const step2 = JSON.parse(localStorage.getItem("sr_step2") || "{}");

    const payload = {
      vehicle_type: step1.vehicleType || "",
      vehicle_model: vehicleModel,
      break_down_type: step2.breakDownType || "",
      breakdown_location: location,
      created_at: new Date().toISOString(),
    };

    console.log("Service Request payload:", payload);

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
        throw new Error(typeof data === "string" ? data : JSON.stringify(data, null, 2));
      }

      console.log("Service request success:", data);
      // Clear steps
      localStorage.removeItem("sr_step1");
      localStorage.removeItem("sr_step2");
      setShowSuccess(true);
    } catch (err) {
      console.error("Service request error:", err);
      setApiErr(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="service-request1-container">
      {(errorMsg || apiErr) && (
        <div className="top-toast-error">{errorMsg || apiErr}</div>
      )}

      <Navbar />
      <main>
        <h1 className="main-title">Vehicle Details & Location</h1>
        <p className="main-subtitle">We need a few more details to help you quickly</p>

        <form className="service-request-form" onSubmit={handleSubmit}>
          <label>Vehicle Model</label>
          <input
            type="text"
            placeholder="e.g. Toyota Prius"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />

          <label>Current Location</label>
          <input
            type="text"
            placeholder="e.g. Colombo"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <div className="navigation-row">
            <button
              type="button"
              className="nav-btn"
              onClick={() => navigate("/servicerequest2")}
            >
              ← Back
            </button>
            <button className="nav-btn" type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Request →"}
            </button>
          </div>
        </form>
      </main>

      {/* Success Modal */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => {
                setShowSuccess(false);
                navigate("/");
              }}
            >
              ×
            </button>
            <h2>Request Submitted!</h2>
            <p>We received your request. A mechanic will reach out soon.</p>
            <button
              className="modal-ok-btn"
              onClick={() => {
                setShowSuccess(false);
                navigate("/");
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServiceRequest3;
