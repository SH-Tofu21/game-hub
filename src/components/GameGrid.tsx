// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { Text } from "@chakra-ui/react";

// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];      // Array of game objects
// }

// const GameGrid = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClient
//       .get<FetchGamesResponse>("/games")
//       .then(({ data: games }) => setGames(games.results))
//       .catch((err) => setError(err.message));
//   }, []);

//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <ul>
//         {games.map((game) => (
//           <li key={game.id}>{game.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default GameGrid;

// -------------------------------------------------------------------------------------------------//

// import { Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";

// const GameGrid = () => {
//   const { games, error } = useGames();

//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <ul>
//         {games.map((game) => (
//           <li key={game.id}>{game.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default GameGrid;

// -------------------------------------------------------------------------------------------------//

// import { SimpleGrid, Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";
// import GameCard from "./GameCard";
// import GameCardSkeleton from "./GameCardSkeleton";
// import GameCardContainer from "./GameCardContainer";

// const GameGrid = () => {
//   const { games, error, isLoading } = useGames();

//   const skeletons = [1, 2, 3, 4, 5, 6];

//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <SimpleGrid
//         columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
//         padding="10px"
//         spacing={10}
//       >
//         {isLoading &&
//           skeletons.map((skeleton) => (
//             <GameCardContainer>
//               <GameCardSkeleton key={skeleton}></GameCardSkeleton>
//             </GameCardContainer>
//           ))}
//         {games.map((game) => (
//           <GameCardContainer>
//             <GameCard key={game.id} game={game}></GameCard>
//           </GameCardContainer>
//         ))}
//       </SimpleGrid>
//     </>
//   );
// };

//export default GameGrid;

// ---------------------------------- Using generic data fetching hooks --------------------------------------------//

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
