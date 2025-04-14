import React, { useState } from "react";
import "../User/Signin.css";
import logo from "../../images/PK-Games-Logo-no-bg.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // For UI error display

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error
    axios
      .post("http://localhost:50000/user/signin", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          alert("Signin Successful");
          navigate("/");
        } else {
          setErrorMessage(result.data); // Show backend error message
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin_form">
      <form onSubmit={handleSubmit} className="signin_container">
        <div className="signin_container-image">
          <img src={logo} alt="" className="signin_image" />
        </div>

        <div className="signin_wraper">
          <h1 className="signin_head">Sign In</h1>

          <div className="signin_input">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="idontknow@gmail.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {/* 🔴 Error Message UI */}
            {errorMessage && (
              <p
                className="error_message"
                style={{ color: "red", marginBottom: "0px" }}
              >
                {errorMessage}
              </p>
            )}

            <button type="submit">Sign In</button>
          </div>
          <div className="signin_create-account">
            <p className="signin_create-account-text">
              Haven’t joined our community yet ?
            </p>

            <NavLink to="/signup">
              <p className="signin_create-account-link">Create an account</p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
