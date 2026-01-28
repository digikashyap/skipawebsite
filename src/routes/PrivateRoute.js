import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/token";

function PrivateRoute({ children }) {
  return getToken() ? children : <Navigate to="/" />;
}

export default PrivateRoute;