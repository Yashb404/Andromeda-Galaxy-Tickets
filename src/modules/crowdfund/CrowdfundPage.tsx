import { Box, Text, VStack, useColorModeValue, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CrowdfundTokensList from "./CrowdfundTokensList";
import Header from "./Header";
import CONFIG from "@/config";
import { ICrowdfundCollection } from "@/lib/app/types";

const cosmicGradient =
  "linear-gradient(135deg, rgba(34,0,51,0.9) 0%, rgba(0,10,60,0.85) 100%)";

const collection = CONFIG.collections[0] as ICrowdfundCollection;

const CrowdfundPage = () => {
  return (
    <Box
      minH="100vh"
      w="100%"
      bg={useColorModeValue(
        `${cosmicGradient}, url('/public/starfield.svg')`,
        `${cosmicGradient}, url('/public/starfield-dark.svg')`
      )}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      overflow="hidden"
      px={{ base: 2, md: 8 }}
      py={{ base: 4, md: 12 }}
    >
      <VStack spacing={10} align="center" w="full">
        <Header collection={collection} />
        <Box
          as="section"
          w="full"
          maxW="4xl"
          bg={useColorModeValue(
            "rgba(255,255,255,0.85)",
            "rgba(20,20,40,0.85)"
          )}
          borderRadius="2xl"
          boxShadow="0 0 40px 10px rgba(100,0,255,0.2), 0 0 0 1px #fff2"
          p={{ base: 4, md: 8 }}
          mb={8}
          textAlign="center"
          backdropFilter="blur(8px)"
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, purple.400, blue.300, cyan.400)"
            bgClip="text"
            letterSpacing="tight"
            mb={2}
            textShadow="0 0 16px #7f5fff88, 0 0 32px #00eaff44"
            animation="pulse 2s infinite alternate"
          >
            Galaxy Ticket Collection
          </Text>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            color={useColorModeValue("gray.700", "gray.200")}
            mb={4}
          >
            Your pass to the stars. Collect, trade, and join the Galaxy Tour event!
          </Text>
          <Button
            as="a"
            href="#tickets"
            size="lg"
            colorScheme="purple"
            bgGradient="linear(to-r, purple.500, blue.400, cyan.400)"
            _hover={{ bgGradient: "linear(to-r, cyan.400, blue.400, purple.500)", boxShadow: "0 0 24px 4px #7f5fff88" }}
            fontWeight="bold"
            px={8}
            py={6}
            borderRadius="full"
            shadow="lg"
            transition="all 0.3s"
          >
            View Tickets
          </Button>
        </Box>
        <Box id="tickets" w="full" maxW="6xl">
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            mb={6}
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, purple.400)"
            bgClip="text"
            letterSpacing="tight"
            textShadow="0 0 8px #00eaff44"
          >
            Available Galaxy Tickets
          </Text>
          <CrowdfundTokensList collectionId={collection.id} contractAddress={collection.crowdfund} />
        </Box>
      </VStack>
      {/* Optional: Add animated starfield overlay here for extra cosmic effect */}
    </Box>
  );
};

export default CrowdfundPage;