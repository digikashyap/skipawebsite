// Token
export const getToken = () => localStorage.getItem("token");
export const setToken = (token) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");

// Username
export const setUsername = (username) =>
  localStorage.setItem("username", username);

export const getUsername = () =>
  localStorage.getItem("username");

export const removeUsername = () =>
  localStorage.removeItem("username");

// (Optional but BEST) – sab kuch ek sath clear
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
};
