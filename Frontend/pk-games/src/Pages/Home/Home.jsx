import React from "react";
import "../Home/Home.css";
import Subnav from "../../Components/Navbar/Subnav.jsx";
import Discover from "../../Components/Discover/Discover.jsx";
import Genres from "../../Components/Browse/Genres.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Subnav />
      <Outlet /> {/* This will render the nested routes */}
      {/* <Discover /> */}
      {/* <Genres /> */}
    </div>
  );
};

export default Home;
