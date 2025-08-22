"use client";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { PiListBold } from "react-icons/pi";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
    <>
      <Button
        ref={btnRef}
        backgroundColor="transparent"
        color="white.100"
        onClick={onOpen}
        display={{ md: "none" }}
        _hover={{ backgroundColor: "transparent" }}
        _disabled={{ backgroundColor: "transparent" }}
      >
        <PiListBold size="1.5rem" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="white">
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} fontSize="1.7rem">
            SHIV CARS
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              {linkData.map((data, inx, arr) => {
                return (
                  <React.Fragment key={inx}>
                    <Button
                      backgroundColor="transparent"
                      _hover={{ bg: "transparent" }}
                      _disabled={{ bg: "transparent" }}
                      onClick={onClose}
                    >
                      <Link href={data.link}>{data.name}</Link>
                    </Button>
                  </React.Fragment>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
