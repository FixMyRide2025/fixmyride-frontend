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

	return (
		<div className="service-request-container">
			<Navbar />
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
				<form className="live-chat-form">
					<label htmlFor="name">Your fullname*</label>
					<input
						id="name"
						type="text"
						placeholder="Enter your full name"
						required
					/>
					<label htmlFor="phone">Your phone number*</label>
					<input
						id="phone"
						type="text"
						placeholder="Enter your phone number"
						required
					/>
					<button type="submit" className="live-chat-btn">
						Start Now
					</button>
				</form>
			</section>
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
							{activeIndex === idx && (
								<div className="faq-answer">{faq.answer}</div>
							)}
						</div>
					))}
				</div>
			</section>
			<section className="contact-section">
				<h2 className="contact-title">Get in touch</h2>
				<p className="contact-subtitle">
					Any question or remarks? We’re are here to assist you.
				</p>
				<form className="contact-form">
					<div className="contact-row">
						<div className="contact-field">
							<label htmlFor="contact-name">Your Name</label>
							<input
								id="contact-name"
								type="text"
								placeholder=""
								required
							/>
						</div>
						<div className="contact-field">
							<label htmlFor="contact-email">Email Address</label>
							<input
								id="contact-email"
								type="email"
								placeholder=""
								required
							/>
						</div>
						<div className="contact-field">
							<label htmlFor="contact-phone">Phone Number (optional)</label>
							<input id="contact-phone" type="text" placeholder="" />
						</div>
					</div>
					<div className="contact-field contact-message">
						<label htmlFor="contact-message">Message</label>
						<textarea id="contact-message" placeholder="" required />
					</div>
					<button type="submit" className="contact-btn">
						Leave us a Message{" "}
						<span style={{ marginLeft: "8px" }}>→</span>
					</button>
				</form>
			</section>
			<section className="info-row">
				<div className="info-item">
					<span className="info-icon" style={{ background: "#111" }}>
						{/* Location/Pin SVG */}
						<svg width="28" height="28" fill="none" viewBox="0 0 28 28">
							<circle cx="14" cy="14" r="13" stroke="#fff" strokeWidth="2" />
							<path
								d="M14 19.5c2.5-2.5 5-5.5 5-8A5 5 0 0 0 9 11.5c0 2.5 2.5 5.5 5 8Z"
								stroke="#fff"
								strokeWidth="2"
							/>
							<circle cx="14" cy="11.5" r="1.5" fill="#fff" />
						</svg>
					</span>
					<div>
						<div className="info-label">Address</div>
						<div className="info-value">
							<b>High level road, Maharagama</b>
						</div>
					</div>
				</div>
				<div className="info-item">
					<span className="info-icon" style={{ background: "#111" }}>
						{/* Email/Envelope SVG */}
						<svg width="28" height="28" fill="none" viewBox="0 0 28 28">
							<circle cx="14" cy="14" r="13" stroke="#fff" strokeWidth="2" />
							<rect
								x="7"
								y="10"
								width="14"
								height="8"
								rx="2"
								stroke="#fff"
								strokeWidth="2"
							/>
							<path d="M7 10l7 5 7-5" stroke="#fff" strokeWidth="2" />
						</svg>
					</span>
					<div>
						<div className="info-label">Email</div>
						<div className="info-value">
							<b>fixmyride2025@gmail.com</b>
						</div>
					</div>
				</div>
				<div className="info-item">
					<span className="info-icon" style={{ background: "#111" }}>
						{/* Phone SVG */}
						<svg width="28" height="28" fill="none" viewBox="0 0 28 28">
							<circle cx="14" cy="14" r="13" stroke="#fff" strokeWidth="2" />
							<path
								d="M18.5 17.5a8.5 8.5 0 0 1-8.5-8.5M18.5 10.5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1Z"
								stroke="#fff"
								strokeWidth="2"
							/>
						</svg>
					</span>
					<div>
						<div className="info-label">Phone</div>
						<div className="info-value">
							<b>0112 358 780</b>
						</div>
					</div>
				</div>
				<div className="info-item">
					<span className="info-icon" style={{ background: "#111" }}>
						{/* Clock SVG */}
						<svg width="28" height="28" fill="none" viewBox="0 0 28 28">
							<circle cx="14" cy="14" r="13" stroke="#fff" strokeWidth="2" />
							<circle cx="14" cy="14" r="6" stroke="#fff" strokeWidth="2" />
							<path
								d="M14 11v3l2 2"
								stroke="#fff"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</span>
					<div>
						<div className="info-label">Opening hours (Office)</div>
						<div className="info-value">
							<b>Sun–Mon: 9am – 7pm</b>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default CustomerSupport;