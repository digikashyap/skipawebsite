import React, { useState } from 'react';

export default function HooverHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    
      
      <style>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Top Bar */
        .top-bar {
          background: #fff;
          border-bottom: 1px solid #dee2e6;
          padding: 8px 0;
        }
        .top-bar a {
          color: #495057;
          text-decoration: none;
          font-size: 14px;
        }
        .top-bar a:hover {
          color: #212529;
        }
        .stanford-link {
          color: #8B1538 !important;
          font-weight: 500;
        }
        
        /* Main Header */
        .main-header {
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
          padding: 12px 0;
        }
        
        /* Logo */
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
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
        
        /* Navigation */
        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .nav-links a {
          color: #212529;
          text-decoration: none;
          font-size: 15px;
          white-space: nowrap;
        }
        .nav-links a:hover {
          color: #000;
        }
        
        /* Right Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-icon {
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }
        .btn-icon:hover {
          background: #f8f9fa;
        }
        .myhoover-link {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #212529;
          text-decoration: none;
          font-size: 15px;
        }
        .myhoover-link:hover {
          color: #000;
        }
        .btn-support {
          background: #8B1538;
          color: #fff;
          border: none;
          padding: 10px 24px;
          border-radius: 25px;
          font-size: 15px;
          font-weight: 500;
          white-space: nowrap;
          cursor: pointer;
        }
        .btn-support:hover {
          background: #6d0f2a;
        }
        
        /* Search */
        .search-container {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }
        .search-input {
          flex: 1;
          border: 1px solid #ced4da;
          border-radius: 6px;
          padding: 10px 16px;
          font-size: 15px;
        }
        .search-input:focus {
          outline: none;
          border-color: #8B1538;
          box-shadow: 0 0 0 3px rgba(139, 21, 56, 0.1);
        }
        
        /* Mobile */
        .mobile-toggle {
          display: none;
        }
        .mobile-menu {
          display: none;
          border-top: 1px solid #dee2e6;
          padding: 16px;
          background: #fff;
        }
        .mobile-menu.show {
          display: block;
        }
        .mobile-menu a {
          display: block;
          color: #212529;
          text-decoration: none;
          padding: 12px 0;
          font-size: 15px;
        }
        .mobile-menu a:hover {
          color: #000;
        }
        .mobile-menu .btn-support {
          width: 100%;
          margin-top: 12px;
        }
        .mobile-search {
          display: none;
          padding: 0 16px 16px;
        }
        .mobile-search.show {
          display: block;
        }
        
        @media (max-width: 991px) {
          .nav-links,
          .header-actions {
            display: none;
          }
          .mobile-toggle {
            display: flex;
            gap: 8px;
          }
        }
      `}</style>

      <div>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-4">
                <a href="#">Events</a>
                <a href="#">Student Opportunities</a>
              </div>
              <a href="#" className="stanford-link">Stanford University</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="main-header">
          <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center">
              {/* Logo */}
              <a href="#" className="logo-wrapper">
                <div className="logo-icon">
                  <svg width="18" height="22" viewBox="0 0 24 32" fill="white">
                    <path d="M12 0L0 6v6c0 8 5 16 12 18 7-2 12-10 12-18V6L12 0z"/>
                  </svg>
                </div>
                <div className="logo-text">
                  <span className="logo-brand">HOOVER</span>
                  <span className="logo-subtitle">INSTITUTION</span>
                </div>
              </a>

              {/* Desktop Navigation */}
              {!isSearchOpen ? (
                <>
                  <nav className="nav-links">
                    <a href="#">About Hoover</a>
                    <a href="#">Fellows</a>
                    <a href="#">Research</a>
                    <a href="#">Commentary</a>
                    <a href="#">Library & Archives</a>
                  </nav>

                  <div className="header-actions">
                    <button className="btn-icon" onClick={() => setIsSearchOpen(true)}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                      </svg>
                    </button>
                    <a href="#" className="myhoover-link">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span>MyHoover</span>
                    </a>
                    <button className="btn-support">Support Hoover</button>
                  </div>
                </>
              ) : (
                <div className="search-container">
                  <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search..."
                    autoFocus
                  />
                  <button className="btn-icon" onClick={() => setIsSearchOpen(false)}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              )}

              {/* Mobile Toggle */}
              <div className="mobile-toggle">
                <button className="btn-icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                </button>
                <button className="btn-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 12h18M3 6h18M3 18h18"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className={`mobile-search ${isSearchOpen ? 'show' : ''}`}>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
          <a href="#">About Hoover</a>
          <a href="#">Fellows</a>
          <a href="#">Research</a>
          <a href="#">Commentary</a>
          <a href="#">Library & Archives</a>
          <a href="#" className="myhoover-link mt-3 pt-3" style={{borderTop: '1px solid #dee2e6'}}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>MyHoover</span>
          </a>
          <button className="btn-support">Support Hoover</button>
        </div>
      </div>
    </>
  );
}