"use client";
import NotLoggedIn from "@/app/components/not-logged-in";
import { useAuth } from "@/context/AuthProvider";
import { handleGetAllCarValuation } from "@/services/other-apis";
import { ThemeSelect } from "@/utils";
import {
  Box,
  Select,
  Input,
  Button,
  Text,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CarValuationForm = () => {
  const { authenticated } = useAuth();
  const [carValuation, setCarValuation] = useState([]);
  const [formData, setFormData] = useState({
    carId: "",
    year: "",
    km: "",
    condition: "",
    fuel: "Petrol",
    transmission: "Manual",
  });
  const [valuation, setValuation] = useState(null);
  const [details, setDetails] = useState(null);

  const fetchCarValuationData = async () => {
    try {
      const res = await handleGetAllCarValuation();
      setCarValuation(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchCarValuationData();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateValuation = () => {
    if (!formData.carId || !formData.year) {
      alert("Please fill all required fields");
      return;
    }

    const selectedCar = carValuation.find(
      (c) => c.id === Number(formData.carId)
    );
    if (!selectedCar) return;

    let breakdown = {};
    let price = selectedCar.basePrice;
    breakdown.basePrice = selectedCar.basePrice;

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(formData.year);

    let depreciation = Math.pow(0.85, age);
    price *= depreciation;
    breakdown.depreciation = `${age} years old (-${(
      (1 - depreciation) *
      100
    ).toFixed(1)}%)`;

    if (formData.km > 100000) {
      price *= 0.9;
      breakdown.km = "Driven >100,000 km (-10%)";
    } else if (formData.km > 50000) {
      price *= 0.95;
      breakdown.km = "Driven 50,000–100,000 km (-5%)";
    } else {
      breakdown.km = "Driven <50,000 km (No reduction)";
    }

    if (formData.condition === "Excellent") {
      price *= 1.05;
      breakdown.condition = "Excellent (+5%)";
    } else if (formData.condition === "Good") {
      breakdown.condition = "Good (No change)";
    } else if (formData.condition === "Average") {
      price *= 0.9;
      breakdown.condition = "Average (-10%)";
    } else if (formData.condition === "Poor") {
      price *= 0.8;
      breakdown.condition = "Poor (-20%)";
    }

    let fuelAdj = 1;
    switch (formData.fuel) {
      case "Diesel":
        fuelAdj -= 0.03;
        breakdown.fuel = "Diesel (-3%)";
        break;
      case "Electric":
        fuelAdj += 0.08;
        breakdown.fuel = "Electric (+8%)";
        break;
      case "CNG":
        fuelAdj -= 0.02;
        breakdown.fuel = "CNG (-2%)";
        break;
      case "CNG+Petrol":
        fuelAdj -= 0.01;
        breakdown.fuel = "CNG + Petrol (-1%)";
        break;
      default:
        breakdown.fuel = "Petrol (No change)";
        break;
    }

    if (formData.transmission === "Automatic") {
      fuelAdj += 0.03;
      breakdown.transmission = "Automatic (+3%)";
    } else {
      breakdown.transmission = "Manual (No change)";
    }

    price *= fuelAdj;

    const finalPrice = Math.max(price, 20000).toFixed(0);
    setValuation(finalPrice);
    setDetails(breakdown);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {authenticated ? (
        <Box
          maxW="1000px"
          mx="auto"
          mt={7}
          p={4}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          transition="all .5s ease"
          _hover={{ boxShadow: "2xl" }}
        >
          <Text
            textAlign="center"
            fontSize="5xl"
            fontWeight="extrabold"
            color="primary.500"
          >
            CAR VALUATION
          </Text>

          {/* Form Inputs */}
          <HStack spacing={4} align="flex-end" wrap="wrap" mt={5}>
            <FormControl w="200px">
              <FormLabel>Car</FormLabel>
              <ThemeSelect
                placeholder="Select your car"
                onChange={(e) => handleChange("carId", e.target.value)}
              >
                {carValuation.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.company} {car.model}
                  </option>
                ))}
              </ThemeSelect>
            </FormControl>

            <FormControl w="150px">
              <FormLabel>Year</FormLabel>
              <Input
                type="number"
                placeholder="YYYY"
                value={formData.year}
                onChange={(e) => handleChange("year", e.target.value)}
              />
            </FormControl>

            <FormControl w="150px">
              <FormLabel>KMs Driven</FormLabel>
              <Input
                type="number"
                placeholder="e.g. 50000"
                value={formData.km}
                onChange={(e) => handleChange("km", e.target.value)}
              />
            </FormControl>

            <FormControl w="180px">
              <FormLabel>Condition</FormLabel>
              <Select
                value={formData.condition}
                onChange={(e) => handleChange("condition", e.target.value)}
              >
                <option value="">Select</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
              </Select>
            </FormControl>

            <FormControl w="160px">
              <FormLabel>Fuel</FormLabel>
              <Select
                value={formData.fuel}
                onChange={(e) => handleChange("fuel", e.target.value)}
              >
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>CNG+Petrol</option>
              </Select>
            </FormControl>

            <FormControl w="160px">
              <FormLabel>Transmission</FormLabel>
              <Select
                value={formData.transmission}
                onChange={(e) => handleChange("transmission", e.target.value)}
              >
                <option>Manual</option>
                <option>Automatic</option>
              </Select>
            </FormControl>

            <Button
              onClick={calculateValuation}
              rounded="full"
              bg="primary.500"
              color="white.100"
              _hover={{ bg: "primary.700", transform: "scale(1.05)" }}
            >
              Calculate
            </Button>
          </HStack>

          {/* Results */}
          {valuation && (
            <Box mt={6} p={4} borderWidth={1} borderRadius="md" bg="gray.50">
              <Text fontSize="xl" fontWeight="bold" color="teal.600">
                Estimated Value: ₹{valuation}
              </Text>

              <Divider my={3} />

              <VStack align="start" spacing={2}>
                <Text>📌 Actual Price: ₹{details.basePrice}</Text>
                <Text>📉 Depreciation: {details.depreciation}</Text>
                <Text>🚗 KM Driven: {details.km}</Text>
                <Text>⚙️ Condition: {details.condition}</Text>
                <Text>⛽ Fuel: {details.fuel}</Text>
                <Text>🔧 Transmission: {details.transmission}</Text>
              </VStack>

              <HStack spacing={4} mt={4}>
                <Button
                  bg="primary.500"
                  color="white.100"
                  onClick={handlePrint}
                  rounded="full"
                  size="sm"
                  transition="all .5s ease"
                  p={4}
                  _hover={{
                    bg: "primary.600",
                    boxShadow: "lg",
                    transform: "scale(1.1)",
                  }}
                  _disabled={{ bg: "primary.600" }}
                >
                  PDF/Print
                </Button>
              </HStack>
            </Box>
          )}
        </Box>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default CarValuationForm;
