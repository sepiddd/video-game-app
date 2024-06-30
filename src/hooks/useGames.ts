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

const useGames = (genre?: Genre, platform?: Platform) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: genre?.slug,
        platforms: platform?.id,
      },
    },
    [genre?.slug, platform?.id]
  );

export default useGames;
