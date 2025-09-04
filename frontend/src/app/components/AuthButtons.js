"use client";
import React from "react";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "react-toastify";
import { handleLogout } from "@/services/auth-apis";

const AuthButtons = () => {
  const { authenticated, setAuthenticated } = useAuth();

  const handleLogoutUser = async () => {
    try {
      const response = await handleLogout();
      toast.success("Logout Successfully...");
      setAuthenticated(false);
    } catch (err) {
      console.log("Logout failed:", err);
    }
  };

  return (
    <Box display="flex" gap={2}>
      {authenticated ? (
        <Button
          bg="transparent"
          fontFamily="sans-serif"
          _hover={{
            bg: "transparent",
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
          }}
          color="white.100"
          size="sm"
          border="1px"
          rounded="full"
          onClick={handleLogoutUser}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.SIGNUP}
            bg="transparent"
            fontFamily="sans-serif"
            _hover={{
              bg: "transparent",
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
            }}
            color="white.100"
            size="sm"
            border="1px"
            rounded="full"
          >
            Sign-In
          </Button>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.LOGIN}
            bg="transparent"
            fontFamily="sans-serif"
            _hover={{
              bg: "transparent",
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
            }}
            color="white.100"
            size="sm"
            border="1px"
            rounded="full"
          >
            Login
          </Button>
        </>
      )}
    </Box>
  );
};

export default AuthButtons;
