import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../hooks/useGames";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  xbox: FaXbox,
  playstation: FaPlaystation,
  web: BsGlobe,
  nintendo: SiNintendo,
  ios: MdPhoneIphone,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY="10px">
      {platforms.map((platform: Platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
