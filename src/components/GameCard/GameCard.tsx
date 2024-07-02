import { Game } from "../../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";
import getCropedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={getCropedImageUrl(game.background_image, 600, 400)}
        alt={game.name}
        objectFit="cover"
      />
      <CardBody>
        <Heading fontSize="xl" variant="h4">
          {game.name}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((item) => item.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
