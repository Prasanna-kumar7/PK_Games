// Discover.jsx
import React from "react";
import ImageCarousel from "./Carousel/Carousel";
import TopGames from "./TopGames/TopGames";
import Deals from "./DealsOfTheDay/Deals";
import FreeGames from "./FreeGames/FreeGames";
import Featured from "./Featured/Featured";

const Discover = ({ wishlist, setWishlist }) => {
  return (
    <div>
      <ImageCarousel />
      <TopGames wishlist={wishlist} setWishlist={setWishlist} />{" "}
      {/* Pass down here */}
      <Deals />
      <FreeGames />
      <Featured />
    </div>
  );
};

export default Discover;
