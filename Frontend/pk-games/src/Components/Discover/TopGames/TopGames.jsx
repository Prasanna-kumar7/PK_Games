import React from "react";
import "../TopGames/TopGames.css";
import Vcard from "../../VCard/Vcard";
import Api from "../../../Api";

const TopGames = () => {
  const { getTopGames, loading, error } = Api();
  const topGames = loading || error ? [] : getTopGames(10);

  if (loading) return <div className="loading">Loading Top games...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="top_games-container">
      <div className="top_games-head">
        <h1>Top Games</h1>
      </div>
      <div className="top_games-wraper">
        {topGames.map((game) => (
          <Vcard key={game.gameName} game={game} />
        ))}
      </div>
    </div>
  );
};

export default TopGames;
