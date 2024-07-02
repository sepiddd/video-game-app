import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavigationBar from "../../components/NavigationBar";
import GameGrid from "../../components/GameGrid";
import GenreList from "../../components/GenreList";
import PlatformSelect from "../../components/PlatformSelect";
import { GameQuery } from "../../hooks/useGames";
import SortSelector from "../../components/SortSelector";
import GameHeading from "../../components/GameHeading";

const BaseLayout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavigationBar
          onSearchItem={(value) =>
            setGameQuery({ ...gameQuery, searchText: value })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding="20px">
          <GenreList
            handleSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery?.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding="30px">
        <GameHeading gameQuery={gameQuery} />
        <HStack marginY="20px" gap="20px">
          <PlatformSelect
            selectedPlatform={gameQuery?.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            selectedSort={gameQuery?.sortOrder}
            onSelectSortOrder={(item) =>
              setGameQuery({ ...gameQuery, sortOrder: item })
            }
          />
        </HStack>
        <GameGrid
          searchText={gameQuery.searchText}
          selectedGenre={gameQuery.genre}
          selectedPlatform={gameQuery.platform}
          sortOrder={gameQuery.sortOrder}
        />
      </GridItem>
    </Grid>
  );
};

export default BaseLayout;
