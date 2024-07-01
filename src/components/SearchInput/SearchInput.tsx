import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        type="search"
        placeholder="Search here..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
