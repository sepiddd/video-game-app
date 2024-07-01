import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "../../components/NavigationBar";
import GameGrid from "../../components/GameGrid";
import GenreList from "../../components/GenreList";
import PlatformSelect from "../../components/PlatformSelect";
import { GameQuery } from "../../hooks/useGames";

const BaseLayout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavigationBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding="20px">
          <GenreList
            handleSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding="30px">
        <PlatformSelect
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid
          selectedGenre={gameQuery.genre}
          selectedPlatform={gameQuery.platform}
        />
      </GridItem>
    </Grid>
  );
};

export default BaseLayout;
