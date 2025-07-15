import { Box, Flex, Text, IconButton, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";
import { CollectionDropdown, ConnectWallet } from "@/modules/common/cta";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { LINKS } from "@/utils/links";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  const { config } = useApp();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box py="2" px="8">
      <Flex
        direction="row"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        gap="4"
      >
        <Link href={LINKS.home()}>
          <Text fontSize="lg" fontWeight="bold">
            {config.name}
          </Text>
        </Link>
        <Flex direction="row" ml="auto" gap="2" alignItems="center">
          <CollectionDropdown />
          <ConnectWallet />
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="md"
            ml={2}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
