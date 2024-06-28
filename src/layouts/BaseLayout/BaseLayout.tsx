import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "../../components/NavigationBar";
import GameGrid from "../../components/GameGrid";
import GenreList from "../../components/GenreList";

const BaseLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" colSpan={4}>
        <NavigationBar />
      </GridItem>
      <Show above="lg">
        <GridItem minW="250px" colSpan={1} area="aside" padding="20px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem colSpan={3} area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default BaseLayout;
