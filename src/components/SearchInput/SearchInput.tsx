import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { SearchInputProps } from "../NavigationBar/NavigationBar";

const SearchInput = ({ onSearchItem }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        ref={ref}
        borderRadius={20}
        type="search"
        placeholder="Search here..."
        variant="filled"
        onKeyDown={(event) => {
          if (event.key === "Enter" && ref.current?.value) {
            onSearchItem(ref.current.value);
          }
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
