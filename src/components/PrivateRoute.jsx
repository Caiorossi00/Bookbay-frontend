import React from "react";
import { Navigate } from "react-router-dom";
import AccessDenied from "../pages/AcessDenied.jsx";

function decodeJwt(token) {
  if (!token) return null;
  const base64Url = token.split(".")[1];
  if (!base64Url) return null;
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  try {
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = decodeJwt(token);

    if (!decoded || decoded.role !== "admin") {
      return <AccessDenied />;
    }

    return children;
  } catch (error) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
}
