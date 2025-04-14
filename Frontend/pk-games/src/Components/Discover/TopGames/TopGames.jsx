// TopGames.jsx
import React from "react";
import "../TopGames/TopGames.css";
import Vcard from "../../VCard/Vcard";
import Api from "../../../Api";

const TopGames = ({ wishlist, setWishlist }) => {
  const { getTopGames, loading, error } = Api();
  const topGames = loading || error ? [] : getTopGames(20);

  const toggleWishlist = (game) => {
    const exists = wishlist.find((item) => item.gameName === game.gameName);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.gameName !== game.gameName));
    } else {
      setWishlist([...wishlist, game]);
    }
  };

  if (loading) return <div className="loading">Loading Top games...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="top_games-container">
      <div className="top_games-head">
        <h1>Top Games</h1>
      </div>
      <div className="top_games-wraper">
        {topGames.map((game) => (
          <Vcard
            key={game.gameName}
            game={game}
            isWishlisted={wishlist.some(
              (item) => item.gameName === game.gameName
            )}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default TopGames;
