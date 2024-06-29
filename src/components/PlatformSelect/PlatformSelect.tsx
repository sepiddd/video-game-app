import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelect = () => {
  const { data: platforms, error } = usePlatforms();

  if (error) return <></>;

  return (
    <div style={{ marginBottom: 20 }}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelect;
