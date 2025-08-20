"use client";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
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
        onClick={onOpen}
        display={{ md: "none" }}
      >
        <PiListBold />
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <VStack>
              {linkData.map((data, inx, arr) => {
                return (
                  <React.Fragment key={inx}>
                    <Button
                      backgroundColor="transparent"
                      _hover={{ bg: "transparent" }}
                      _disabled={{ bg: "transparent" }}
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
