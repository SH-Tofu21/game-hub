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

import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  // if (isLoading) return <Spinner />;

  // if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
              />
              {/* <Text fontSize="lg">{genre.name}</Text> */}
              {/* <Button onClick={() => console.log(genre)} fontSize="lg">{genre.name}></Button> */}
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} // Highlight selected genre
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
