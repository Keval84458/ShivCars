"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { FaCar, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { CAR_SUBPAGE_KEY } from "@/utils/constant";

const HeroSection = () => {
  return (
    <Box
      transition="all .5s ease"
      position="relative"
      bgImage="url('/assets/hero image.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      minH={{ base: "60vh", md: "100vh" }}
      color="white"
      p={4}
      display={{ base: "flex", md: "block" }}
      alignItems={{ base: "center", md: "initial" }}
      justifyContent={{ base: "center", md: "initial" }}
      textAlign={{ base: "center", md: "left" }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "black",
        opacity: 0.4,
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1}>
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} lineHeight={2}>
          Hey, Welcome to
        </Text>

        <Text
          fontSize={{ base: "5rem", sm: "6rem", md: "10rem" }}
          lineHeight={1}
          fontWeight="bold"
        >
          SHIV
          <Text
            as="span"
            fontSize={{ base: "4rem", sm: "4rem", md: "5rem" }}
            fontWeight="medium"
          >
            CARS
          </Text>
        </Text>

        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          mt={4}
        >
          <Text fontSize={{ base: "1rem", md: "1.5rem" }} mr={2}>
            <Typewriter
              words={["Consulting and Services"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={100}
            />
          </Text>
          <Image
            src="/assets/0-Car-Sports-Car-3840x2160-unscreen.gif"
            alt="GIF Image"
            width={{ base: "5rem", md: "12rem" }}
          />
        </Box>
        <Box
          width={{ md: "50%" }}
          mt={{ base: "1rem", md: "0" }}
          fontSize={{ base: "1rem" }}
        >
          <Box p={{ base: 5, md: 0 }}>
            <Text>
              At Shiv Cars Consulting & Services, we combine expertise with
              innovation to deliver reliable solutions. From personalized
              guidance to end-to-end services, we help drive your success
              forward.
            </Text>
          </Box>

          <Flex
            gap={4}
            mt={8}
            flexWrap="wrap"
            justifyContent={{ base: "center", md: "left" }}
          >
            <Button
              as={Link}
              href={CAR_SUBPAGE_KEY.NEW_CAR}
              border="2px solid"
              borderColor="whiteAlpha.700"
              bg="transparent"
              color="white"
              gap={2}
              size={{ base: "sm", sm: "md" }}
              rounded="full"
              px={6}
              _hover={{
                bg: "whiteAlpha.200",
                transform: "scale(1.08)",
                boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
              }}
            >
              <FaCar /> VIEW ALL CARS
            </Button>
            <Button
              as={Link}
              href={CAR_SUBPAGE_KEY.CAR_BOOKING}
              bg="transparent"
              border="2px solid"
              borderColor="whiteAlpha.700"
              color="white"
              gap={2}
              size={{ base: "sm", sm: "md" }}
              rounded="full"
              px={6}
              _hover={{
                bg: "whiteAlpha.200",
                transform: "scale(1.08)",
                boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
              }}
            >
              <FaDownload size=".9rem" /> CAR BOOKING
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
