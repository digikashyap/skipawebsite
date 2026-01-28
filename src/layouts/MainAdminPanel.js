import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";

export default function MainAdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header toggleSidebar={toggleSidebar} />

      <div className="d-flex flex-grow-1">
        <Sidebar isOpen={sidebarOpen} />

        <main
          className="flex-grow-1 p-4"
          style={{
            marginLeft: sidebarOpen ? "250px" : "0",
            transition: "margin-left 0.3s ease"
          }}
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
