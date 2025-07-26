

import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <div className="footer-arrow">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="27" stroke="#fff" strokeWidth="2" fill="none" />
          <path d="M28 38V18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 24L28 18L34 24" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="footer-logo">FixMyRide</div>
    </div>
    <div className="footer-center">
      <div className="footer-copy">©2025 FixMyRide. All rights reserved.</div>
    </div>
    <div className="footer-right">
      <div className="footer-social">
        <a href="#" className="footer-icon" aria-label="Instagram">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><rect x="9" y="9" width="10" height="10" rx="5" stroke="#fff" strokeWidth="2"/><circle cx="14" cy="14" r="2" fill="#fff"/></svg>
        </a>
        <a href="#" className="footer-icon" aria-label="TikTok">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><path d="M18 10v6a4 4 0 11-4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
        </a>
        <a href="#" className="footer-icon" aria-label="Facebook">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><path d="M16 10h-2v2h2v2h-2v4h-2v-4h-2v-2h2v-2h-2v-2h2v2h2v-2h2v2z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
        </a>
        <a href="#" className="footer-icon" aria-label="YouTube">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2"/><rect x="10" y="12" width="8" height="4" rx="2" stroke="#fff" strokeWidth="2"/><polygon points="14,13 16,14 14,15" fill="#fff"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;