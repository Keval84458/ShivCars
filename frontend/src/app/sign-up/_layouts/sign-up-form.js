"use client";
import React, { useState } from "react";
import { ThemeInput } from "@/utils";
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Heading,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { handleSignup } from "@/services/server-apis";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const onChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleSignUpForm = async () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      toast.error("All fietld are required");
    } else {
      if (formData.password === formData.confirmPassword) {
        try {
          const { confirmPassword, ...payload } = formData;
          const response = await handleSignup(payload);
          if (response.status === 201) {
            router.push(PAGE_PATH_KEYS.LOGIN);
          } else {
            toast.error("User not register...");
          }
        } catch (err) {}
      } else {
        toast.warn("Confirm Password do not matched...");
      }
    }
  };

  return (
    <>
      <Box
        maxW={useBreakpointValue({ base: "90%", sm: "400px" })}
        mx="auto"
        mt={{ base: 6, md: 10 }}
        p={{ base: 4, md: 6 }}
        boxShadow="lg"
        borderRadius="lg"
        bg="white"
      >
        <Heading
          size={useBreakpointValue({ base: "md", md: "lg" })}
          mb={6}
          textAlign="center"
          color="brand.500"
        >
          Create Account
        </Heading>

        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Name</FormLabel>
            <ThemeInput
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
            <ThemeInput
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Password</FormLabel>
            <ThemeInput
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>
              Confirm Password
            </FormLabel>
            <ThemeInput
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => onChange("confirmPassword", e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="blue"
            size={useBreakpointValue({ base: "sm", md: "md" })}
            w="full"
            mt={4}
            type="submit"
            _hover={{ bg: "blue.600" }}
            onClick={handleSignUpForm}
          >
            Sign Up
          </Button>

          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color="gray.500"
            textAlign="center"
          >
            Already have an account?{" "}
            <Text as="span" color="blue.500" cursor="pointer">
              Login
            </Text>
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default SignUpForm;

// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) UNIQUE NOT NULL,
//   password VARCHAR(255) NOT NULL
// );
