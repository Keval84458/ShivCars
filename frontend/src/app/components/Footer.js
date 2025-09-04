"use client";
import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  Divider,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CONTACT_SUBPAGE_KEY, PAGE_PATH_KEYS } from "@/utils/constant";

const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.300" py={10} mt={0}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={10}
          justify="space-between"
          align={{ base: "center", md: "center" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box>
            <Link href={PAGE_PATH_KEYS.HOME}>
              <Image
                src="/assets/shiv_cars.png"
                alt="logo-image"
                width={{ base: "5.5rem", md: "7rem" }}
                h="100%"
                mx={{ base: "auto", md: "0" }}
              />
            </Link>

            <Text fontSize="sm" maxW="300px" mt={2}>
              Consulting & Services – Driving Innovation, Delivering Trust.
            </Text>
          </Box>

          <Stack direction="column" spacing={2}>
            <Text fontWeight="semibold" color="white" fontSize=".85rem">
              Quick Links
            </Text>
            <Link href={PAGE_PATH_KEYS.HOME}>Home</Link>
            <Link href={PAGE_PATH_KEYS.ABOUT}>About</Link>
            <Link href={CONTACT_SUBPAGE_KEY.CONTACT_FORM}>Contact Form</Link>
          </Stack>

          <Stack direction="column" spacing={2}>
            <Text fontWeight="semibold" color="white">
              Contact
            </Text>
            <Text>Email: shivcars@gmail.com</Text>
            <Text>Phone: +91 98765 43210</Text>
            <Text>Location: Una, India</Text>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <IconButton
              as="a"
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="white"
              _hover={{ bg: "gray.700" }}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              color="white"
              _hover={{ bg: "gray.700" }}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="white"
              _hover={{ bg: "gray.700" }}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="white"
              _hover={{ bg: "gray.700" }}
            />
          </Stack>
        </Stack>

        <Divider my={6} borderColor="gray.700" />

        <Text fontSize="sm" textAlign="center" color="gray.500">
          © {new Date().getFullYear()} Shiv Cars. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
