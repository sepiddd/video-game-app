import { Progress, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../../hooks/useGames";
import GameCard from "../GameCard";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();

  if (isLoading) return <Progress width="100%" size="xs" isIndeterminate />;
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        padding="40px"
        spacing={10}
      >
        {games.map((game: Game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
