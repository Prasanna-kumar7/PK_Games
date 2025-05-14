import React from "react";
import "./Featured.css";
import sales from "../../../images/sales-specials.png";
import freeGames from "../../../images/free-games.png";
import apps from "../../../images/apps.png";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <div className="featured">
      <div className="featured_container">
        <div className="featured_head">
          <h1>Featured</h1>
        </div>
        <div className="featured_wraper">
          <div className="featured_card">
            <img
              src={sales}
              alt="Sales & Specials"
              className="featured_image"
            />
            <div className="featured_content">
              <p className="featured_title">Sales & Specials</p>
              <button
                onClick={() => {
                  navigate("/error");
                }}
              >
                Browse
              </button>
            </div>
          </div>
          <div className="featured_card">
            <img src={freeGames} alt="Free Games" className="featured_image" />
            <div className="featured_content">
              <p className="featured_title">Free Games</p>
              <button
                onClick={() => {
                  navigate("/error");
                }}
              >
                Play Now
              </button>
            </div>
          </div>
          <div className="featured_card">
            <img src={apps} alt="Apps" className="featured_image" />
            <div className="featured_content">
              <p className="featured_title">Apps</p>
              <button
                onClick={() => {
                  navigate("/error");
                }}
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
