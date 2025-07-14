"use client";
import { Box, Heading, useColorModeValue, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC } from "react";
import EmbeddableList from "./List";
import NoClientLayout from "@/modules/common/layout/components/NoClientLayout";

interface HomePageProps {
  apps: string[];
  chainId: string;
}

const MotionBox = motion(Box);

const HomePage: FC<HomePageProps> = (props) => {
  const { apps, chainId } = props;
  const gradientBg = useColorModeValue(
    "linear(to-br, #7928CA, #FF0080)",
    "linear(to-br, #232526, #414345)"
  );
  return (
    <NoClientLayout>
      <MotionBox
        bgGradient={gradientBg}
        borderRadius="2xl"
        p={{ base: 4, md: 8 }}
        boxShadow="2xl"
        mt={{ base: 4, md: 10 }}
        mb={8}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <VStack align="start" spacing={6} w="full">
          <Heading
            fontWeight="extrabold"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            bgGradient="linear(to-r, #FF0080, #7928CA)"
            bgClip="text"
            letterSpacing="tight"
            lineHeight="shorter"
          >
            Explore Apps created by community
          </Heading>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            Discover, interact, and enjoy the latest dApps on Archway. Beautiful, fast, and secure.
          </Text>
          <EmbeddableList apps={apps} chainId={chainId} />
        </VStack>
      </MotionBox>
    </NoClientLayout>
  );
};
export default HomePage;
