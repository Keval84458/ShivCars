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
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { handleSignup } from "@/services/server-apis";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const onChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleSignUpForm = async () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      toast.error("All fields are required");
    } else {
      if (formData.password === formData.confirmPassword) {
        try {
          const { confirmPassword, ...payload } = formData;
          const response = await handleSignup(payload);
          if (response.status === 201) {
            toast.success("Account created successfully!");
            router.push(PAGE_PATH_KEYS.LOGIN);
          } else {
            toast.error("User not registered...");
          }
        } catch (err) {
          toast.error("Something went wrong...");
        }
      } else {
        toast.warn("Confirm Password does not match...");
      }
    }
  };

  return (
    <Box
      maxW={useBreakpointValue({ base: "95%", sm: "420px" })}
      mx="auto"
      mt={{ base: 6, md: 12 }}
      p={{ base: 5, md: 8 }}
      borderRadius="2xl"
      bg="white"
      boxShadow="2xl"
      _hover={{ boxShadow: "xl" }}
      transition="all 0.3s ease"
    >
      <Heading
        size={useBreakpointValue({ base: "md", md: "lg" })}
        mb={6}
        textAlign="center"
        bgGradient="linear(to-r, blue.500, purple.500)"
        bgClip="text"
      >
        Create Your Account
      </Heading>

      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel fontSize="sm" htmlFor="name">
            Name
          </FormLabel>
          <ThemeInput
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="sm" htmlFor="email">
            Email
          </FormLabel>
          <ThemeInput
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="sm" htmlFor="password">
            Password
          </FormLabel>
          <InputGroup>
            <ThemeInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
            <InputRightElement>
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="Toggle Password"
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={() => setShowPassword(!showPassword)}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="sm" htmlFor="confirmPassword">
            Confirm Password
          </FormLabel>
          <InputGroup>
            <ThemeInput
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => onChange("confirmPassword", e.target.value)}
            />
            <InputRightElement>
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="Toggle Confirm Password"
                icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          w="full"
          mt={3}
          size="md"
          borderRadius="full"
          _hover={{ bgGradient: "linear(to-r, blue.600, purple.600)" }}
          onClick={handleSignUpForm}
        >
          Sign Up
        </Button>

        <Text fontSize="sm" color="gray.600" textAlign="center">
          Already have an account?{" "}
          <Text
            as="span"
            color="blue.500"
            fontWeight="semibold"
            cursor="pointer"
            onClick={() => router.push(PAGE_PATH_KEYS.LOGIN)}
          >
            Login
          </Text>
        </Text>
      </VStack>
    </Box>
  );
};

export default SignUpForm;
