"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import HeaderDrawer from "./Header-Drawer";

const HeaderNavigation = () => {
  return (
    <Box
      bg="primary.400"
      px={4}
      boxShadow="md"
      position="fixed"
      w="100%"
      top={0}
      left={0}
      zIndex={1000}
      transition="all .5s ease"
    >
      <Flex h={16} alignItems="center" gap={3}>
        <Box display={{ md: "none" }}>
          <HeaderDrawer />
        </Box>

        <Box fontSize="1.5rem">Shiv Cars</Box>

        <Box display={{ base: "none", md: "flex" }} gap={6}>
          <Box cursor="pointer">Cars</Box>
          <Box cursor="pointer">Services</Box>
          <Box cursor="pointer">Bookings</Box>
          <Box cursor="pointer">About</Box>
          <Box cursor="pointer">Contact</Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderNavigation;
