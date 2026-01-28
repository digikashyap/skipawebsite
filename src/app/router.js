import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import MainAdminLayout from "../layouts/MainAdminPanel";
import UserDashboard from "../pages/UserDashboard";
import NotFound from "../pages/NotFound";
import VerifyOtp from "../pages/VerifyOtp";

import PrivateRoute from "../routes/PrivateRoute";
import RoleRoute from "../routes/RoleRoute";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
       <Route
          path="/admin"
          element={
            <PrivateRoute>
              <RoleRoute role="Admin">
                <MainAdminLayout />
              </RoleRoute>
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          {/* <Route path="users" element={<Users />} /> */}
    </Route>
    
    

        <Route
          path="/user"
          element={
            <PrivateRoute>
              <RoleRoute role="User">
                <UserDashboard />
              </RoleRoute>
            </PrivateRoute>
          }
        />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
