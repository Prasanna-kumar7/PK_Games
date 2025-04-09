import React from "react";
import "../Navbar/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/PK-Games-Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container flex">
      <div className="nav-logo">
        <a href="#">
          <img src={logo} alt="PK-Games-Logo" />
        </a>
      </div>
      <div className="nav-links flex">
        <Link className="nav-link">Store</Link>
        <Link className="nav-link">Community</Link>
        <Link className="nav-link">About</Link>
        <Link className="nav-link">Support</Link>
      </div>
      <div className="nav-buttons flex">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "#ffffff", fontSize: "25px", cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#ffffff", fontSize: "25px", cursor: "pointer" }}
        />
        <button className="btns btn1">Signin</button>
        <button className="btns btn2">Download</button>
      </div>
    </nav>
  );
};

export default Nav;
