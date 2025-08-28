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
    <Flex minH="80vh" align="center" justify="center" px={4}>
      <Box
        w="full"
        maxW="420px"
        p={{ base: 6, md: 8 }}
        rounded="2xl"
        border="2px"
        borderColor="primary.300"
        bg="white"
        boxShadow="2xl"
        textAlign="center"
        _hover={{ boxShadow: "xl" }}
        transition="all 0.3s ease"
      >
        <Heading size="xl" mb={6} color="primary.500" fontWeight="extrabold">
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
            bg="primary.500"
            color="white"
            w="full"
            mt={3}
            size="md"
            borderRadius="full"
            _hover={{ bg: "primary.500", transform: "scale(1.05)" }}
            onClick={handleLoginForm}
            isLoading={loading}
          >
            Login
          </Button>

          <Text fontSize="sm" color="gray.600" textAlign="center">
            Don’t have an account?{" "}
            <Text
              as="span"
              color="primary.500"
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
