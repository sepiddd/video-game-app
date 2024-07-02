import { Game } from "./useGames";
import genres from "../data/genres";

export interface Genre {
  games_count: number;
  games: Game[];
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => ({
  data: genres,
  error: null,
  isLoading: false,
});

export default useGenres;
