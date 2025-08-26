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
            <Image
              src="/assets/shiv_cars.png"
              alt="logo-image"
              width={{ base: "5.5rem", md: "7rem" }}
              h="100%"
              mx={{ base: "auto", md: "0" }}
            />
            <Text fontSize="sm" maxW="300px" mt={2}>
              Consulting & Services – Driving Innovation, Delivering Trust.
            </Text>
          </Box>

          <Stack direction="column" spacing={2}>
            <Text fontWeight="semibold" color="white" fontSize=".85rem">
              Quick Links
            </Text>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact</Link>
          </Stack>

          <Stack direction="column" spacing={2}>
            <Text fontWeight="semibold" color="white">
              Contact
            </Text>
            <Text>Email: info@shivcars.com</Text>
            <Text>Phone: +91 98765 43210</Text>
            <Text>Location: Ahmedabad, India</Text>
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
