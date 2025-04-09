import React from "react";
import "../FreeGames/FreeGames.css";

const FreeGames = () => {
  return (
    <div className="free_games">
      <div className="free_games-container">
        <div className="free_games-head">
          <h1>Free Games</h1>
        </div>
        <div className="free_games-wraper">
          <div className="free_games-1">
            <img
              src="https://i.ibb.co/F4KD7mfc/Assassins-creed-shadows-big3.png"
              alt=""
              className="free_games-image"
            />

            <div className="free_games-content">
              <p className="free_games-title">Assassins Creed Shadow's</p>
              <div className="free_games-price">
                <span>Free Now</span>
              </div>
            </div>
          </div>
          <div className="free_games-2">
            <img
              src="https://i.ibb.co/Ng5gcSQt/GTA5-big1.jpg"
              alt=""
              className="free_games-image"
            />

            <div className="free_games-content">
              <p className="free_games-title">Grand Theft Auto V</p>
              <div className="free_games-price">
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGames;
