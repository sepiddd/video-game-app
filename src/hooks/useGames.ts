import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Game {
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

interface UseGames {
  games: Game[];
  setGames: (games: Game[]) => void;
  error: string;
  setError: (err: string) => void;
  isLoading: boolean;
}

const useGames = (): UseGames => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        setIsLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
