import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" bg="">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
