import React from "react";
import "./Wishlist.css";
import { FaHeart } from "react-icons/fa";

const Wishlist = ({ wishlist, setWishlist }) => {
  const toggleWishlist = (gameToRemove) => {
    const updatedWishlist = wishlist.filter(
      (game) => game.gameName !== gameToRemove.gameName
    );
    setWishlist(updatedWishlist);
  };

  return (
    <div className="wishlist_container">
      <h2 className="wishlist_head">Wish List</h2>
      <div className="wishlist_games-container">
        {wishlist.length === 0 ? (
          <p>No games in wishlist.</p>
        ) : (
          <div className="wishlist_games-wraper">
            {wishlist.map((game) => (
              <div className="wishlist_games" key={game.gameName}>
                <div className="wishlist_games-card">
                  <button
                    className="wishlist_game-heart"
                    onClick={() => toggleWishlist(game)}
                    style={{
                      //   background: "none",
                      padding: "8px 10px",
                      backgroundColor: "#131313",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    <FaHeart color="red" size={20} />
                  </button>
                  <img
                    src={game.imageURL}
                    alt={game.gameName}
                    className="wishlist_games-image"
                  />
                  <div className="wishlist_games-content">
                    <div className="wishlist_games-text">
                      <p className="wishlist_games-title">{game.gameName}</p>
                      <p className="wishlist_games-price">₹{game.price}</p>
                    </div>
                    <button className="wishlist_games-button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
