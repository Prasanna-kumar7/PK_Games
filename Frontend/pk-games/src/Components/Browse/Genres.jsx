import React from "react";
import "../Browse/Genres.css";
import adventure from "../../images/adventure.jpg";
import racing from "../../images/racing.png";
import actionrpg from "../../images/action-rpg.png";
import roguelite from "../../images/roguelite.png";

const Genres = () => {
  return (
    <>
      <div className="genres">
        <h1 className="genres_head">Popular Genres</h1>
        <div className="genres_wraper">
          <div className="genres_card">
            <a href="">
              <img
                src="https://i.ibb.co/67gKKqnR/Spider-Man-2-Big1.jpg"
                alt="Action-Adventure"
                className="genres_image"
              />
              <p className="genres_title">Action-Adventure</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img
                src="https://i.ibb.co/hx5YCb1S/Assassins-creed-shadows-big2.png"
                alt="RPG"
                className="genres_image"
              />
              <p className="genres_title">RPG</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img src={roguelite} alt="Rogue-Lite" className="genres_image" />
              <p className="genres_title">Rogue-Lite</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img src={adventure} alt="Adventure" className="genres_image" />
              <p className="genres_title">Adventure</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img src={racing} alt="Racing" className="genres_image" />
              <p className="genres_title">Racing</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img src={actionrpg} alt="Action-RPG" className="genres_image" />
              <p className="genres_title">Action-RPG</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img
                src="https://i.ibb.co/HTT4tBsc/split-fiction-big2.jpg"
                alt="Puzzle"
                className="genres_image"
              />
              <p className="genres_title">Puzzle</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img
                src="https://i.ibb.co/W4d9ftX7/GTA5-big2.jpg"
                alt="Action"
                className="genres_image"
              />
              <p className="genres_title">Action</p>
            </a>
          </div>
          <div className="genres_card">
            <a href="">
              <img
                src="https://i.ibb.co/FkZ8XSgN/farming-simulator-25-Big3.png"
                alt="Simulation"
                className="genres_image"
              />
              <p className="genres_title">Simulation</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genres;
