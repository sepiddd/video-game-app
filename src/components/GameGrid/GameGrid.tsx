import { Grid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";

interface Props {
  selectedGenre?: string;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { error, data: games, isLoading } = useGames(selectedGenre);

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
