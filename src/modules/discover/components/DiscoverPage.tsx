import { useAppUtils } from "@/lib/app/hooks";
import { Box, Text, Button, VStack, useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import CollectionRow from "./CollectionRow";
import Featured from "./Featured";
import Link from "next/link";

interface DiscoverPageProps {}
const DiscoverPage: FC<DiscoverPageProps> = (props) => {
  const {} = props;
  const { getCollections } = useAppUtils();
  const collections = useMemo(() => getCollections(), [getCollections]);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgGradient = useColorModeValue(
    "linear-gradient(135deg, #1a237e 0%, #512da8 100%)",
    "linear-gradient(135deg, #0d133d 0%, #2d1a4d 100%)"
  );
  const starBg = {
    backgroundImage: `${bgGradient}, url('/public/starfield.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    position: 'relative' as const,
    overflow: 'hidden',
  };

  return (
    <Box {...starBg} px={{ base: 4, md: 12 }} py={{ base: 8, md: 20 }}>
      {/* Cosmic Hero Section */}
      <VStack spacing={6} align="center" mb={16}>
        <Text
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="extrabold"
          bgGradient="linear(to-r, purple.400, cyan.400, blue.400)"
          bgClip="text"
          textAlign="center"
          letterSpacing="tight"
          shadow="0 0 40px #fff8"
        >
          🚀 Tickets to Galaxy Tour
        </Text>
        <Text
          fontSize={{ base: "md", md: "2xl" }}
          color={useColorModeValue("gray.200", "gray.300")}
          maxW="2xl"
          textAlign="center"
        >
          Embark on a cosmic journey! Secure your Galaxy Ticket NFT and join the most stellar event in the universe.
        </Text>
        <Link href="/constantine-3/andromeda/galaxy-ticket" passHref>
          <Button
            size="lg"
            colorScheme="purple"
            px={10}
            py={6}
            fontSize="xl"
            fontWeight="bold"
            boxShadow="0 0 24px 4px #7F56D9AA"
            _hover={{
              bgGradient: "linear(to-r, purple.500, cyan.500)",
              color: "white",
              transform: "scale(1.05)",
              boxShadow: "0 0 40px 8px #7F56D9AA"
            }}
            transition="all 0.2s"
          >
            View Tickets
          </Button>
        </Link>
      </VStack>
      {/* Central Focus: Galaxy Ticket Collection */}
      <Box maxW="5xl" mx="auto" mt={12}>
        {collections.map((col) => (
          <Box mt={10} key={col.id}>
            <CollectionRow collectionId={col.id} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default DiscoverPage;
