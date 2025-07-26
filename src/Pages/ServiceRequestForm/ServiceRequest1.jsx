import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ServiceRequest.css";

const vehicleTypes = [
  { label: "Trucks, Jeep or Off Road", icon: "/images/Jeep.png" },
  { label: "SUVs", icon: "/images/SUVs.png" },
  { label: "Sedans", icon: "/images/Sedans.png" },
  { label: "Bike", icon: "/images/Bike.png" },
  { label: "Tuk Tuk", icon: "/images/Tuk.png" }
];

const vehicleModes = ["Petrol", "Diesel", "Hybrid", "EV"];

const ServiceRequest1 = () => {
  const [selectedType, setSelectedType] = useState(1); // Default to SUVs
  const [selectedMode, setSelectedMode] = useState(null);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const cardsPerPage = 3;
  const totalPages = Math.ceil(vehicleTypes.length / cardsPerPage);

  const getVisibleTypes = () => {
    if (page === 0) return vehicleTypes.slice(0, cardsPerPage);
    return vehicleTypes.slice(cardsPerPage);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const visibleTypes = getVisibleTypes();

  return (
    <div className="service-request1-container">
      <Navbar />
      <main>
        <h1 className="main-title">Vehicle Type</h1>
        <p className="main-subtitle">Options that you can choose</p>
        <div className="vehicle-type-carousel">
          <div className="vehicle-type-row">
            {visibleTypes.map((type, idx) => (
              <div
                key={type.label}
                className={`vehicle-type-card${
                  selectedType === idx ? " active" : ""
                }`}
                onClick={() => setSelectedType(idx)}
              >
                <div className="vehicle-type-icon">
                  <img src={type.icon} alt={type.label} />
                  <div className="vehicle-type-divider"></div>
                </div>
                <div className="vehicle-type-label">{type.label}</div>
                <button className="vehicle-type-select">Select</button>
              </div>
            ))}
            <div className="carousel-arrows">
              <button
                className={`carousel-arrow left${
                  page === 0 ? " disabled" : ""
                }`}
                onClick={handlePrev}
                disabled={page === 0}
                aria-label="Previous"
              >
                &#60;
              </button>
              <button
                className={`carousel-arrow right${
                  page === totalPages - 1 ? " disabled" : ""
                }`}
                onClick={handleNext}
                disabled={page === totalPages - 1}
                aria-label="Next"
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
        <div className="vehicle-type-pagination">
          {vehicleTypes.map((_, i) => (
            <span
              key={i}
              className={`dot${selectedType === i ? " active" : ""}`}
            ></span>
          ))}
        </div>
        <h2 className="main-title">Vehicle Mode</h2>
        <p className="main-subtitle">Options that you can choose</p>
        <div className="vehicle-mode-section">
          <div className="vehicle-mode-row">
            {vehicleModes.map((mode) => (
              <button
                key={mode}
                className={`vehicle-mode-btn${
                  selectedMode === mode ? " selected" : ""
                }`}
                onClick={() => setSelectedMode(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
        <div className="navigation-row">
          <button className="nav-btn" onClick={() => navigate("/")}>← Back</button>
          <button className="nav-btn" onClick={() => navigate("/servicerequest2")}>Next →</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceRequest1;
