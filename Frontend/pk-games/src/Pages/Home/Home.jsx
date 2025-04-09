import React from "react";
import Nav from "../../Components/Navbar/Nav.jsx";
import ImageCarousel from "../../Components/Discover/Carousel/Carousel.jsx";
import "../Home/Home.css";
import Subnav from "../../Components/Navbar/Subnav.jsx";
import TopGames from "../../Components/Discover/TopGames/TopGames.jsx";
import Deals from "../../Components/Discover/DealsOfTheDay/Deals.jsx";
import FreeGames from "../../Components/Discover/FreeGames/FreeGames.jsx";
import Featured from "../../Components/Discover/Featured/Featured.jsx";

const Home = () => {
  return (
    <div className="home">
      <div className="carousel">
        <Subnav />
        <ImageCarousel />
        <TopGames />
        <Deals />
        <FreeGames />
        <Featured />
      </div>
    </div>
  );
};

export default Home;
