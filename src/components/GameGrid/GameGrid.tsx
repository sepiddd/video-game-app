import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError } from "axios";
import { Image, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  slug: string;
  image: string;
  background_image: string;
  games_count: number;
}

interface FetchGameResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err: AxiosError) => setError(err.message));

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game: Game) => (
          <li key={game.id}>
            {game.name}
            <Image src={game.background_image} width="50px" height="50px" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
