import { Grid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  sortOrder: string;
}

const GameGrid = ({ selectedGenre, selectedPlatform, sortOrder }: Props) => {
  const {
    error,
    data: games,
    isLoading,
  } = useGames({ genre: selectedGenre, platform: selectedPlatform, sortOrder });

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid
        templateColumns={{
          sm: `repeat(1, 1fr)`,
          md: `repeat(2, 1fr)`,
          lg: `repeat(3, 1fr)`,
        }}
        gap={10}
      >
        {isLoading
          ? skeletons.map((item) => <GameCardSkeleton key={item} />)
          : games.map((game: Game) => <GameCard game={game} key={game.id} />)}
      </Grid>
    </>
  );
};

export default GameGrid;
