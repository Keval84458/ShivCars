"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import HeaderDrawer from "./Header-Drawer";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const HeaderNavigation = () => {
  const linkData = [
    {
      name: "Home",
      link: PAGE_PATH_KEYS.HOME,
    },
    {
      name: "Cars",
      link: PAGE_PATH_KEYS.CARS,
    },
    {
      name: "Services",
      link: PAGE_PATH_KEYS.SERVICES,
    },
    {
      name: "Bookings",
      link: PAGE_PATH_KEYS.BOOKINGS,
    },
    {
      name: "About",
      link: PAGE_PATH_KEYS.ABOUT,
    },
    {
      name: "Contact",
      link: PAGE_PATH_KEYS.CONTACT,
    },
  ];
  return (
    <Box
      bg="primary.400"
      px={{ base: 1, md: 4 }}
      position="fixed"
      w="100%"
      top={0}
      left={0}
      zIndex={1000}
      transition="all .5s ease"
    >
      <Flex h={16} alignItems="center" gap={3} justifyContent={"space-between"}>
        <Flex>
          <Box display={{ md: "none" }}>
            <HeaderDrawer />
          </Box>

          <Box fontSize="1.5rem">Shiv Cars</Box>

          <Box display={{ base: "none", md: "flex" }}>
            {linkData.map((data, inx, arr) => {
              return (
                <React.Fragment key={inx}>
                  <Button
                    as={Link}
                    href={data.link}
                    backgroundColor="transparent"
                    _hover={{ bg: "transparent" }}
                    _disabled={{ bg: "transparent" }}
                  >
                    {data.name}
                  </Button>
                </React.Fragment>
              );
            })}
          </Box>
        </Flex>
        <Box gap={6}>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.LOGIN}
            backgroundColor="transparent"
            _hover={{ bg: "transparent" }}
            _disabled={{ bg: "transparent" }}
          >
            Login
          </Button>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.SIGNUP}
            backgroundColor="transparent"
            _hover={{ bg: "transparent" }}
            _disabled={{ bg: "transparent" }}
          >
            Signup
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderNavigation;
