import { Grid, GridItem, Show } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import NavigationBar from "../../components/NavigationBar";

const BaseLayout = ({ children }: PropsWithChildren) => {
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
      <GridItem bg={"skyblue"} area="main">
        {children}
        test
      </GridItem>
    </Grid>
  );
};

export default BaseLayout;
