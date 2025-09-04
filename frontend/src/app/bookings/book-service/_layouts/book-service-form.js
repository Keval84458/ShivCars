"use client";
import React, { useState } from "react";
import { ThemeInput, ThemeTextArea } from "@/utils";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthProvider";
import NotLoggedIn from "@/app/components/not-logged-in";

const BookServiceForm = () => {
  const { authenticated } = useAuth();
  const [formData, setFormData] = useState({
    vehicleName: "",
    regNo: "",
    yourName: "",
    email: "",
    location: "",
    bookingDate: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);

  const onChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceBooking = async () => {
    setLoading(true);
    try {
      const payload = { ...formData };
      const response = await axios.post(
        "http://localhost:8001/api/service-booking",
        payload
      );
      console.log("response", response.data);

      toast.success("✅ Booking Successful");

      setFormData({
        vehicleName: "",
        regNo: "",
        yourName: "",
        email: "",
        location: "",
        bookingDate: "",
        details: "",
      });
    } catch (err) {
      console.log("err", err);
      toast({
        title: "❌ Booking Failed",
        description: "Something went wrong, please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {authenticated ? (
        <Box
          maxW="600px"
          mx="auto"
          mt={{ base: 4, md: 8 }}
          p={{ base: 4, md: 6 }}
          borderWidth="1px"
          borderRadius="2xl"
          boxShadow="lg"
          bg="white"
        >
          <Heading mb={6} textAlign="center" color="primary.500">
            Service Booking Form
          </Heading>

          <VStack as="form" spacing={5} align="stretch">
            <FormControl isRequired>
              <FormLabel>Vehicle Name</FormLabel>
              <ThemeInput
                type="text"
                value={formData.vehicleName}
                onChange={(e) => onChange("vehicleName", e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Reg No</FormLabel>
              <ThemeInput
                type="text"
                value={formData.regNo}
                onChange={(e) => onChange("regNo", e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <ThemeInput
                type="text"
                value={formData.yourName}
                onChange={(e) => onChange("yourName", e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <ThemeInput
                type="email"
                value={formData.email}
                onChange={(e) => onChange("email", e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <ThemeInput
                type="text"
                value={formData.location}
                onChange={(e) => onChange("location", e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <ThemeInput
                type="date"
                value={formData.bookingDate}
                onChange={(e) => onChange("bookingDate", e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Details</FormLabel>
              <ThemeTextArea
                value={formData.details}
                onChange={(e) => onChange("details", e.target.value)}
              />
            </FormControl>

            <Box display="flex" justifyContent="center">
              <Button
                mt={4}
                type="button"
                bg="primary.500"
                color="white.100"
                size="md"
                w="sm"
                _hover={{ transform: "scale(1.02)", bg: "primary.600" }}
                transition="0.2s"
                onClick={handleServiceBooking}
                isLoading={loading}
                loadingText="Submitting..."
              >
                SUBMIT
              </Button>
            </Box>
          </VStack>
        </Box>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default BookServiceForm;
