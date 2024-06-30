import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "../../components/NavigationBar";
import GameGrid from "../../components/GameGrid";
import GenreList from "../../components/GenreList";
import PlatformSelect from "../../components/PlatformSelect";
import { Genre } from "../../hooks/useGenres";
import { Platform } from "../../hooks/useGames";

const BaseLayout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>(
    undefined
  );

  const [selectedPlatform, setSelectedPlatform] = useState<
    Platform | undefined
  >(undefined);
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
            handleSelectGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding="30px">
        <PlatformSelect
          onSelectPlatform={setSelectedPlatform}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default BaseLayout;
