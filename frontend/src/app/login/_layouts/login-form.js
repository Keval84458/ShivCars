"use client";
import React, { useState } from "react";
import { ThemeInput } from "@/utils";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { handleLogin } from "@/services/client-apis";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { setAuthenticated } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleLoginForm = async () => {
    console.log(formData);
    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("All fields are required ❌");
      return;
    }
    try {
      setLoading(true);
      const response = await handleLogin(formData);
      if (response?.status === 200) {
        toast.success("✅ Login successful!");
        setAuthenticated(true);
        router.push(PAGE_PATH_KEYS.HOME);
      } else {
        toast.error(response?.data?.msg || "Invalid credentials");
      }
    } catch (err) {
      toast.error("⚠️ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      px={4}
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
      <Box w="full" rounded="2xl">
        <Heading
          size={useBreakpointValue({ base: "lg", md: "xl" })}
          mb={6}
          textAlign="center"
          bgGradient="linear(to-r, blue.500, purple.500)"
          bgClip="text"
        >
          Login
        </Heading>

        <VStack spacing={5}>
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

          <Button
            colorScheme="blue"
            w="full"
            mt={3}
            size="md"
            borderRadius="full"
            _hover={{ bgGradient: "linear(to-r, blue.600, purple.600)" }}
            onClick={handleLoginForm}
          >
            Login
          </Button>

          <Text fontSize="sm" color="gray.600" textAlign="center">
            Don’t have an account?
            <Text
              as="span"
              color="blue.500"
              fontWeight="semibold"
              cursor="pointer"
              onClick={() => router.push(PAGE_PATH_KEYS.SIGNUP)}
            >
              Sign Up
            </Text>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LoginForm;
