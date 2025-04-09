import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../images/Assassins-creed-shadows-big1.png";
import img2 from "../../../images/Spider-Man-2-Big2.jpg";
import img3 from "../../../images/split-fiction-big3.jpg";
import "./Carousel.css";

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel className="img">
        <Carousel.Item interval={3000}>
          <img className="img" src={img1} alt="Assassins-creed-shadows" />
          <Carousel.Caption>
            <h1 className="h1-text">Assassins Creed Shadows</h1>
            <button className="button">
              <a href="#">Open</a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="img" src={img2} alt="Spider-Man-2" />
          <Carousel.Caption>
            <h1 className="h1-text">Spider Man 2</h1>
            <button className="button">
              <a href="#">Open</a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={img3} alt="split-fiction" />
          <Carousel.Caption>
            <h1 className="h1-text">Split Fiction</h1>
            <button className="button">
              <a href="#">Open</a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
