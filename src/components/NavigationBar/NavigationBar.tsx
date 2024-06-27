import {
  Image,
  Input,
  Switch,
  HStack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

//221443b1e41c4d63ae899493147a8ee0 api key
const NavigationBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} alt="Logo" boxSize="60px" />

      <Input type="search" placeholder="Serch here..." />

      <HStack>
        <Text>Dark mode</Text>
        <Switch
          isChecked={colorMode === "dark"}
          id="theme"
          onChange={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
