import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ThemeModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Text whiteSpace="nowrap">Dark mode</Text>
      <Switch
        isChecked={colorMode === "dark"}
        id="theme"
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ThemeModeSwitch;
