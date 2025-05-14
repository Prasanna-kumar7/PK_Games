import { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:50000/api/games/getgames")
      .then((response) => {
        setGames(response.data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const getTopGames = (count = 25) => {
    return games.slice(0, count);
  };
  const getDeals = (count = 6) => {
    return games.slice(0, count);
  };

  return { games, loading, error, getTopGames, getDeals };
};

export default Api;
