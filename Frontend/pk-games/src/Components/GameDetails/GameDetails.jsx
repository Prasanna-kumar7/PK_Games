import React from "react";
import "./GameDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const GameDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="game_details-container">
      <div className="game_details-container-wraper">
        <div className="game_details-info">
          <h1>Assassins Creed Shadows</h1>
          <div className="game_details-info-rate">
            <div className="game_details-info-stars">
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              />
              <p>4.9 (100,000)</p>
            </div>
            <div className="game_details-info-heart">
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="game_details-info-img-preview">
            <img
              src="https://i.ibb.co/F4KD7mfc/Assassins-creed-shadows-big3.png"
              alt="Assassins Creed Shadows"
            />
          </div>
          <p className="game_details-info-description">
            Embark on a dual-character journey through feudal Japan, alternating
            between a nimble shinobi and a powerful samurai. Master shadow
            warfare and honorable combat while navigating political intrigue in
            this visually stunning open-world epic featuring dynamic seasons and
            revolutionary stealth mechanics.
          </p>
          <div className="game_details-info-genres-container">
            <div className="game_details-info-genres">
              <p>Genres</p>
              <div className="game_details-info-genres-wraper">
                <p>Action-Adventure</p>
                <p>RPG</p>
              </div>
            </div>
          </div>
          <div className="game_details-info-system-req-container">
            <h2>System Requirements</h2>
            <div className="game_details-info-system-req">
              <div className="game_details-info-system-req-min">
                <h3>Minimum</h3>
                <p className="game_details-info-sub">OS</p>
                <p className="game_details-info-text">64 bit Windows 10/11</p>
                <p className="game_details-info-sub">Processor</p>
                <p className="game_details-info-text">
                  Intel Core i5-6600K or AMD Ryzen 5 2600X
                </p>
                <p className="game_details-info-sub">Memory</p>
                <p className="game_details-info-text">16GB</p>
                <p className="game_details-info-sub">Storage</p>
                <p className="game_details-info-text">85GB</p>
                <p className="game_details-info-sub">Direct X</p>
                <p className="game_details-info-text">12</p>
                <p className="game_details-info-sub">Graphics</p>
                <p className="game_details-info-text">
                  NVIDIA GeForce GTX 970 - 4GB or AMD Radeon RX 470 - 4GB
                </p>
                <p className="game_details-info-sub">Other</p>
                <p className="game_details-info-text">
                  Resolution: 1920x1080 (1080p) Native FPS: 30 Graphics Settings
                  Preset: Low
                </p>
              </div>
              <div className="game_details-info-system-req-rec">
                <h3>Recommended</h3>
                <p className="game_details-info-sub">OS</p>
                <p className="game_details-info-text">64 bit Windows 10/11</p>
                <p className="game_details-info-sub">Processor</p>
                <p className="game_details-info-text">
                  Intel Core i7-11700k or AMD Ryzen 7 5800X
                </p>
                <p className="game_details-info-sub">Memory</p>
                <p className="game_details-info-text">16GB</p>
                <p className="game_details-info-sub">Storage</p>
                <p className="game_details-info-text">85GB</p>
                <p className="game_details-info-sub">Direct X</p>
                <p className="game_details-info-text">12</p>
                <p className="game_details-info-sub">Graphics</p>
                <p className="game_details-info-text">
                  NVIDIA GeForce RTX 3070 - 8GB or AMD Radeon 6700 XT - 12GB
                </p>
                <p className="game_details-info-sub">Other</p>
                <p className="game_details-info-text">
                  Resolution: 2560x1440 (2K) Native FPS: 60 Graphics Settings
                  Preset: High
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="game_details-card">
          <div className="game_details-wraper">
            <div className="game_details-price">
              <img
                src="https://i.ibb.co/F4KD7mfc/Assassins-creed-shadows-big3.png"
                alt="Assassins Creed Shadows"
              />
              <p>₹4899</p>
            </div>
            <div className="game_details-grid">
              <p>Developer</p>
              <p>PK Gamers</p>
              <p>Publisher</p>
              <p>PK Gamers</p>
              <p>Release Date</p>
              <p>12/5/2025</p>
              <p>Platform</p>
              <p>Windows</p>
            </div>
            <button
              className="game_details-buynow"
              onClick={() => {
                navigate("/error");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
