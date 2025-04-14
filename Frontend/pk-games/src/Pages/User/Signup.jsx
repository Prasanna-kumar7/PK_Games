import React, { useState } from "react";
import "../User/Signup.css";
import logo from "../../images/PK-Games-Logo-no-bg.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [country, setCountry] = useState();
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError(""); // clear error if match

    axios
      .post("http://localhost:50000/user/signup", {
        name,
        username,
        email,
        password,
        country,
      })
      .then((result) => {
        console.log(result);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup_form">
      <form onSubmit={handleSubmit} className="signup_container">
        <div className="signup_container-image">
          <img src={logo} alt="" className="signin_image" />
        </div>

        <div className="signup_wraper">
          <h1 className="signup_head">Sign Up</h1>

          <div className="signup_input">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

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

            <div className="password_wraper">
              <div className="password">
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
              </div>

              <div className="confirm_password">
                <label for="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => {
                    setConfirmpassword(e.target.value);
                  }}
                />
                {passwordError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "0px",
                    }}
                  >
                    {passwordError}
                  </p>
                )}
              </div>
            </div>

            <label for="password">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="country"
              required
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />

            <button type="submit">Sign Up</button>
          </div>

          <div className="signin_account">
            <p className="signin_text">Already Have an Account ?</p>

            <NavLink to="/signin">
              <p className="signin_link">Login</p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
