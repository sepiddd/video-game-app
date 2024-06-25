import {
  Image,
  Input,
  Switch,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
//221443b1e41c4d63ae899493147a8ee0 api key
const NavigationBar = () => (
  <HStack>
    <Image src={logo} alt="Logo" boxSize="60px" />

    <Input type="search" placeholder="Serch here..." />

    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="theme" mb="0">
        dark
      </FormLabel>
      <Switch id="theme" />
    </FormControl>
  </HStack>
);

export default NavigationBar;
