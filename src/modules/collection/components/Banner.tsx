import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC } from "react";

const MotionBox = motion(Box);

const Banner: FC<{ image: string }> = ({ image }) => {
  return (
    <MotionBox
      h={{ base: 52, md: 80 }}
      pos="relative"
      rounded="3xl"
      overflow="hidden"
      data-testid="banner"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(136, 211, 206, 0.6)"
      border="1px solid rgba(135, 103, 226, 0.4)"
    >
      <MotionBox
        as={Image}
        src={image}
        alt="Main Banner Image"
        w="full"
        h="full"
        objectFit="cover"
        data-testid="banner-main-image"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <Box
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-t, rgba(0,0,10,0.8) 0%, transparent 50%)"
      />
      <MotionBox
        pos="absolute"
        bottom={{ base: -8, md: -12 }}
        left={{ base: 4, md: 8 }}
        border="4px solid white"
        rounded="2xl"
        overflow="hidden"
        boxShadow="0 10px 20px rgba(0,0,0,0.4)"
        whileHover={{ y: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={image}
          alt="Overlay Thumbnail Image"
          h={{ base: 24, md: 40 }}
          w={{ base: 24, md: 40 }}
          objectFit="cover"
          data-testid="banner-overlay-image"
        />
      </MotionBox>
    </MotionBox>
  );
};

export default Banner;
