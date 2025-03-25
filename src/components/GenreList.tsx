// import useGenres from "../hooks/useGenres";

// const GenreList = () => {
//   const { genres } = useGenres();
//   return (
//     <ul>
//       {genres.map((genre) => (
//         <li key={genre.id}>{genre.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default GenreList;

// ------------------------------------------//

// import useData from "../hooks/useData";
// import { Genre } from "../hooks/useGenres";

// const GenreList = () => {
//   const { data } = useData<Genre>("/genres");
//   return (
//     <ul>
//       {data.map((data) => (
//         <li key={data.id}>{data.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default GenreList;

// ------------------------------------------//

// import useGenres from "../hooks/useGenres";

// const GenreList = () => {
//   const { data } = useGenres();
//   return (
//     <ul>
//       {data.map((genre) => (
//         <li key={genre.id}>{genre.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default GenreList;

// --------------- Display list -------------- //

import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
