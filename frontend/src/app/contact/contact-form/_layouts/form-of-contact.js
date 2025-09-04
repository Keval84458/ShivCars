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
import { handleContactForm } from "@/services/other-apis";
import { useAuth } from "@/context/AuthProvider";
import NotLoggedIn from "@/app/components/not-logged-in";
import { toast } from "react-toastify";

const FormOfContact = () => {
  const { authenticated } = useAuth();
  const [note, setNote] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    mobileNo: "",
    location: "",
    contactDate: "",
    about: "",
  });

  const onChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitContactForm = async () => {
    if (
      !formData.customerName ||
      !formData.email ||
      !formData.mobileNo ||
      !formData.location ||
      !formData.contactDate ||
      formData.about
    ) {
      toast.error("All fields are required...");
    } else {
      try {
        setLoading(true);
        const payload = { ...formData };
        const response = await handleContactForm(payload);

        if (response) {
          setFormData({
            customerName: "",
            email: "",
            mobileNo: "",
            location: "",
            contactDate: "",
            about: "",
          });
          setNote(true);
        } else {
          console.log("Something went wrong:", response);
        }
      } catch (err) {
        console.log("Error submitting form:", err);
      } finally {
        setLoading(false);
      }
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
          _dark={{ bg: "gray.800" }}
        >
          <Heading mb={6} textAlign="center" color="primary.700">
            Contact Form
          </Heading>

          <VStack as="form" spacing={5} align="stretch">
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <ThemeInput
                type="text"
                value={formData.customerName}
                onChange={(e) => onChange("customerName", e.target.value)}
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
              <FormLabel>Mobile</FormLabel>
              <ThemeInput
                type="tel"
                value={formData.mobileNo}
                onChange={(e) => onChange("mobileNo", e.target.value)}
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
                value={formData.contactDate}
                onChange={(e) => onChange("contactDate", e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>About (Specified for Car/Bike)</FormLabel>
              <ThemeTextArea
                value={formData.about}
                onChange={(e) => onChange("about", e.target.value)}
              />
            </FormControl>

            {note && (
              <Text color="blue.500" fontStyle="italic">
                ✔️ Your form has been submitted successfully. Please check your
                email.
              </Text>
            )}

            <Button
              bg="primary.800"
              color="white.100"
              rounded="full"
              size="md"
              _hover={{ transform: "scale(1.02)" }}
              transition="0.2s"
              onClick={handleSubmitContactForm}
              isLoading={loading}
              loadingText="Submitting..."
            >
              SUBMIT
            </Button>
          </VStack>
        </Box>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default FormOfContact;
