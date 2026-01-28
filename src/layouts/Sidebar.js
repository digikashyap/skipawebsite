import "../assets/styles/Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-light1 border-end vh-100 position-fixed position-lg-static ${
        isOpen ? "" : "d-none d-lg-block"
      }`}
      style={{ width: "250px", zIndex: 1000 }}
    >
      <nav className="py-4">
        <ul className="nav flex-column">

          <li className="nav-item">
            <a className="nav-link active text-dark px-4 py-3" href="#">
              📊 Dashboard
            </a>
          </li>

          {/* ===== Masterkey Menu ===== */}
          <li className="nav-item">
            <a
              className="nav-link text-dark px-4 py-3 d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#masterkeyMenu"
              role="button"
              aria-expanded="false"
            >
              🔑 Masterkey
              <span>▾</span>
            </a>

            <div className="collapse ps-3" id="masterkeyMenu">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-child-dark py-2" href="#">
                    ➤ Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-child-dark py-2" href="#">
                    ➤ Sub Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-child-dark py-2" href="#">
                    ➤ Units
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-child-dark py-2" href="#">
                    ➤ Brands
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* ===== Masterkey End ===== */}

          <li className="nav-item">
            <a className="nav-link text-dark px-4 py-3" href="#">
              👥 Users
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark px-4 py-3" href="#">
              📦 Products
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark px-4 py-3" href="#">
              📈 Analytics
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark px-4 py-3" href="#">
              ⚙️ Settings
            </a>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
