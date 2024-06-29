import useData from "./useData";

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

const useGames = (genre?: string) =>
  useData<Game>("/games", { params: { genres: genre } }, [genre]);

export default useGames;
