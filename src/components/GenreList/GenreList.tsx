import useGenres, { Genre } from "../../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <div>
      {genres.map((genre: Genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  );
};

export default GenreList;
