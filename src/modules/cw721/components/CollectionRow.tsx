import { LINKS } from "@/utils/links";
import { Box, Button, Flex, GridItem, SimpleGrid, Text, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import CollectionRowToken from "./CollectionRowToken";
import { useAppUtils } from "@/lib/app/hooks";
import { useGetCw721Tokens } from "@/lib/graphql/hooks/cw721";
import { IAuctionCollection } from "@/lib/app/types";
import { motion } from "framer-motion";

const glow = keyframes`
  0% { text-shadow: 0 0 5px #A770EF, 0 0 10px #A770EF; }
  100% { text-shadow: 0 0 20px #CF8BF3, 0 0 30px #CF8BF3; }
`;

const MotionBox = motion(Box);

const Cw721CollectionRow: FC<{ collectionId: string }> = ({ collectionId }) => {
  const { getCollection } = useAppUtils();
  const collection = getCollection(collectionId) as IAuctionCollection;
  const { data: allTokens } = useGetCw721Tokens(collection.cw721);

  return (
    <MotionBox
      p={{ base: 6, md: 10 }}
      rounded="3xl"
      bg="rgba(10, 10, 25, 0.8)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(135, 103, 226, 0.3)"
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.5)"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-testid="cw721-collection-row"
    >
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 6, md: 8 }}>
        <GridItem data-testid="collection-info">
          <Flex direction="column" gap={4} alignItems="start" h="full">
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="white"
              animation={`${glow} 2s infinite alternate`}
              data-testid="collection-name"
            >
              {collection.name}
            </Text>
            <Text fontSize="md" color="gray.300" flexGrow={1}>
              Discover unique digital assets from the Andromeda ecosystem.
            </Text>
            <Link href={LINKS.collection(collectionId)} passHref>
              <Button
                as="a"
                w="full"
                size="lg"
                bgGradient="linear(to-r, #6E45E2, #88D3CE)"
                color="white"
                fontWeight="bold"
                rounded="xl"
                boxShadow="0 0 20px rgba(136, 211, 206, 0.7)"
                _hover={{ transform: "scale(1.05)", boxShadow: "0 0 30px rgba(136, 211, 206, 1)" }}
                transition="all 0.3s ease-in-out"
                data-testid="explore-collection-button"
              >
                Explore Collection
              </Button>
            </Link>
          </Flex>
        </GridItem>
        {allTokens?.slice(0, 3).map((tokenId) => (
          <GridItem key={tokenId} alignSelf="center" data-testid={`token-card-${tokenId}`}>
            <CollectionRowToken tokenId={tokenId} collection={collection} contractAddress={collection.cw721} />
          </GridItem>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default Cw721CollectionRow;
