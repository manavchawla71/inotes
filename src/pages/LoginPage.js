import React, { useState } from "react";
import "./Auth.css";
import { LoginCall } from "../ApiCalls/LoginCall";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const guestLoginHandler = async (email, password) => {
    const { data, status } = await LoginCall(email, password);
    if (status === 200 || status === 201) {
      setIsUserLoggedIn(true);
      setUserInfo({ ...data.foundUser });
      localStorage.setItem("userLoginToken", data.encodedToken);
      navigate(location?.state?.from?.pathname || "/note-taking-page");
    }
  };
  return (
    <>
      {!isUserLoggedIn && (
        <div className="auth-page">
          <form className="login-form">
            <h2 className="margin-top-bottom-zero center-text">LOG IN</h2>
            <div className="form-inputs">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="form-input-ecom"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input-ecom"
                required
              />
            </div>
            <button type="submit" className="login-form-btn">
              Login
            </button>
            <span className="register-text">
              Don't have an account?{" "}
              <Link to="/signup" className="link">
                REGISTER
              </Link>
            </span>
          </form>
          <span
            className="login-guest"
            onClick={() =>
              guestLoginHandler("chawlamanav71@gmail.com", "manav123")
            }
          >
            Log in as a guest.
          </span>
        </div>
      )}
    </>
  );
};

export default LoginPage;
