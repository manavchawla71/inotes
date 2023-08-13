import React, { useState } from "react";
import { Navigate, useLocation } from "react-router";
import LoginPage from "../pages/LoginPage";
// import { useMainContext } from "../context/MainContext";
const RequiresAuth = ({ children }) => {
  // const { isUserLoggedIn } = useMainContext();
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);
  const location = useLocation();
  return (
    <div>
      {!isUserLoggedIn ? (
        children
      ) : (
        <Navigate
          to="/login"
          element={<LoginPage status={isUserLoggedIn} />}
          state={{ from: location }}
          replace
        />
      )}
    </div>
  );
};

export default RequiresAuth;
