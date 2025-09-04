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
  Image,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { handleLogin } from "@/services/auth-apis";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { color } from "framer-motion";

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
    <Flex alignItems="center" justify="center">
      <Box
        w="35%"
        mx="3rem"
        mt="3rem"
        p={{ base: 6, md: 6 }}
        textAlign="center"
        transition="all 0.3s ease"
        boxShadow="lg"
        rounded="md"
        _hover={{ boxShadow: "2xl" }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src="/assets/13078067.png" alt="##" w={120} />
        </Box>
        <VStack spacing={5} w="100%">
          <FormControl isRequired>
            <FormLabel
              fontSize="sm"
              htmlFor="email"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <MdEmail size="1.1rem" /> Email
            </FormLabel>
            <ThemeInput
              type="email"
              placeholder="e.g ab@gmail.com"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              fontSize="sm"
              htmlFor="password"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <RiLockPasswordFill size="1.1rem" /> Password
            </FormLabel>
            <InputGroup>
              <ThemeInput
                placeholder="e.g 123456789"
                type={showPassword ? "text" : "password"}
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
