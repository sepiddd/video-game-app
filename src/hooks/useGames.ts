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
  added: number;
  image?: string;
  background_image?: string;
  games_count?: number;
  parent_platforms?: { platform: Platform }[];
  metacritic?: number;
  rating_top?: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.slug,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [
      gameQuery.genre,
      gameQuery.platform,
      gameQuery.sortOrder,
      gameQuery.searchText,
    ]
  );

export default useGames;
