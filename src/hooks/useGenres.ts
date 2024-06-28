import { Game } from "./useGames";
import useData from "./useData";

export interface Genre {
  games_count: number;
  games: Game[];
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
