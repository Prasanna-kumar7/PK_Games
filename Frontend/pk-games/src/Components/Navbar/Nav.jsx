import React from "react";
import "../Navbar/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/PK-Games-Logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-container flex">
      <div className="nav-logo">
        <a href="#">
          <img src={logo} alt="PK-Games-Logo" />
        </a>
      </div>
      <div className="nav-links flex">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/community" className="nav-link">
          Community
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/support" className="nav-link">
          Support
        </NavLink>
      </div>
      <div className="nav-buttons flex">
        <NavLink to="/wishlist">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ffffff", fontSize: "25px", cursor: "pointer" }}
          />
        </NavLink>
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#ffffff", fontSize: "25px", cursor: "pointer" }}
        />
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="btns btn1"
        >
          Signin
        </button>
        <button
          onClick={() => {
            navigate("/launcher");
          }}
          className="btns btn2"
        >
          Download
        </button>
      </div>
    </nav>
  );
};

export default Nav;
