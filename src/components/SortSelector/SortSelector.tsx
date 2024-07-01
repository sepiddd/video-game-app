import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface SortOrder {
  value: string;
  label: string;
}

const sortOrders: SortOrder[] = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Released Date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

interface Props {
  onSelectSortOrder: (value: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSort }: Props) => {
  const findSort = sortOrders.find((item) => item.value === selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {`Orderd By : ${findSort?.label || "Relevance"}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item: SortOrder) => (
          <MenuItem
            onClick={() => onSelectSortOrder(item.value)}
            key={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
