"use client";

import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const MotionBox = motion(Box);

const NotFound = () => {
  return (
    <Flex
      minH="100vh"
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
          src="/assets/404.png"
          alt="404 illustration"
          mx="auto"
          boxSize="200px"
          mb={6}
        />

        <Heading as="h1" size="2xl" color="red.500">
          404
        </Heading>
        <Text fontSize="xl" mt={2} fontWeight="semibold">
          Oops! Page Not Found
        </Text>
        <Text color="gray.600" mt={2}>
          The page you’re looking for doesn’t exist or has been moved.
        </Text>

        <Flex mt={6} justify="center" gap={4}>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.HOME}
            bg="primary.400"
            color="white.100"
            size="md"
            rounded="full"
            px={8}
            shadow="md"
            _hover={{ transform: "scale(1.05)" }}
          >
            Go Home
          </Button>
        </Flex>
      </MotionBox>
    </Flex>
  );
};

export default NotFound;
