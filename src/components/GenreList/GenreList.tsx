import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCropedImageUrl from "../../services/image-url";

interface Props {
  handleSelectGenre: (value: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ handleSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return <></>;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading as="h3" fontSize="xl" marginBottom="30px">
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem marginY="10px" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCropedImageUrl(genre.image_background)}
                borderRadius="8px"
                objectFit="cover"
              />
              <Button
                variant="link"
                fontSize="lg"
                fontWeight={
                  selectedGenre?.slug == genre.slug ? "bold" : "normal"
                }
                key={genre.id}
                onClick={() => handleSelectGenre(genre)}
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
