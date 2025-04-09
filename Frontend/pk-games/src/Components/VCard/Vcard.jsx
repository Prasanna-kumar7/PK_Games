import React from "react";
import "../VCard/VCard.css";

const Vcard = ({ game }) => {
  return (
    <div className="v_card-container">
      <img src={game.imageURL} alt={game.gameName} className="game-image" />

      <div className="v_card-content">
        <p className="title">{game.gameName}</p>
        <div className="price">
          <span>₹{game.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Vcard;
