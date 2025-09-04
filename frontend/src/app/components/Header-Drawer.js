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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { PiListBold } from "react-icons/pi";
import Link from "next/link";
import {
  BOOKING_SUBPAGE_KEY,
  CAR_SUBPAGE_KEY,
  CONTACT_SUBPAGE_KEY,
  SERVICES_SUBPAGE_KEY,
} from "@/utils/constant";

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const linkMenus = [
    {
      title: "Cars",
      options: [{ title: "All Cars", link: CAR_SUBPAGE_KEY.NEW_CAR }],
    },
    {
      title: "Services",
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
      title: "Bookings",
      options: [
        { title: "Book a service", link: BOOKING_SUBPAGE_KEY.BOOK_SERVICE },
      ],
    },
    {
      title: "Contact",
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
    <>
      <Button
        ref={btnRef}
        bg="transparent"
        color="white"
        onClick={onOpen}
        display={{ lg: "none" }}
        _hover={{ bg: "transparent" }}
      >
        <PiListBold size="1.8rem" />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="primary.1000"
          color="white"
          borderRightRadius="xl"
          boxShadow="xl"
        >
          <DrawerCloseButton color="white" />
          <DrawerHeader
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            borderBottom="1px"
          >
            SHIV CARS
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {linkMenus.map((menu, idx) => (
                <Accordion key={idx} allowToggle>
                  <AccordionItem border="none">
                    <AccordionButton
                      _expanded={{ bg: "whiteAlpha.200", borderRadius: "md" }}
                      py={3}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight="semibold"
                        fontSize="lg"
                      >
                        {menu.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={3}>
                      <VStack align="stretch" spacing={2}>
                        {menu.options.map((opt, i) => (
                          <Link key={i} href={opt.link} passHref>
                            <Button
                              onClick={onClose}
                              px={3}
                              py={2}
                              borderRadius="md"
                              transition="all 0.2s"
                              _hover={{ bg: "transparent", pl: 5 }}
                              cursor="pointer"
                              borderBottom="1px"
                              borderTop="1px"
                              bg="transparent"
                              color="white.100"
                            >
                              {opt.title}
                            </Button>
                          </Link>
                        ))}
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
