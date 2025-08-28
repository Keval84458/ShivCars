"use client";
import React, { useEffect, useState } from "react";
import { ThemeInput, ThemeTextArea } from "@/utils";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Select,
  VStack,
  Card,
  CardBody,
  HStack,
} from "@chakra-ui/react";
import { getAllCarCompony, addNewCar } from "@/services/server-apis";
import { useRouter } from "next/navigation";
import { CAR_SUBPAGE_KEY } from "@/utils/constant";
import Link from "next/link";
import { FaBackward } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import NotLoggedIn from "@/app/components/not-logged-in";

const CreateNewCarForm = () => {
  const { authenticated } = useAuth();
  const [carCompony, setCarCompony] = useState([]);
  const [formData, setFormData] = useState({
    carImage: null,
    companyId: "",
    carName: "",
    address: "",
    model: "",
    price: "",
    contactNo: "",
    status: "",
    ownerName: "",
    owner: "",
    regNo: "",
    description: "",
  });

  const router = useRouter();

  const onChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const fetchAllCarCompony = async () => {
    try {
      const response = await getAllCarCompony();
      setCarCompony(response.companies || []);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });

      const res = await addNewCar(formDataToSend);
      router.push(CAR_SUBPAGE_KEY.NEW_CAR);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleBack = () => {
    setFormData({
      carImage: null,
      companyId: "",
      carName: "",
      address: "",
      model: "",
      price: "",
      contactNo: "",
      status: "",
      ownerName: "",
      owner: "",
      regNo: "",
      description: "",
    });
  };

  useEffect(() => {
    fetchAllCarCompony();
  }, []);

  return (
    <>
      {authenticated ? (
        <Box display={{ base: "block", md: "flex" }} gap={6} p={6}>
          <Card
            w={{ base: "100%", md: "60%" }}
            borderRadius="2xl"
            boxShadow="2xl"
            overflow="hidden"
          >
            <CardBody p={6}>
              <Heading
                mb={6}
                textAlign="center"
                size="lg"
                bgGradient="linear(to-tr, primary.200, primary.400, primary.800)"
                bgClip="text"
              >
                Add New Car
              </Heading>

              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Select
                    placeholder="Select Company"
                    value={formData.companyId}
                    onChange={(e) => onChange("companyId", e.target.value)}
                  >
                    {carCompony.map((options, inx) => (
                      <option key={inx} value={options.id}>
                        {options.companyName}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Car Name</FormLabel>
                  <ThemeInput
                    type="text"
                    value={formData.carName}
                    onChange={(e) => onChange("carName", e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <ThemeTextArea
                    value={formData.address}
                    onChange={(e) => onChange("address", e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Model</FormLabel>
                  <ThemeInput
                    type="date"
                    value={formData.model}
                    onChange={(e) => onChange("model", e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <ThemeInput
                    type="number"
                    value={formData.price}
                    onChange={(e) => onChange("price", e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Contact No</FormLabel>
                  <ThemeInput
                    type="tel"
                    placeholder="+91 9876543210"
                    maxLength={15}
                    value={formData.contactNo}
                    onChange={(e) => onChange("contactNo", e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Status</FormLabel>
                  <Select
                    value={formData.status}
                    onChange={(e) => onChange("status", e.target.value)}
                    placeholder="Select Status"
                  >
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                    <option value="pending">Pending</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Owner Name</FormLabel>
                  <ThemeInput
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => onChange("ownerName", e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Owner</FormLabel>
                  <ThemeInput
                    type="number"
                    value={formData.owner}
                    onChange={(e) => onChange("owner", e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Reg. No.</FormLabel>
                  <ThemeInput
                    type="text"
                    value={formData.regNo}
                    onChange={(e) => onChange("regNo", e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <ThemeTextArea
                    value={formData.description}
                    onChange={(e) => onChange("description", e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Car Image</FormLabel>
                  <ThemeInput
                    type="file"
                    accept="image/*"
                    border={0}
                    onChange={(e) => onChange("carImage", e.target.files[0])}
                  />
                </FormControl>
              </VStack>

              <HStack mt={6}>
                <Button
                  as={Link}
                  href={CAR_SUBPAGE_KEY.NEW_CAR}
                  bgGradient="linear(to-r, primary.200, primary.400, primary.700)"
                  color="white"
                  transition="all .4s ease"
                  _hover={{
                    bgGradient: "linear(to-r, primary.140, primary.800)",
                    transform: "scale(1.05)",
                  }}
                  width="full"
                  rounded="xl"
                  size="sm"
                  gap={2}
                  onClick={handleBack}
                >
                  <FaBackward />
                  Back
                </Button>

                <Button
                  bgGradient="linear(to-r, primary.200, primary.400, primary.700)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, primary.140, primary.800)",
                    transform: "scale(1.05)",
                  }}
                  width="full"
                  onClick={handleSubmit}
                  rounded="xl"
                  transition="all .4s ease"
                  size="sm"
                  gap={2}
                >
                  <FaCarAlt />
                  Submit
                </Button>
              </HStack>
            </CardBody>
          </Card>
        </Box>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default CreateNewCarForm;
