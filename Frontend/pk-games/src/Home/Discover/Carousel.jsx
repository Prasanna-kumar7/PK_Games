import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/Assassins-creed-shadows-big1";
import "./Carousel.css";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="img" src={img1} alt="33 Immortals" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="img" src={img1} alt="33 Immortals" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={img1} alt="33 Immortals" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
