"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Badge,
  VStack,
} from "@chakra-ui/react";

const CarDetailsCard = ({ carData }) => {
  console.log("carData");
  const router = useRouter();
  const car = carData.cars[0];

  return (
    <Card
      maxW="5xl"
      mx="auto"
      my={6}
      shadow="xl"
      borderRadius="2xl"
      overflow="hidden"
      transition="all .5s ease"
      _hover={{ transform: "scale(1.01)", shadow: "2xl" }}
    >
      <CardHeader bg="blue.100" p={{ base: 3, md: 5 }}>
        <Heading
          size={{ base: "sm", md: "lg" }}
          textAlign="center"
          color="blue.700"
        >
          Car Details
        </Heading>
      </CardHeader>

      <Divider />

      <CardBody p={{ base: 3, md: 6 }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 6 }}
          align="center"
        >
          <Box w={{ base: "100%", md: "40%" }}>
            <Image
              src={"http://localhost:8001" + car.carImage}
              alt={car.carName || "Car Image"}
              borderRadius="lg"
              mx="auto"
              w={{ base: "80%", sm: "70%", md: "90%" }}
              maxW="400px"
              h={{ base: "180px", md: "240px" }}
              objectFit="cover"
              shadow="md"
            />
          </Box>

          <Box
            w={{ base: "100%", md: "60%" }}
            p={{ base: 3, md: 5 }}
            bg="gray.50"
            borderRadius="md"
            shadow="sm"
          >
            <Stack spacing={2} fontSize={{ base: "sm", md: "md" }}>
              <Text>
                <strong>Car Name:</strong> {car.carName}
              </Text>
              <Text>
                <strong>Owner Name:</strong> {car.ownerName}
              </Text>
              <Text>
                <strong>Model:</strong> {car.model}
              </Text>
              <Text>
                <strong>Price:</strong>{" "}
                <Badge
                  colorScheme="green"
                  fontSize={{ base: "sm", md: "md" }}
                  p={1}
                  borderRadius="md"
                >
                  ₹ {car.price}
                </Badge>
              </Text>
              <Text>
                <strong>Contact No:</strong> {car.contactNo}
              </Text>
              <Text>
                <strong>Registration No:</strong> {car.regNo}
              </Text>
            </Stack>
          </Box>
        </Stack>

        <Box
          mt={6}
          p={{ base: 3, md: 5 }}
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
        >
          <Heading size="sm" mb={2} color="blue.600">
            Other Details
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>
              <strong>Address: </strong>
              {car.address || "Not Provided"}
            </Text>
            <Text>
              <strong>Status: </strong>
              {car.status === "Available" ? (
                <Badge
                  bg="green.115"
                  color="white.100"
                  my="auto"
                  p="3px"
                  fontSize=".5rem"
                  rounded="md"
                >
                  {car.status}
                </Badge>
              ) : car.status === "Sold" ? (
                <Badge
                  bg="red.66"
                  color="white.100"
                  my="auto"
                  p="3px"
                  fontSize=".5rem"
                  rounded="md"
                >
                  {car.status}
                </Badge>
              ) : car.status === "Booked" ? (
                <Badge
                  bg="yellow.spark"
                  my="auto"
                  p="3px"
                  fontSize=".5rem"
                  rounded="md"
                >
                  {car.status}
                </Badge>
              ) : (
                car.status === "Pending" && (
                  <Badge
                    bg="blue.200"
                    my="auto"
                    p="3px"
                    fontSize=".5rem"
                    rounded="md"
                  >
                    {car.status}
                  </Badge>
                )
              )}
            </Text>
            <Text>
              <strong>Description: </strong>
              {car.description || "No description available."}
            </Text>
          </VStack>
        </Box>

        <Box textAlign="center" mt={6} gap={2}>
          <Button
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
            mr={2}
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CarDetailsCard;
