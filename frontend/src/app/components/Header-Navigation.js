"use client";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import HeaderDrawer from "./Header-Drawer";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import AuthButtons from "./AuthButtons";
import { ChevronDownIcon } from "@chakra-ui/icons";

const HeaderNavigation = () => {
  const linkMenus = [
    {
      title: "Cars",
      options: [
        { title: "New Cars", link: PAGE_PATH_KEYS.NEW_CARS },
        { title: "Used Cars", link: PAGE_PATH_KEYS.CARS },
        { title: "Compare Cars", link: PAGE_PATH_KEYS.CARS },
        { title: "Car Valuation", link: PAGE_PATH_KEYS.CARS },
      ],
    },
    {
      title: "Services",
      options: [
        { title: "Car consulting", link: PAGE_PATH_KEYS.SERVICES },
        { title: "Car Service & Maintenance", link: PAGE_PATH_KEYS.SERVICES },
        { title: "Insurance & Renewal", link: PAGE_PATH_KEYS.SERVICES },
        { title: "Finance & EMI calculator", link: PAGE_PATH_KEYS.SERVICES },
      ],
    },
    {
      title: "Bookings",
      options: [
        { title: "Book a service", link: PAGE_PATH_KEYS.BOOKINGS },
        { title: "Track my booking", link: PAGE_PATH_KEYS.SERVICES },
      ],
    },
    {
      title: "About Us",
      options: [
        { title: "Who we are ?", link: PAGE_PATH_KEYS.ABOUT },
        { title: "Why choose Shiv Cars ?", link: PAGE_PATH_KEYS.ABOUT },
      ],
    },
    {
      title: "Contact",
      options: [
        { title: "Contact Form", link: PAGE_PATH_KEYS.CONTACT },
        { title: "Whatapp / Call", link: PAGE_PATH_KEYS.CONTACT },
        { title: "Service location", link: PAGE_PATH_KEYS.CONTACT },
      ],
    },
    {
      title: "Profile",
      options: [
        { title: "My profile", link: PAGE_PATH_KEYS.PROFILE },
        { title: "My cars", link: PAGE_PATH_KEYS.PROFILE },
        { title: "My booking", link: PAGE_PATH_KEYS.PROFILE },
        { title: "Logout", link: PAGE_PATH_KEYS.PROFILE },
      ],
    },
  ];

  return (
    <Box
      bg="primary.1000"
      px={{ base: 1, md: 4 }}
      position="fixed"
      w="100%"
      top={0}
      left={0}
      zIndex={1000}
      transition="all .5s ease"
    >
      <Flex h={16} alignItems="center" gap={3} justifyContent="space-between">
        <Flex alignItems="center">
          <Box display={{ lg: "none" }}>
            <HeaderDrawer />
          </Box>

          <Box fontSize="1.5rem" transition="all .5s ease">
            <Link href={PAGE_PATH_KEYS.HOME}>
              <Image
                src="/assets/shiv_cars.png"
                alt="logo-image"
                width={{ base: "5.5rem", md: "6rem" }}
                h="100%"
              />
            </Link>
          </Box>

          <Box display={{ base: "none", lg: "flex" }} gap={2}>
            <Button
              as={Link}
              href={PAGE_PATH_KEYS.HOME}
              backgroundColor="transparent"
              _hover={{ bg: "transparent", color: "white.100" }}
              color="white.100"
              _disabled={{ bg: "transparent", color: "white.100" }}
            >
              Home
            </Button>

            {linkMenus.map((menu, inx, arr) => {
              return (
                <React.Fragment key={inx}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      backgroundColor="transparent"
                      _hover={{ bg: "transparent", color: "white.100" }}
                      color="white.100"
                      _disabled={{ bg: "transparent", color: "white.100" }}
                      px={1}
                    >
                      {menu.title}
                    </MenuButton>
                    <MenuList bg="white" color="black">
                      {menu.options.map((opt, inx, arr) => {
                        return (
                          <React.Fragment key={inx}>
                            <MenuItem as={Link} href={opt.link}>
                              {opt.title}
                            </MenuItem>
                          </React.Fragment>
                        );
                      })}
                    </MenuList>
                  </Menu>
                </React.Fragment>
              );
            })}
          </Box>
        </Flex>

        <AuthButtons />
      </Flex>
    </Box>
  );
};

export default HeaderNavigation;
