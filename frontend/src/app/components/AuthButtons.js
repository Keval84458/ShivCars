"use client";
import React from "react";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "react-toastify";
import { handleLogout } from "@/services/client-apis";

const AuthButtons = () => {
  const { authenticated, setAuthenticated } = useAuth();

  const handleLogoutUser = async () => {
    try {
      const response = await handleLogout();
      console.log("response", response);
      toast.success("Logout Successfully...");
      setAuthenticated(false);
    } catch (err) {
      console.log("Logout failed:", err);
    }
  };

  return (
    <Box display="flex" gap={2}>
      {authenticated ? (
        <>
          <Button
            backgroundColor="transparent"
            _hover={{ bg: "transparent" }}
            onClick={handleLogoutUser}
            color="white.100"
            size="sm"
            border="1px"
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.LOGIN}
            backgroundColor="transparent"
            _hover={{ bg: "transparent" }}
            color="white.100"
            border="1px"
            size="sm"
          >
            Login
          </Button>
          <Button
            as={Link}
            href={PAGE_PATH_KEYS.SIGNUP}
            backgroundColor="transparent"
            _hover={{ bg: "transparent" }}
            color="white.100"
            border="1px"
            size="sm"
          >
            Signup
          </Button>
        </>
      )}
    </Box>
  );
};

export default AuthButtons;
