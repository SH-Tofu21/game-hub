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

import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
