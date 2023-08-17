import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLoginService } = useAuth();
  const { isUserLoggedIn, setisUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const guestLoginHandler = () => {
    setEmail("chawlamanav@gmail.com");
    setPassword("amn@M12345");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisUserLoggedIn(true);
    if (email === "chawlamanav@gmail.com" && password === "amn@M12345") {
      userLoginService();
    } else {
      toast("enter correct details");
    }
  };

  return (
    <>
      <div className="auth-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="margin-top-bottom-zero center-text">LOG IN</h2>
          <div className="form-inputs">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="form-input-ecom"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-input-ecom"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
          </div>
          <button type="submit" className="login-form-btn">
            Login
          </button>
          {/* <span className="register-text">
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              REGISTER
            </Link>
          </span> */}
        </form>
        <span className="login-guest" onClick={guestLoginHandler}>
          Test User Login
        </span>
      </div>
    </>
  );
};

export default LoginPage;
