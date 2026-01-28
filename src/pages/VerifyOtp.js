import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../app/axios"; // axios instance
import { setUsername } from "../utils/token";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  // login page se aaya data
  const userId = state?.userId;
  const email = state?.email;

  if (!userId) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="card shadow-lg border-0 p-4 text-center">
          <h3 className="text-danger mb-2">Invalid Request ❌</h3>
          <p className="text-muted mb-0">
            The link is invalid or expired. Please try again.
          </p>
        </div>
      </div>
    );
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/verify-otp", {
        userId,
        otp,
      });
      if (res.data.status) {
        const { token, role, userName } = res.data;
        console.log(res.data);

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
       
        setUsername(userName); // 🔥 IMPORTANT LINE

        navigate(role === "Admin" ? "/admin" : "/user");
      } else {
        setError("Invalid OTP");
      }
    } catch (err) {
      setError("OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg border-0" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-4">

          <h3 className="text-center mb-2">Verify OTP</h3>
          <p className="text-center text-muted mb-4">
            OTP sent to <strong>{email}</strong>
          </p>

          <form onSubmit={handleVerifyOtp}>
            <div className="mb-3">
              <label className="form-label">Enter OTP</label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Verifying...
                </>
              ) : (
                "Verify OTP"
              )}
            </button>
          </form>

          {error && (
            <div className="alert alert-danger text-center mt-3 p-2">
              {error}
            </div>
          )}

        </div>
      </div>
    </div>

  );
};

export default VerifyOtp;
