"use client";
import React, { useEffect, useState } from "react";
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
  Spinner,
  Center,
  Text,
} from "@chakra-ui/react";
import { FaSearch, FaArrowAltCircleLeft, FaDownload } from "react-icons/fa";
import NewCarCard from "./new-car-card";
import Link from "next/link";
import { CAR_SUBPAGE_KEY, PAGE_PATH_KEYS } from "@/utils/constant";

const NewCarGrid = ({ allCars }) => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (allCars?.cars) {
      setTimeout(() => {
        setCars(allCars.cars);
        setLoading(false);
      }, 800);
    } else {
      setLoading(false);
    }
  }, [allCars]);

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
            aria-label="Go Back"
            bg="primary.600"
            color="white.100"
            icon={<FaArrowAltCircleLeft size="1.4rem" />}
            _hover={{ bg: "primary.600" }}
            _disabled={{ bg: "primary.600" }}
          />
          <FormControl isRequired>
            <InputGroup w="100%">
              <ThemeInput id="search" type="text" placeholder="Search" />
              <InputRightElement>
                <IconButton
                  size="lg"
                  variant="ghost"
                  aria-label="Search"
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
        </Flex>
      </Box>

      <Box mt={4}>
        {loading ? (
          <Center py={10} flexDirection="column" gap={3}>
            <Spinner size="xl" color="primary.600" thickness="4px" />
            <Text fontSize="lg" color="gray.600">
              Loading cars...
            </Text>
          </Center>
        ) : cars.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
            {cars
              .filter(
                (data) => data.status !== "Sold" && data.status !== "Pending"
              )
              .map((carData, inx) => (
                <Box key={inx}>
                  <NewCarCard carData={carData} />
                </Box>
              ))}
          </SimpleGrid>
        ) : (
          <Center py={10}>
            <Text fontSize="lg" color="gray.500">
              No cars available 🚗
            </Text>
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default NewCarGrid;
