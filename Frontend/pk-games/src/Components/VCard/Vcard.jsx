import React from "react";
import "../VCard/VCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // react-icons library
import { useNavigate } from "react-router-dom";

const Vcard = ({ game, isWishlisted, toggleWishlist }) => {
  const navigate = useNavigate();
  return (
    <div className="v_card-container">
      <div className="wishlist-icon" onClick={() => toggleWishlist(game)}>
        {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
      </div>
      <img
        src={game.imageURL}
        alt={game.gameName}
        className="game-image"
        onClick={() => {
          navigate("/gamedetails");
        }}
      />
      <div
        className="v_card-content"
        onClick={() => {
          navigate("/gamedetails");
        }}
      >
        <p className="title">{game.gameName}</p>
        <div className="price">
          <span>₹{game.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Vcard;
