import "../assets/styles/Header.css";

import { getUsername } from "../utils/token";
// Header Component
const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-violet text-white py-3 px-4 d-flex justify-content-between align-items-center shadow">
      
      <div className="d-flex align-items-center">
        <button 
          className="btn btn-outline-light me-3 d-lg-none"
          onClick={toggleSidebar}
        >
          <i className="bi bi-list"></i> ☰
        </button>
        
        <div class="header-logo p-2">
          <img
            src={require("../assets/images/LOGO.png")}
            alt="Logo"
            style={{ height: "40px" }} // height adjust kar sakte ho
          />
        </div>
        <h4 className="mb-0"> &nbsp; SKIPA</h4>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="position-relative">
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">3</span>
          <button className="btn btn-outline-light">🔔</button>
        </div>
        <div className="dropdown">
          <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
            👤{getUsername()}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;