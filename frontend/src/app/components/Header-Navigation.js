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
import {
  ABOUT_SUBPAGE_KEY,
  BOOKING_SUBPAGE_KEY,
  CAR_SUBPAGE_KEY,
  CONTACT_SUBPAGE_KEY,
  PAGE_PATH_KEYS,
  SERVICES_SUBPAGE_KEY,
} from "@/utils/constant";
import AuthButtons from "./AuthButtons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { IoHome } from "react-icons/io5";

const HeaderNavigation = () => {
  const linkMenus = [
    {
      title: "CARS",
      options: [{ title: "All Cars", link: CAR_SUBPAGE_KEY.NEW_CAR }],
    },
    {
      title: "SERVICES",
      options: [
        {
          title: "Insurance",
          link: SERVICES_SUBPAGE_KEY.INSURANCE,
        },
        {
          title: "Renewal",
          link: SERVICES_SUBPAGE_KEY.RENEWAL,
        },
        {
          title: "Finance",
          link: SERVICES_SUBPAGE_KEY.FINANCE,
        },
        {
          title: "EMI calculator",
          link: SERVICES_SUBPAGE_KEY.EMI_CALCULATOR,
        },
      ],
    },
    {
      title: "BOOKINGS",
      options: [
        { title: "Book a service", link: BOOKING_SUBPAGE_KEY.BOOK_SERVICE },
      ],
    },
    {
      title: "CONTACT",
      options: [
        { title: "Contact Form", link: CONTACT_SUBPAGE_KEY.CONTACT_FORM },
        {
          title: "Service location",
          link: CONTACT_SUBPAGE_KEY.SERVICE_LOCATION,
        },
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
              <IoHome size="1.4rem" />
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
                      _active={{ bg: "transparent", color: "white.100" }}
                      fontSize=".8rem"
                    >
                      {menu.title}
                    </MenuButton>
                    <MenuList bg="white" color="black">
                      {menu.options.map((opt, inx, arr) => {
                        return (
                          <React.Fragment key={inx}>
                            <MenuItem
                              as={Link}
                              href={opt.link}
                              _hover={{ bg: "transparent" }}
                              _disabled={{ bg: "transparent" }}
                            >
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
            <Button
              as={Link}
              href={PAGE_PATH_KEYS.ABOUT}
              backgroundColor="transparent"
              _hover={{ bg: "transparent", color: "white.100" }}
              color="white.100"
              _disabled={{ bg: "transparent", color: "white.100" }}
              fontSize=".8rem"
            >
              ABOUT
            </Button>
          </Box>
        </Flex>

        <AuthButtons />
      </Flex>
    </Box>
  );
};

export default HeaderNavigation;
