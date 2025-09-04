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
  Flex,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { handleSignup } from "@/services/auth-apis";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
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
          setLoading(true);
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
        } finally {
          setLoading(false);
        }
      } else {
        toast.warn("Confirm Password does not match...");
      }
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        w="35%"
        mx="3rem"
        mt=".8rem"
        p={{ base: 6, md: 6 }}
        textAlign="center"
        transition="all 0.3s ease"
        boxShadow="lg"
        rounded="md"
        _hover={{ boxShadow: "2xl" }}
      >
        <Heading
          size="lg"
          mb={6}
          color="primary.500"
          fontWeight="extrabold"
          textAlign="center"
        >
          Register
        </Heading>

        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel
              fontSize="sm"
              htmlFor="name"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FaUser /> Name
            </FormLabel>
            <ThemeInput
              id="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </FormControl>

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
              placeholder="abc@gmail.com"
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
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="e.g 123"
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
            <FormLabel
              fontSize="sm"
              htmlFor="confirmPassword"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <RiLockPasswordFill size="1.1rem" /> Confirm Password
            </FormLabel>
            <InputGroup>
              <ThemeInput
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="e.g 123"
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
            bg="primary.500"
            color="white"
            w="full"
            size="md"
            borderRadius="full"
            _hover={{ bg: "primary.500", transform: "scale(1.05)" }}
            onClick={handleSignUpForm}
            isLoading={loading}
          >
            Sign Up
          </Button>

          <Text fontSize="sm" color="gray.600" textAlign="center">
            Already have an account?
            <Text
              as="span"
              color="primary.500"
              fontWeight="semibold"
              cursor="pointer"
              onClick={() => router.push(PAGE_PATH_KEYS.LOGIN)}
            >
              Login
            </Text>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
