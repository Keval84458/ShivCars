"use client";
import {
  ChakraProvider as ChakraProviderCMP,
  ColorModeScript,
} from "@chakra-ui/react";
import theme from "./theme";

const ChakraProvider = ({ children }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProviderCMP theme={theme}>{children}</ChakraProviderCMP>
    </>
  );
};

export default ChakraProvider;
