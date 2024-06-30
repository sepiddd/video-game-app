import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCropedImageUrl from "../../services/image-url";

interface Props {
  handleSelectGenre: (value: Genre) => void;
  selectedGenre?: Genre;
}

const GenreList = ({ handleSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return <></>;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre: Genre) => (
        <ListItem marginY="10px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCropedImageUrl(genre.image_background, 600, 400)}
              borderRadius="8px"
            />
            <Button
              variant="link"
              fontSize="lg"
              fontWeight={selectedGenre?.slug == genre.slug ? "bold" : "normal"}
              key={genre.id}
              onClick={() => handleSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
