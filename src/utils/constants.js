// src/utils/constants.js

export const APP_NAME = "Skipa Web Portal";

// API Base URL
export const API_BASE_URL = "https://localhost:5001/api";

// Roles
export const ROLES = {
  ADMIN: "Admin",
  USER: "User",
  SUPER_ADMIN: "SuperAdmin"
};

// Routes
export const ROUTES = {
  LOGIN: "/",
  ADMIN_DASHBOARD: "/admin",
  USER_DASHBOARD: "/user",
  NOT_FOUND: "*"
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  TOKEN: "token",
  ROLE: "role",
  USER: "user"
};

// Common Messages
export const MESSAGES = {
  LOGIN_SUCCESS: "Login successful",
  LOGIN_FAILED: "Invalid username or password",
  UNAUTHORIZED: "You are not authorized",
  SESSION_EXPIRED: "Session expired. Please login again."
};
