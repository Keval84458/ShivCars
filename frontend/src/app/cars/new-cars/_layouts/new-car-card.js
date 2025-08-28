"use client";
import React from "react";
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
} from "@chakra-ui/react";
import Link from "next/link";
import { NEW_CAR_SUBPAGE_KEY } from "@/utils/constant";
import { IoCallSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { FaCar } from "react-icons/fa";

const NewCarCard = ({ carData }) => {
  return (
    <Card
      maxW="sm"
      border="2px"
      borderColor="transparent"
      transition="all .5s ease"
      _hover={{ border: "2px", borderColor: "primary.300" }}
      mx={{ base: "auto", sm: "0" }}
    >
      <CardBody>
        <Image
          src={"http://localhost:8001" + carData.carImage}
          alt={carData.carName || "Car Image"}
          borderRadius="lg"
          mx="auto"
          w="100%"
          h="175px"
        />

        <Stack mt="6" spacing="3">
          <Heading
            fontSize={{
              base: "1.5rem",
              sm: ".9rem",
              md: "1rem",
              lg: "1.5rem",
            }}
            as={Flex}
            gap={1}
          >
            {carData.carName}
          </Heading>
          <Flex gap={2}>
            <Text
              color="primary.500"
              fontSize={{
                base: "1.8rem",
                sm: "1.04rem",
                md: ".9rem",
                lg: "1.5rem",
              }}
              as={Flex}
              alignItems="center"
            >
              <FaRupeeSign size="1rem" /> {carData.price}
            </Text>

            <Text as={Flex} alignItems="center" gap={1}>
              <GrStatusGood />
              {carData.status === "Available" ? (
                <Badge
                  bg="green.115"
                  color="white.100"
                  my="auto"
                  p="3px"
                  fontSize=".5rem"
                  rounded="md"
                >
                  {carData.status}
                </Badge>
              ) : carData.status === "Sold" ? (
                <Badge
                  bg="red.66"
                  color="white.100"
                  my="auto"
                  p="3px"
                  fontSize=".5rem"
                  rounded="md"
                >
                  {carData.status}
                </Badge>
              ) : (
                carData.status === "Pending" && (
                  <Badge
                    bg="blue.200"
                    my="auto"
                    p="3px"
                    fontSize=".5rem"
                    rounded="md"
                  >
                    {carData.status}
                  </Badge>
                )
              )}
            </Text>
          </Flex>

          <Box gap={2} display={{ base: "flex", sm: "block", lg: "flex" }}>
            <Text>{carData.regNo}</Text>
            <Text gap={1} as={Flex} alignItems="center">
              <IoCallSharp />
              {carData.contactNo}
            </Text>
          </Box>
        </Stack>

        <Box display={{ base: "flex" }} mt={2} gap={2}>
          <Button
            as={Link}
            href={`${NEW_CAR_SUBPAGE_KEY.CAR_DETAILS}?id=${carData.id}`}
            bg="blue.200"
            size={{ base: "sm", md: "md", lg: "sm" }}
            gap={1}
            _hover={{ bg: "blue.200" }}
            _disabled={{ bg: "blue.200" }}
            onClick={() => handleCarDetailPage(carData)}
          >
            <IoInformationCircle size="1.2rem" /> More Details
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};

export default NewCarCard;
