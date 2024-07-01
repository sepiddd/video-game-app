import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  image: string;
  background_image: string;
  games_count: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const useGames = ({ genre, platform }: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: genre?.slug,
        platforms: platform?.id,
      },
    },
    [genre, platform]
  );

export default useGames;
