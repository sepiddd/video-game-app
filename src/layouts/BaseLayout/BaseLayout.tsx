import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "../../components/NavigationBar";
import GameGrid from "../../components/GameGrid";

const BaseLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavigationBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg={"deeppink"} area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default BaseLayout;
