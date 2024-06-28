import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import { Game } from "./useGames";

export interface Genre {
  games_count: number;
  games: Game[];
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { error, genres, setGenres };
};

export default useGenres;
