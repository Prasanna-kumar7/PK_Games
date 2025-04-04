import { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:50000/api/games/getgames")
      .then((response) => setGames(response.data.results));
  }, []);
  //   return <div>Api</div>;
};

export default Api;
