import { Image, HStack } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput";
import ThemeModeSwitch from "../ThemeModeSwitch";

const NavigationBar = () => {
  return (
    <HStack padding="10px" gap={{ md: 20 }}>
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput />
      <ThemeModeSwitch />
    </HStack>
  );
};

export default NavigationBar;
