import React, { FC, ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from 'next/font/google';
import { VStack } from "@chakra-ui/react";
import Providers from "./providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Andromeda Embeddable",
    template: "%s | Embeddable"
  },
};

interface Props {
  children?: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <VStack w="full" minH="100vh" bg="gray.900" color="white" spacing={0} align="stretch">
            {children}
          </VStack>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
