import React from "react";
import "./App.css";
import assassinsCreedImage from "./images/assassins-creed-shadows.png";
import games from "./Game-data";
import ImageCarousel from "./Home/Discover/Carousel";

const App = () => {
  return (
    <div>
      <ImageCarousel />
      <img src={assassinsCreedImage} alt="djdj" />
    </div>
  );
};

export default App;
