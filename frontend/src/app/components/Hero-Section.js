"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import Link from "next/link";
import { CAR_SUBPAGE_KEY } from "@/utils/constant";

const HeroSection = () => {
  return (
    <Box
      position="relative"
      bgImage="url('/assets/hero image.jpg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      minH={{ base: "60vh", md: "100vh" }}
      color="white"
      p={2}
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
          Hey, Welcome to{" "}
        </Text>

        <Text
          fontSize={{ base: "4rem", sm: "4rem", md: "9rem" }}
          lineHeight={1}
          fontWeight="bold"
        >
          SHIV CARS
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
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Text>
          <Image
            src="/assets/0-Car-Sports-Car-3840x2160-unscreen.gif"
            alt="GIF Image"
            width={{ base: "5rem", md: "12rem" }}
          />
        </Box>
        <Box width={{ md: "50%" }} mt={{ base: "1rem", md: "0" }}>
          <Text>
            At Shiv Cars Consulting & Services, we combine expertise with
            innovation to deliver reliable solutions. From personalized guidance
            to end-to-end services, we help drive your success forward.
          </Text>
          <Button
            as={Link}
            href={CAR_SUBPAGE_KEY.NEW_CAR}
            bg="transparent"
            border="1px"
            borderColor="white.100"
            color="white.100"
            gap={2}
            mt="2rem"
            size="lg"
            _hover={{ bg: "transparent", transform: "scale(1.05)" }}
            _disabled={{ bg: "transparent" }}
          >
            <FaCar /> VIEW ALL CARS
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
