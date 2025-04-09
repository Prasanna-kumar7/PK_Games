import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Subnav.css";

const Subnav = () => {
  return (
    <div className="sub_nav-container">
      <div className="sub_nav-wraper">
        <div className="sub_nav-search">
          <FontAwesomeIcon
            className="sub_nav-search-icon"
            icon={faMagnifyingGlass}
            style={{ color: "#ffffff" }}
          />
          <input type="search" className="search" placeholder="Search Store" />
        </div>
        <div className="sub_nav-links">
          <Link className="sub_nav-link">Discover</Link>
          <Link className="sub_nav-link">Browse</Link>
        </div>
      </div>
    </div>
  );
};

export default Subnav;
