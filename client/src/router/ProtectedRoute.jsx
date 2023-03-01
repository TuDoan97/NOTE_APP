import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  // const navigate = useNavigate();
  if (!localStorage.getItem("accessToken")) {
    // navigate("/login");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
