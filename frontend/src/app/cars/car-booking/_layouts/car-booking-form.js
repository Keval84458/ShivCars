"use client";
import React, { useEffect, useState } from "react";
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
import {
  getAllNewCars,
  handleCarBooking as carBooking,
} from "@/services/server-apis";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { CAR_SUBPAGE_KEY } from "@/utils/constant";

const CarBookingForm = () => {
  const [carData, setCarData] = useState([]);
  const router = useRouter();

  const fetchCarData = async () => {
    try {
      const res = await getAllNewCars();
      console.log("res", res);
      setCarData(res);
    } catch (err) {
      console.log("err", err);
    }
  };

  const [formData, setFormData] = useState({
    car_id: "",
    customer_name: "",
    email: "",
    mobile_no: "",
    location: "",
    id_proof: "",
    mobile_no: "",
    id_number: "",
    feedback: "",
  });

  const onChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleCarBooking = async () => {
    try {
      const payload = { ...formData };
      console.log("payload", payload);

      const res = await carBooking(payload);
      if (res) {
        Swal.fire({
          title: "Congratulations",
          text: "Your car booked successfuuly",
          icon: "success",
        });
        setFormData({
          car_id: "",
          customer_name: "",
          email: "",
          mobile_no: "",
          location: "",
          id_proof: "",
          mobile_no: "",
          id_number: "",
          feedback: "",
        });
        router.push(CAR_SUBPAGE_KEY.NEW_CAR);
      } else {
        Swal.fire({
          title: "Failed..",
          text: "Some issues, Please try again ",
          icon: "error",
        });
        setFormData({
          car_id: "",
          customer_name: "",
          email: "",
          mobile_no: "",
          location: "",
          id_proof: "",
          mobile_no: "",
          id_number: "",
          feedback: "",
        });
      }
    } catch (err) {
      console.log("err", err);
      alert("❌ Booking failed! Please try again.");
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  return (
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
            value={formData.car_id}
            onChange={(e) => onChange("car_id", e.target.value)}
          >
            {carData.cars &&
              carData.cars
                .filter((data) => data.status !== "Sold")
                .map((data, inx) => (
                  <option key={inx} value={data.id}>
                    {data.carName} (Reg No: {data.regNo})
                  </option>
                ))}
          </ThemeSelect>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Your Name</FormLabel>
          <ThemeInput
            type="text"
            placeholder="e.g ABC"
            value={formData.customer_name}
            onChange={(e) => onChange("customer_name", e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <ThemeInput
            type="email"
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Mobile No</FormLabel>
          <ThemeInput
            type="tel"
            placeholder="+91 00000 00000"
            value={formData.mobile_no}
            onChange={(e) => onChange("mobile_no", e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <ThemeInput
            type="text"
            placeholder="e.g abc, India"
            value={formData.location}
            onChange={(e) => onChange("location", e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>ID Proof</FormLabel>
          <ThemeSelect
            placeholder="Select ID Proof"
            value={formData.id_proof}
            onChange={(e) => onChange("id_proof", e.target.value)}
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
            value={formData.id_number}
            onChange={(e) => onChange("id_number", e.target.value)}
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
  );
};

export default CarBookingForm;
