import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ServiceRequest.css";

const breakdowns = [
  { label: "Dead Battery", icon: "/images/Battery.png" },
  { label: "Engine trouble", icon: "/images/Trouble.png" },
  { label: "Gearbox issue", icon: "/images/GearBox.png" },
  { label: "Flat Tyre", icon: "/images/Flat Tier.png" },
  { label: "Overheating", icon: "/images/Overheating.png" },
  { label: "Break issues", icon: "/images/Break issues.png" },
  { label: "Starter Issue", icon: "/images/Starter Issue.png" },
  { label: "Unknown Issue", icon: "/images/Unknown Issue.png" }
];

const ServiceRequest2 = () => {
  const [selectedBreakdown, setSelectedBreakdown] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="service-request1-container">
      <Navbar />
      <main>
        <h1 className="main-title">Select Breakdown</h1>
        <p className="main-subtitle">Options that you can choose</p>
        <div className="breakdown-grid">
          {breakdowns.map((item, idx) => (
            <div
              key={item.label}
              className={`breakdown-card${selectedBreakdown === idx ? " active" : ""}`}
              onClick={() => setSelectedBreakdown(idx)}
            >
              <div className="breakdown-icon">
                <img src={item.icon} alt={item.label} />
              </div>
              <div className="breakdown-label">{item.label}</div>
              <button className="breakdown-select">Select</button>
            </div>
          ))}
        </div>
        <div className="navigation-row">
          <button className="nav-btn" onClick={() => navigate("/servicerequest1")}>← Back</button>
          <button className="nav-btn" onClick={() => navigate("/servicerequest3")}>Next →</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceRequest2;