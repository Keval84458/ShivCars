"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Badge,
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { NEW_CAR_SUBPAGE_KEY } from "@/utils/constant";
import { FaRupeeSign, FaArrowCircleRight } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

const getStatusBadge = (status) => {
  const baseStyle = {
    px: 2,
    py: 1,
    fontSize: "0.7rem",
    rounded: "md",
    fontWeight: "semibold",
  };

  switch (status) {
    case "Available":
      return (
        <Badge {...baseStyle} bg="green.400" color="white">
          {status}
        </Badge>
      );
    case "Sold":
      return (
        <Badge {...baseStyle} bg="red.400" color="white">
          {status}
        </Badge>
      );
    case "Pending":
      return (
        <Badge {...baseStyle} bg="blue.400" color="white">
          {status}
        </Badge>
      );
    default:
      return (
        <Badge {...baseStyle} bg="gray.400" color="white">
          Unknown
        </Badge>
      );
  }
};

const NewCarCard = ({ carData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        maxW="sm"
        borderWidth="1px"
        borderColor="gray.200"
        transition="all .4s ease"
        _hover={{
          transform: "scale(1.04)",
          boxShadow: "2xl",
          borderColor: "primary.300",
          bgGradient: "linear(to-b, white, gray.50)",
        }}
        mx={{ base: "auto", sm: "0" }}
        rounded="xl"
        overflow="hidden"
        shadow="md"
      >
        <Box overflow="hidden" p={2} cursor="pointer" onClick={onOpen}>
          <Image
            src={"http://localhost:8001" + carData.carImage}
            alt={carData.carName || "Car Image"}
            w="100%"
            h="200px"
            objectFit="cover"
            transition="all .4s ease"
            rounded="2xl"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Box>

        <CardBody>
          <Stack spacing={3}>
            <Heading fontSize={{ base: "1.2rem", md: "1.4rem" }} noOfLines={1}>
              {carData.carName}
            </Heading>

            <Flex align="center" justify="space-between">
              <Text
                color="secondary.700"
                fontSize={{ base: "1rem", md: "1.2rem" }}
                fontWeight="bold"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <FaRupeeSign size="0.9rem" /> {carData.price}
              </Text>
              <Flex align="center" gap={1}>
                <GrStatusGood />
                {getStatusBadge(carData.status)}
              </Flex>
            </Flex>

            <Button
              as={Link}
              href={`${NEW_CAR_SUBPAGE_KEY.CAR_DETAILS}?id=${carData.id}`}
              mt={2}
              w="100%"
              bg="blue.500"
              color="white"
              size="sm"
              gap={2}
              transition="all .3s ease"
              _hover={{
                bg: "blue.600",
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
            >
              More Details
              <FaArrowCircleRight size="1rem" />
            </Button>
          </Stack>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay bg="rgba(0,0,0,0.6)" backdropFilter="blur(10px)" />
        <ModalContent bg="transparent" shadow="none">
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image
              src={"http://localhost:8001" + carData.carImage}
              alt={carData.carName || "Car Image"}
              w="400px"
              h="300px"
              borderRadius="lg"
              boxShadow="2xl"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewCarCard;
