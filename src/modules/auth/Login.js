import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../app/axios";
import { setToken, setUsername } from "../../utils/token";
import UserHeader from "../../layouts/UserHeader";
import UserFooter from "../../layouts/UserFooter";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    setError("");
    setLoading(true);

    try {
      
      const res = await api.post("/auth/login", { email, password });
      
      if (res.data.isTwoFactorRequired) {
        // OTP page pe bhejo
        navigate("/verify-otp", {
          state: {
            userId: res.data.addUserId,
            email: email
          }
        });
      } else {
        // Normal login (without OTP)
        setToken(res.data.token);
        
        setUsername(res.data.UserName);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        

        navigate(res.data.role === "Admin" ? "/admin" : "/user");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <UserHeader />

      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="card shadow-lg border-0" style={{ width: "420px" }}>
          <div className="card-body p-4">
            <h3 className="text-center fw-bold mb-1">Welcome Back</h3>
            <p className="text-center text-muted mb-4">
              Login to continue
            </p>

            {/* Error */}
            {error && (
              <div className="alert alert-danger py-2">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              onClick={login}
              disabled={loading}
              className="btn btn-primary w-100 mt-2"
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  ></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>

            {/* Footer */}
            <div className="text-center mt-4">
              <small className="text-muted">
                © 2026 Skipa Web Portal
              </small>
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
}

export default Login;
