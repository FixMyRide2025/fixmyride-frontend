import React from "react";
import { Link, useLocation } from "react-router-dom";
import carLogo from "../../assets/carlogo.svg";
import customerLogo from "../../assets/customerlogo.svg";
import loginLogo from "../../assets/login.svg";
import mechanicLogo from "../../assets/mechanic.svg";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={carLogo} alt="Car Logo" className="car-logo" />
        <span className="logo">FixMyRide</span>
      </div>
      <ul className="navbar-center">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" className="navbar-link">HOME</Link>
        </li>
        <li className={(location.pathname === "/services" || location.pathname.startsWith("/servicerequest")) ? "active" : ""}>
          <Link to="/services" className="navbar-link">SERVICES</Link>
        </li>
        <li className={location.pathname === "/plans" ? "active" : ""}>
          <Link to="/plans" className="navbar-link">PLANS</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="/customer-support">
          <div className={location.pathname === "/customer-support" ? "active-icon-bg" : ""}>
            <img
              src={customerLogo}
              alt="Customer"
              className="icon"
            />
          </div>
        </Link>
        <Link to="/login">
          <img src={loginLogo} alt="Login" className="icon" />
        </Link>
        <Link to="/mechanic-login">
          <img src={mechanicLogo} alt="mechanic" className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;