import React, { useState } from "react";
import { Navigate, useLocation } from "react-router";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../context/AuthContext";
const RequiresAuth = ({ children }) => {
  const { isUserLoggedIn } = useAuth();
  const location = useLocation();
  return (
    <div>
      {isUserLoggedIn ? (
        children
      ) : (
        <Navigate
          to="/login"
          element={<LoginPage />}
          state={{ from: location }}
          replace
        />
      )}
    </div>
  );
};

export default RequiresAuth;
