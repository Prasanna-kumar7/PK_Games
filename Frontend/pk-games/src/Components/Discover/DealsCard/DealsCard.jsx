import React from "react";
import "../DealsCard/DealsCard.css";

const DealsCard = () => {
  return (
    <>
      <div className="deals_card-container">
        <img
          src="https://i.ibb.co/5XMHPKrz/Spider-Man-2-Big3.jpg"
          alt=""
          className="deals_card-image"
        />

        <div className="deals_card-content">
          <p className="deals_card-title">Spider Man 2</p>
          <div className="price">
            <span>
              <del>₹2500</del> ₹2000
            </span>
          </div>
        </div>
      </div>
      <div className="deals_card-container">
        <img
          src="https://i.ibb.co/HTT4tBsc/split-fiction-big2.jpg"
          alt=""
          className="deals_card-image"
        />

        <div className="deals_card-content">
          <p className="deals_card-title">Split Fiction</p>
          <div className="price">
            <span>
              <del>₹2300</del> ₹1800
            </span>
          </div>
        </div>
      </div>
      <div className="deals_card-container">
        <img
          src="https://i.ibb.co/W4d9ftX7/GTA5-big2.jpg"
          alt=""
          className="deals_card-image"
        />

        <div className="deals_card-content">
          <p className="deals_card-title">GTA 5</p>
          <div className="price">
            <span>
              <del>₹2500</del> ₹1600
            </span>
          </div>
        </div>
      </div>
      <div className="deals_card-container">
        <img
          src="https://i.ibb.co/k2hsFd5W/farming-simulator-25-Big1.jpg"
          alt=""
          className="deals_card-image"
        />

        <div className="deals_card-content">
          <p className="deals_card-title">Farming Simulator 25</p>
          <div className="price">
            <span>
              <del>₹2000</del> ₹1500
            </span>
          </div>
        </div>
      </div>
      <div className="deals_card-container">
        <img
          src="https://i.ibb.co/hx5YCb1S/Assassins-creed-shadows-big2.png"
          alt=""
          className="deals_card-image"
        />

        <div className="deals_card-content">
          <p className="deals_card-title">Assassins Creed Shadows</p>
          <div className="price">
            <span>
              <del>₹2500</del> ₹2300
            </span>
          </div>
        </div>
      </div>
      <div className="deals_card-container">
        <img
          src="https://i.ibb.co/67gKKqnR/Spider-Man-2-Big1.jpg"
          alt=""
          className="deals_card-image"
        />

        <div className="deals_card-content">
          <p className="deals_card-title">Spider Man 2</p>
          <div className="price">
            <span>
              <del>₹2500</del> ₹2000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsCard;
