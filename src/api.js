// src/api.js
export const API =
  process.env.NODE_ENV === "production"
    ? "https://rpd-financial-backend.onrender.com/api"
    : "http://localhost:3001";
