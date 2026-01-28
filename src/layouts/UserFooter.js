import React, { useState } from 'react';

export default function UserFooter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for subscribing!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      
      <style>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .footer-main {
          background: #ffffff;
          padding: 60px 0 40px;
        }
        
        /* Logo Section */
        .footer-logo {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 24px;
        }
        .logo-icon {
          width: 32px;
          height: 42px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .logo-brand {
          font-size: 22px;
          font-weight: 700;
          color: #000;
          letter-spacing: -0.5px;
        }
        .logo-subtitle {
          font-size: 10px;
          color: #000;
          letter-spacing: 2.5px;
          margin-top: 2px;
        }
        .stanford-wrapper {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .divider {
          width: 2px;
          height: 32px;
          background: #8B1538;
          margin: 0 8px;
        }
        .stanford-text {
          color: #8B1538;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.3;
        }
        
        /* Description */
        .footer-description {
          color: #495057;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 380px;
        }
        
        /* Social Icons */
        .social-icons {
          display: flex;
          gap: 16px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .social-icon:hover {
          opacity: 0.7;
        }
        
        /* Section Headings */
        .footer-heading {
          color: #6c757d;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        
        /* Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-links a {
          color: #212529;
          text-decoration: none;
          font-size: 15px;
        }
        .footer-links a:hover {
          color: #000;
        }
        
        /* Form */
        .subscribe-heading {
          color: #212529;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .form-label {
          color: #212529;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          display: block;
        }
        .form-input {
          width: 100%;
          border: 1px solid #ced4da;
          border-radius: 4px;
          padding: 10px 12px;
          font-size: 15px;
          margin-bottom: 20px;
        }
        .form-input:focus {
          outline: none;
          border-color: #8B1538;
          box-shadow: 0 0 0 3px rgba(139, 21, 56, 0.1);
        }
        .consent-text {
          color: #495057;
          font-size: 13px;
          line-height: 1.5;
          margin-top: 20px;
        }
        .consent-text a {
          color: #8B1538;
          text-decoration: none;
        }
        .consent-text a:hover {
          text-decoration: underline;
        }
        .recaptcha-box {
          background: #4285f4;
          color: white;
          padding: 16px 20px;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          font-size: 13px;
        }
        .recaptcha-logo {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .recaptcha-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .recaptcha-links {
          font-size: 11px;
          opacity: 0.9;
        }
        .recaptcha-links a {
          color: white;
          text-decoration: none;
        }
        .recaptcha-links a:hover {
          text-decoration: underline;
        }
      `}</style>

      <footer className="footer-main m-2">
        <div className="container-fluid px-4">
          <div className="row">
            {/* Column 1 - Logo & Description */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-logo">
                <div className="logo-icon">
                  <svg width="18" height="22" viewBox="0 0 24 32" fill="white">
                    <path d="M12 0L0 6v6c0 8 5 16 12 18 7-2 12-10 12-18V6L12 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="logo-text">
                    <span className="logo-brand">HOOVER</span>
                    <span className="logo-subtitle">INSTITUTION</span>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="stanford-text">
                  Stanford<br/>University
                </div>
              </div>
              
              <p className="footer-description">
                With its eminent scholars and world-renowned library and archives, 
                the Hoover Institution seeks to improve the human condition by 
                advancing ideas that promote economic opportunity and prosperity 
                while securing and safeguarding peace for America and all mankind.
              </p>
              
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Key Site Sections */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="footer-heading">KEY SITE SECTIONS</h3>
              <ul className="footer-links">
                <li><a href="#">About Hoover</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Commentary</a></li>
                <li><a href="#">Fellows</a></li>
                <li><a href="#">Library & Archives</a></li>
                <li><a href="#">Support Hoover</a></li>
                <li><a href="#">Search</a></li>
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="footer-heading">QUICK LINKS</h3>
              <ul className="footer-links">
                <li><a href="#">Student Opportunities</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Hoover Daily Report</a></li>
                <li><a href="#">Hoover Press</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>

            {/* Column 4 - Newsletter Signup */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="footer-heading">HOOVER DAILY REPORT</h3>
              <h4 className="subscribe-heading">Subscribe for insights on the most pressing policy issues impacting you.</h4>
              
              <div>
                <div className="mb-3">
                  <label className="form-label">First name*</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Last name*</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Email*</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <p className="consent-text">
                  By submitting this form, you consent to receive communications from the Hoover Institution. 
                  You can unsubscribe at any time. Learn more in our <a href="#">Privacy Policy</a>.
                </p>
                
                <div className="recaptcha-box">
                  <div className="recaptcha-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285f4">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="recaptcha-text">
                    <div>protected by reCAPTCHA</div>
                    <div className="recaptcha-links">
                      <a href="#">Privacy</a> - <a href="#">Terms</a>
                    </div>
                  </div>
                </div>
                <div className="submit-button">
                    <button
                        type="submit"
                        className="btn btn-danger m-4 rounded-pill px-4 py-2 fw-semibold"
                    >
                        Submit
                    </button>
                </div>

              </div>
            </div>
            <hr></hr>
            <div className="last-content py-4 text-center">
                <p className="mb-1">
                    The opinions expressed on this website are those of the authors and do not necessarily reflect the opinions of the Hoover Institution or Stanford University.
                </p>
                <p className="mb-0">
                    © 2026 by the Board of Trustees of Leland Stanford Junior University.
                </p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}