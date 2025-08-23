"use client";
import React from "react";
import { ThemeInput } from "@/utils";
import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import NewCarCard from "./new-car-card";

const NewCarGrid = () => {
  return (
    <Box>
      <Box
        display={{ md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex>
          <FormControl isRequired>
            <InputGroup w="100%">
              <ThemeInput
                id="password"
                type="text"
                placeholder="Enter your password"
              />
              <InputRightElement>
                <IconButton
                  size="lg"
                  variant="ghost"
                  aria-label="Toggle Password"
                  icon={<FaSearch />}
                  _hover={{ bg: "transparent" }}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
        <Button mt={{ base: ".5rem", md: "0" }}>Create New Car</Button>
      </Box>
      <Box mt={2}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
          <Box>
            <NewCarCard />
          </Box>
          <Box>
            <NewCarCard />
          </Box>
          <Box>
            <NewCarCard />
          </Box>
          <Box>
            <NewCarCard />
          </Box>
          <Box>
            <NewCarCard />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default NewCarGrid;
