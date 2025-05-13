import React from "react";
import "./Wishlist.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wishlist = ({ wishlist, setWishlist, cart, setCart }) => {
  const navigate = useNavigate();
  const toggleWishlist = (gameToRemove) => {
    const updatedWishlist = wishlist.filter(
      (game) => game.gameName !== gameToRemove.gameName
    );
    setWishlist(updatedWishlist);
  };

  const addToCart = (game) => {
    const alreadyInCart = cart.some((item) => item.gameName === game.gameName);
    alert("Game Added To Cart");
    if (!alreadyInCart) {
      setCart([...cart, game]);
    }
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
                    onClick={() => {
                      navigate("/gamedetails");
                    }}
                  />
                  <div className="wishlist_games-content">
                    <div
                      className="wishlist_games-text"
                      onClick={() => {
                        navigate("/gamedetails");
                      }}
                    >
                      <p className="wishlist_games-title">{game.gameName}</p>
                      <p className="wishlist_games-price">₹{game.price}</p>
                    </div>
                    <button
                      className="wishlist_games-button"
                      onClick={() => addToCart(game)}
                    >
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
