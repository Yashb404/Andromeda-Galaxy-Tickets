import { useAppUtils } from "@/lib/app/hooks";
import { Box, Text, Button, VStack, Flex, keyframes } from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import CollectionRow from "./CollectionRow";
import Link from "next/link";
import { motion } from "framer-motion";

const glow = keyframes`
  0% { box-shadow: 0 0 5px #7F56D9, 0 0 10px #7F56D9, 0 0 15px #7F56D9; }
  50% { box-shadow: 0 0 20px #7F56D9, 0 0 30px #7F56D9, 0 0 40px #7F56D9; }
  100% { box-shadow: 0 0 5px #7F56D9, 0 0 10px #7F56D9, 0 0 15px #7F56D9; }
`;

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const DiscoverPage: FC = () => {
  const { getCollections } = useAppUtils();
  const collections = useMemo(() => getCollections(), [getCollections]);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      bg="#000011"
      bgImage="url('/starfield.svg')"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      minH="100vh"
      w="full"
      px={{ base: 4, md: 12 }}
      py={{ base: 8, md: 20 }}
      color="white"
    >
      <Flex justify="center" align="center" minH="70vh">
        <MotionVStack
          spacing={8}
          align="center"
          textAlign="center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, #A770EF, #CF8BF3, #FDB99B)"
            bgClip="text"
            letterSpacing="tight"
            textShadow="0 0 20px rgba(255,255,255,0.3)"
          >
            Tickets to the Galaxy Tour
          </Text>
          <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.300" maxW="3xl">
            Your cosmic journey awaits. Secure a Galaxy Ticket NFT to join the most stellar event in the universe, powered by Andromeda.
          </Text>
          <Link href="/constantine-3/andromeda/galaxy-ticket" passHref>
            <Button
              size="lg"
              colorScheme="purple"
              px={12}
              py={8}
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, #6E45E2, #88D3CE)"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 40px #88D3CE, 0 0 60px #6E45E2",
              }}
              _active={{ transform: "scale(1.05)" }}
              transition="all 0.3s ease-in-out"
              animation={`${glow} 3s infinite-alternate ease-in-out`}
              boxShadow="0 0 20px #88D3CE, 0 0 30px #6E45E2"
              rounded="2xl"
            >
              View Tickets
            </Button>
          </Link>
        </MotionVStack>
      </Flex>

      <Box maxW="7xl" mx="auto" mt={20}>
        {collections.map((col) => (
          <Box mt={10} key={col.id}>
            <CollectionRow collectionId={col.id} />
          </Box>
        ))}
      </Box>
    </MotionBox>
  );
};

export default DiscoverPage;
