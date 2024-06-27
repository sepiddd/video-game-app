import { Image, Progress, Text } from "@chakra-ui/react";
import useGames, { Game } from "../../hooks/useGames";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();

  if (isLoading) return <Progress width="100%" size="xs" isIndeterminate />;
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game: Game) => (
          <li key={game.id}>
            {game.name}
            <Image src={game.background_image} width="50px" height="50px" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
