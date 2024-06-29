import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCropedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return <></>;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre: Genre) => (
        <ListItem marginY="10px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCropedImageUrl(genre.image_background, 600, 400)}
              borderRadius="8px"
            />
            <Text fontSize="lg" key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
