"use client";
import { ThemeInput, ThemeSelect } from "@/utils";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CarBookingForm = ({ carData }) => {
  console.log("carData", carData.cars);

  const [formData, setFormData] = useState({
    carId: "",
    customerName: "",
    email: "",
    mobileNo: "",
    location: "",
    idProof: "",
    idNo: "",
    feedback: "",
  });

  const onChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleCarBooking = () => {
    console.log("formData", formData);
  };

  return (
    <>
      <Box
        maxW="550px"
        mx="auto"
        mt={10}
        p={6}
        borderWidth="1px"
        borderRadius="2xl"
        boxShadow="xl"
        transition="all .5s ease"
        _hover={{ boxShadow: "2xl" }}
        bg="white"
      >
        <Heading
          size="lg"
          textAlign="center"
          mb={6}
          color="blue.300"
          fontWeight="bold"
        >
          Car Booking Form
        </Heading>

        <VStack spacing={5} align="stretch">
          <FormControl isRequired>
            <FormLabel>Car Name</FormLabel>
            <ThemeSelect
              placeholder="Select Car"
              value={formData.carId}
              onChange={(e) => onChange("carId", e.target.value)}
            >
              {carData.cars &&
                carData.cars.map((data, inx) => (
                  <option key={inx} value={data.id}>
                    {data.carName} (Reg No:{data.regNo})
                  </option>
                ))}
            </ThemeSelect>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Your Name</FormLabel>
            <ThemeInput
              type="text"
              placeholder="e.g ABC"
              value={formData.customerName}
              onChange={(e) => onChange("customerName", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <ThemeInput
              type="text"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mobile No</FormLabel>
            <ThemeInput
              type="number"
              placeholder="+91 00000 00000"
              value={formData.mobileNo}
              onChange={(e) => onChange("mobileNo", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <ThemeInput
              type="text"
              placeholder="e.g abc,India"
              value={formData.location}
              onChange={(e) => onChange("location", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>ID Proof</FormLabel>
            <ThemeSelect
              placeholder="Select ID Proof"
              value={formData.idProof}
              onChange={(e) => onChange("idProof", e.target.value)}
            >
              <option value="Aadhar Card">Aadhar Card</option>
              <option value="PAN Card">PAN Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Passport">Passport</option>
            </ThemeSelect>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>ID Number</FormLabel>
            <Input
              type="text"
              placeholder="0000 0000 0000"
              value={formData.idNo}
              onChange={(e) => onChange("idNo", e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Feedback</FormLabel>
            <Select
              placeholder="How was your booking experience?"
              value={formData.feedback}
              onChange={(e) => onChange("feedback", e.target.value)}
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </Select>
          </FormControl>

          <Button
            type="submit"
            bg="blue.500"
            size="lg"
            w="full"
            _hover={{ bg: "blue.600" }}
            color="white"
            fontWeight="bold"
            borderRadius="xl"
            boxShadow="md"
            onClick={handleCarBooking}
          >
            Book Now
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default CarBookingForm;
