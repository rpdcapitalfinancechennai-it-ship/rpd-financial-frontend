// src/api.js
export const API =
  process.env.NODE_ENV === "production"
    ? "https://rpd-financial-backend.onrender.com"
    : "http://localhost:3001";
