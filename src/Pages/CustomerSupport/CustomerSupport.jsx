import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./CustomerSupport.css";

const faqs = [
  {
    question: "What services does FixMyRide Roadside Assistance cover?",
    answer:
      "We handle flat tires, dead batteries, engine issues, jump-starts, emergency towing, and more — anytime, anywhere.",
    image: "/images/FAQ2.png",
  },
  {
    question: "How fast can I get help on the road?",
    answer: "Our average response time is under 30 minutes in most areas.",
    image: "/images/FAQ3.png",
  },
  {
    question: "How much does roadside assistance cost?",
    answer: "Pricing depends on your location and service. Get an instant quote online.",
    image: "/images/FAQ4.png",
  },
  {
    question: "Do I need to call, or can I book online?",
    answer: "You can book online or call us 24/7 for assistance.",
    image: "/images/FAQ5.png",
  },
  {
    question: "Can I track the mechanic after booking?",
    answer: "Yes, you’ll receive a live tracking link after booking.",
    image: "/images/FAQ6.png",
  },
  {
    question: "Is my payment and info secure?",
    answer: "Absolutely. We use industry-standard encryption for all transactions.",
    image: "/images/FAQ2.png",
  },
];

const CustomerSupport = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id.replace("contact-", "")]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setErrorMsg("");
    setShowMessagePopup(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setShowMessagePopup(false), 2500);
  };

  return (
    <div className="service-request-container">
      <Navbar />
      {/* --- Live Chat Section --- */}
      <section className="live-chat-section">
        <div className="live-chat-header">
          <span className="live-chat-issues">ANY ISSUES ?</span>
          <h1>
            Welcome to FixMyRide <br />
            Live Chat
          </h1>
          <p className="live-chat-subtitle">
            Please provide your details to start chatting with our <br /> customer
            care support
          </p>
        </div>
        <form
          className="live-chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            setShowChat(true);
          }}
        >
          <label htmlFor="name">Your fullname*</label>
          <input id="name" type="text" placeholder="Enter your full name" required />
          <label htmlFor="phone">Your phone number*</label>
          <input id="phone" type="text" placeholder="Enter your phone number" required />
          <button type="submit" className="live-chat-btn">
            Start Now
          </button>
        </form>
      </section>

      {/* --- Live Chat Popup --- */}
      {showChat && (
        <>
          <div className="modal-blur" />
          <div className="modal-chat-popup">
            <button className="modal-close" onClick={() => setShowChat(false)}>
              &times;
            </button>
            <h2>Live Chat Window</h2>
            <div className="chat-messages">
              <p><b>Support:</b> Hi there! How can we help you today?</p>
              <p><b>You:</b> (This is just a demo chat window)</p>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button>Send</button>
            </div>
          </div>
        </>
      )}

      {/* --- FAQ Section --- */}
      <section className="faq-section">
        <h2>FAQ’s</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item${activeIndex === idx ? " active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="faq-question-row">
                <img src={faq.image} alt="faq" className="faq-image" />
                <span className="faq-question">{faq.question}</span>
                <button
                  className="faq-toggle-btn"
                  aria-label={activeIndex === idx ? "Collapse" : "Expand"}
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(activeIndex === idx ? -1 : idx);
                  }}
                >
                  {activeIndex === idx ? "−" : "+"}
                </button>
              </div>
              {activeIndex === idx && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact Form --- */}
      <section className="contact-section">
        <h2 className="contact-title">Get in touch</h2>
        <p className="contact-subtitle">
          Any question or remarks? We’re here to assist you.
        </p>
        {errorMsg && <div className="top-toast-error">{errorMsg}</div>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-phone">Phone Number (optional)</label>
              <input
                id="contact-phone"
                type="text"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact-field contact-message">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="contact-btn">
            Leave us a Message <span style={{ marginLeft: "8px" }}>→</span>
          </button>
        </form>
      </section>

      {/* --- Message Sent Popup --- */}
      {showMessagePopup && (
        <div className="message-popup">
          <div className="message-popup-content">
            <span
              className="modal-close"
              onClick={() => setShowMessagePopup(false)}
            >
              &times;
            </span>
            <h3>Message Sent!</h3>
            <p>We will get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* --- Info & Footer --- */}
      <section className="info-row">
        {/* Same info items as before */}
        <div className="info-item">
          <span className="info-icon" style={{ background: "#111" }}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              />
            </svg>
          </span>
          <div>
            <div className="info-label">Address</div>
            <div className="info-value">
              <b>High level road, Maharagama</b>
            </div>
          </div>
        </div>
        {/* Other info items remain same */}
      </section>
      <Footer />
    </div>
  );
};

export default CustomerSupport;
