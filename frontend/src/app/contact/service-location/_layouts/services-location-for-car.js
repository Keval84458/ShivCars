"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdLocationOn, MdEmail, MdPhone, MdBuild } from "react-icons/md";
import {
  FaCar,
  FaMoneyBillWave,
  FaShieldAlt,
  FaCalculator,
} from "react-icons/fa";

const ServiceLocationForCars = () => {
  return (
    <Flex
      align="center"
      justify="center"
      py={12}
      px={6}
      bg="secondary.50"
      minH="100vh"
    >
      <Box
        maxW="900px"
        w="full"
        bg="white"
        p={10}
        borderRadius="2xl"
        boxShadow="dark-lg"
        transition="all 0.3s"
        _hover={{ transform: "scale(1.02)" }}
      >
        <Heading
          size="xl"
          textAlign="center"
          mb={8}
          color="primary.500"
          fontWeight="extrabold"
        >
          Shiv Cars - Consulting & Services
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
          <VStack spacing={3}>
            <Icon as={MdLocationOn} boxSize={10} color="red.500" />
            <Text fontWeight="bold" fontSize="lg">
              Location
            </Text>
            <Text textAlign="center" fontSize="sm" color="gray.600">
              Old Bus Stand <br /> Near Animal Hospital, 362560
            </Text>
          </VStack>

          <VStack spacing={3}>
            <Icon as={MdEmail} boxSize={10} color="blue.500" />
            <Text fontWeight="bold" fontSize="lg">
              Email
            </Text>
            <Text fontSize="sm" color="gray.600">
              shivcars@gmail.com
            </Text>
          </VStack>

          <VStack spacing={3}>
            <Icon as={MdPhone} boxSize={10} color="green.500" />
            <Text fontWeight="bold" fontSize="lg">
              Call Us
            </Text>
            <Text fontSize="sm" color="gray.600">
              +91 12345 68569
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider my={6} />

        <Heading
          size="lg"
          mb={6}
          textAlign="center"
          color="primary.500"
          transition="all .5s ease"
          _hover={{ transform: "translateY(-5px)" }}
        >
          Our Facilities
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <HStack
            spacing={4}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
          >
            <Icon as={FaCar} boxSize={8} color="orange.500" />
            <Text fontWeight="medium">Second Hand Cars</Text>
          </HStack>

          <HStack
            spacing={4}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
          >
            <Icon as={MdBuild} boxSize={8} color="teal.500" />
            <Text fontWeight="medium">Car Servicing</Text>
          </HStack>

          <HStack
            spacing={4}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
          >
            <Icon as={FaShieldAlt} boxSize={8} color="purple.500" />
            <Text fontWeight="medium">Insurance</Text>
          </HStack>

          <HStack
            spacing={4}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
          >
            <Icon as={FaMoneyBillWave} boxSize={8} color="green.600" />
            <Text fontWeight="medium">Finance</Text>
          </HStack>

          <HStack
            spacing={4}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
          >
            <Icon as={FaCalculator} boxSize={8} color="blue.600" />
            <Text fontWeight="medium">EMI Calculator</Text>
          </HStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default ServiceLocationForCars;
