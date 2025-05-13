// src/Navbar/Nav.jsx
import React, { useState } from "react";
import "../Navbar/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/PK-Games-Logo-no-bg.png";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen((o) => !o);
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="nav-container flex">
      <div className="nav-logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="PK-Games-Logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
      <div className="nav-hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} size="lg" />
      </div>

      {/* Desktop-only links/buttons */}
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
            style={{ cursor: "pointer", fontSize: "25px" }}
          />
        </NavLink>
        <NavLink to="/cart">
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ cursor: "pointer", fontSize: "25px" }}
          />
        </NavLink>
        <button
          className="btns btn1"
          onClick={() => {
            closeMenu();
            navigate("/signin");
          }}
        >
          Signin
        </button>
        <button
          className="btns btn2"
          onClick={() => {
            closeMenu();
            navigate("/launcher");
          }}
        >
          Download
        </button>
      </div>

      {/* Mobile dropdown (links + buttons together) */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <div className="nav-links flex mobile">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/community" className="nav-link" onClick={closeMenu}>
            Community
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/support" className="nav-link" onClick={closeMenu}>
            Support
          </NavLink>
        </div>
        <div className="nav-buttons flex mobile">
          <NavLink to="/wishlist" onClick={closeMenu}>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: "25px" }} />
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: "25px" }}
            />
          </NavLink>
          <button
            className="btns btn1"
            onClick={() => {
              closeMenu();
              navigate("/signin");
            }}
          >
            Signin
          </button>
          <button
            className="btns btn2"
            onClick={() => {
              closeMenu();
              navigate("/launcher");
            }}
          >
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
