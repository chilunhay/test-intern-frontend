import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();
  //getting email password
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "chi@gmail.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "chi123456";

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login successful");
      navigate("/profile");
    } else {
      toast.error("Invalid Email OR password");
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="login-title">Login</p>
          <label className="login-form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            value={email}
            placeholder="example@kyanon.digital"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-form-label" htmlFor="password">
            Password:
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            value={password}
            placeholder="******"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="login-function">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="show-pass"
                name="show-pass"
                value="show"
                onClick={() => setPasswordShown(!passwordShown)}
              />
              <label htmlFor="show-pass" className="checkbox-label">
                Show password
              </label>
            </div>
            <button className="login-btn" type="submit" onClick={handleSubmit}>
              Sign in
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
