"use client";
import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const MotionBox = motion(Box);

const NotLoggedIn = () => {
  return (
    <Flex
      minH="80vh"
      align="center"
      justify="center"
      bg="secondary.50"
      px={6}
      textAlign="center"
    >
      <MotionBox
        p={8}
        maxW="lg"
        borderWidth={1}
        borderRadius="2xl"
        bg="white"
        shadow="xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
          alt="Login Required"
          mx="auto"
          boxSize="120px"
          mb={6}
        />

        <Heading as="h1" size="xl" color="primary.400">
          You are not logged in
        </Heading>
        <Text fontSize="lg" mt={3} color="black.100">
          To access this page, please log in to your account.
        </Text>

        <Flex mt={6} justify="center">
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.LOGIN}
            bg="primary.400"
            color="white.100"
            size="md"
            rounded="full"
            px={8}
            shadow="md"
            _hover={{ transform: "scale(1.05)" }}
          >
            Login Now
          </Button>
        </Flex>

        <Text fontSize="sm" color="black.39" mt={4}>
          Don’t have an account?{" "}
          <Link
            href={PAGE_PATH_KEYS.SIGNUP}
            style={{ color: "#cf8a49ff", fontWeight: "600" }}
          >
            Sign Up
          </Link>
        </Text>
      </MotionBox>
    </Flex>
  );
};

export default NotLoggedIn;
