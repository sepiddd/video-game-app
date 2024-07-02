import { Image, HStack } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput";
import ThemeModeSwitch from "../ThemeModeSwitch";

export interface SearchInputProps {
  onSearchItem: (value: string) => void;
}

const NavigationBar = (props: SearchInputProps) => {
  return (
    <HStack padding="10px" gap={{ md: 20 }}>
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput {...props} />
      <ThemeModeSwitch />
    </HStack>
  );
};

export default NavigationBar;
