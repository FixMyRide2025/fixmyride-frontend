import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Mechanic.css";

const API_URL = "/api/auth/mechanic/login/"; // via Vite proxy. Otherwise use full URL.

const MechanicLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mechanicType, setMechanicType] = useState("individual"); // just to route UI, API doesn't need it
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    const body = {
      email,
      password,
    };

    try {
      setSubmitting(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const raw = await res.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        data = raw;
      }

      if (!res.ok) {
        // Show backend error nicely
        throw new Error(
          typeof data === "string" ? data : JSON.stringify(data, null, 2)
        );
      }

      // Save whatever backend returns (tokens/user/etc.)
      localStorage.setItem("mechanic_auth", JSON.stringify(data));

      // Redirect based on chosen mechanic type (purely frontend choice)
      if (mechanicType === "individual") {
        navigate("/individual-dashboard");
      } else {
        navigate("/company-dashboard");
      }
    } catch (e2) {
      console.error("Login error:", e2);
      setErr(e2.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mechanic-login-container">
      <div className="mechanic-back-row">
        <Link to="/" className="mechanic-back-link">
          <span className="mechanic-back-icon">&#8592;</span> Go back
        </Link>
      </div>

      <form className="mechanic-login-form" onSubmit={onSubmit}>
        <h2 className="mechanic-login-title">Mechanic Log In</h2>

        {err && (
          <pre
            style={{
              color: "red",
              whiteSpace: "pre-wrap",
              fontSize: 13,
              marginBottom: 12,
            }}
          >
            {err}
          </pre>
        )}

        <div className="mechanic-login-field">
          <label htmlFor="email">Email</label>
          <div className="mechanic-input-icon-group">
          <span>
              <img src="/src/assets/email.svg" alt="Email" />
            </span>
            <span className="mechanic-input-divider"></span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="username"
              required
            />
          </div>
        </div>

        <div className="mechanic-login-field">
          <label htmlFor="password">Password</label>
          <div className="mechanic-input-icon-group">
            <span>
              <img src="/src/assets/password.svg" alt="Password" />
            </span>
            <span className="mechanic-input-divider"></span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              autoComplete="current-password"
              required
            />
          </div>
        </div>

        <div className="mechanic-login-actions">
          <Link to="/mechanic-forgetpwd" className="mechanic-forgot-link">
            Forget password?
          </Link>
        </div>

        {/* mechanicType is optional and only used by you to redirect */}
        <div
          className="mechanic-type-row"
          style={{
            display: "flex",
            gap: "48px",
            margin: "18px 0 24px 0",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 500,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="mechanicType"
              checked={mechanicType === "individual"}
              onChange={() => setMechanicType("individual")}
              style={{ accentColor: "#3279F5", width: "20px", height: "20px", margin: 0 }}
            />
            Individual
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 500,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="mechanicType"
              checked={mechanicType === "company"}
              onChange={() => setMechanicType("company")}
              style={{ accentColor: "#3279F5", width: "20px", height: "20px", margin: 0 }}
            />
            Company
          </label>
        </div>

        <button type="submit" className="mechanic-login-btn" disabled={submitting}>
          {submitting ? "Logging in..." : "Log In"}
        </button>

        <div className="mechanic-login-signup">
          Don’t have an account?{" "}
          <Link to="/mechanic-register" className="mechanic-signup-link">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MechanicLogin;
