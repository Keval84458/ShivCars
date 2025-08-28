"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Badge,
  Button,
  HStack,
  VStack,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaStar,
  FaTools,
  FaWallet,
} from "react-icons/fa";

const Feature = ({ icon, title, desc }) => (
  <HStack align="start" spacing={4}>
    <Box as={Icon} p={2} rounded="xl" boxSize={10} bg="primary.100">
      {React.createElement(icon)}
    </Box>
    <VStack align="start" spacing={1}>
      <Text fontWeight="semibold">{title}</Text>
      <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
        {desc}
      </Text>
    </VStack>
  </HStack>
);

const Stat = ({ label, value }) => (
  <VStack spacing={0} align="start">
    <Text fontSize="2xl" fontWeight="bold" color="primary.500">
      {value}
    </Text>
    <Text fontSize="sm" color="black.100">
      {label}
    </Text>
  </VStack>
);

export default function Intro() {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} bg="secondary.100">
      <Container maxW="7xl">
        <Stack spacing={6} textAlign="center" align="center">
          <Badge
            bg="primary.600"
            color="white.100"
            rounded="full"
            px={3}
            py={1}
          >
            Who We Are
          </Badge>

          <Heading
            size={{ base: "lg", md: "xl" }}
            lineHeight="1.2"
            letterSpacing="-0.02em"
          >
            Your Trusted Partner for Car Finance & Care
          </Heading>

          <Text
            maxW="3xl"
            fontSize={{ base: "md", md: "lg" }}
            color="black.100"
          >
            At <b>Shiv Cars</b>, we make car ownership simpler, safer, and
            smarter. From flexible financing that fits your budget to reliable
            servicing and maintenance, we’re built on transparency, trust, and
            top-notch support.
          </Text>

          <HStack spacing={3}>
            <Button
              bg="primary.400"
              color="white.100"
              _hover={{ bg: "black.44", color: "black.100" }}
              size="md"
            >
              Get Started
            </Button>
            <Button
              bg="black.44"
              color="black.100"
              _hover={{ bg: "primary.400", color: "white.100" }}
              size="md"
            >
              Learn More
            </Button>
          </HStack>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={6}
          mt={{ base: 10, md: 14 }}
        >
          <Box p={6} bg="white.100" rounded="2xl" boxShadow="md">
            <Feature
              icon={FaWallet}
              title="Smart Financing"
              desc="Tailored loan options and clear EMIs—no hidden surprises."
            />
            <Divider my={5} />
            <Stat label="Approvals / day" value="50+" />
          </Box>

          <Box p={6} bg="white.100" rounded="2xl" boxShadow="md">
            <Feature
              icon={FaTools}
              title="Reliable Service"
              desc="Expert technicians, quality parts, and on-time delivery."
            />
            <Divider my={5} />
            <Stat label="Service Centers" value="10+" />
          </Box>

          <Box p={6} bg="white.100" rounded="2xl" boxShadow="md">
            <Feature
              icon={FaShieldAlt}
              title="Trust & Transparency"
              desc="Upfront pricing, honest advice, and customer-first support."
            />
            <Divider my={5} />
            <Stat label="Happy Customers" value="25k+" />
          </Box>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={6}
          mt={6}
          opacity={0.95}
        >
          <Box p={5} bg="white.100" rounded="xl" boxShadow="sm">
            <Feature
              icon={FaStar}
              title="Top Ratings"
              desc="Consistently rated high for service quality and support."
            />
          </Box>
          <Box p={5} bg="white.100" rounded="xl" boxShadow="sm">
            <Feature
              icon={FaCheckCircle}
              title="End-to-End Support"
              desc="From booking to delivery—one dedicated team for you."
            />
          </Box>
          <Box p={5} bg="white.100" rounded="xl" boxShadow="sm">
            <Feature
              icon={FaShieldAlt}
              title="Secure & Compliant"
              desc="Best-practice data security and compliant processes."
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
