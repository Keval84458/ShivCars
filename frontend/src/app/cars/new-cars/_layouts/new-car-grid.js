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
import { FaSearch, FaArrowAltCircleLeft, FaDownload } from "react-icons/fa";
import NewCarCard from "./new-car-card";
import { MdCreate } from "react-icons/md";
import Link from "next/link";
import { CAR_SUBPAGE_KEY, PAGE_PATH_KEYS } from "@/utils/constant";

const NewCarGrid = ({ allCars }) => {
  return (
    <Box>
      <Box
        display={{ md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap={2}>
          <IconButton
            as={Link}
            href={PAGE_PATH_KEYS.HOME}
            size="md"
            variant="ghost"
            aria-label="Toggle Password"
            bg="primary.600"
            color="white.100"
            icon={<FaArrowAltCircleLeft size="1.4rem" />}
            _hover={{ bg: "primary.600" }}
            _disabled={{ bg: "primary.600" }}
          />
          <FormControl isRequired>
            <InputGroup w="100%">
              <ThemeInput id="password" type="text" placeholder="Search" />
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
        <Flex>
          <Button
            as={Link}
            href={CAR_SUBPAGE_KEY.CAR_BOOKING}
            mt={{ base: ".5rem", md: "0" }}
            bg="primary.700"
            color="white.100"
            size="md"
            _hover={{ bg: "primary.700" }}
            _disabled={{ bg: "primary.700" }}
            gap={1}
          >
            Booking <FaDownload />
          </Button>
          {/* <Button
            as={Link}
            href={NEW_CAR_SUBPAGE_KEY.CREATE_NEW_CAR}
            mt={{ base: ".5rem", md: "0" }}
            bg="primary.700"
            color="white.100"
            size="sm"
            _hover={{ bg: "primary.700" }}
            _disabled={{ bg: "primary.700" }}
            gap={1}
          >
            Create New <MdCreate size="1.2rem" />
          </Button> */}
        </Flex>
      </Box>
      <Box mt={2}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
          {allCars.cars &&
            allCars.cars.map((carData, inx, arr) => (
              <Box key={inx}>
                <NewCarCard carData={carData} />
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default NewCarGrid;
