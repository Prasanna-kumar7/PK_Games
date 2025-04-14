import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
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
          {/* in end "NavLink" turns to "a" tag */}
          <NavLink to="" end className="sub_nav-link">
            Discover
          </NavLink>
          <NavLink to="browse" className="sub_nav-link">
            Browse
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Subnav;
