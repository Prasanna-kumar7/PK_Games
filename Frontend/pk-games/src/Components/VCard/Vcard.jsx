import React from "react";
import "../VCard/VCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // react-icons library

const Vcard = ({ game, isWishlisted, toggleWishlist }) => {
  return (
    <div className="v_card-container">
      <div className="wishlist-icon" onClick={() => toggleWishlist(game)}>
        {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
      </div>
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
