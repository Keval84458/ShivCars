"use client";
import React, { useState, useEffect } from "react";
import { ThemeInput, ThemeSelect } from "@/utils";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { handleCreateInsurance } from "@/services/server-apis";
import { useAuth } from "@/context/AuthProvider";
import NotLoggedIn from "@/app/components/not-logged-in";

const InsuranceForm = () => {
  const { authenticated } = useAuth();
  const [formData, setFormData] = useState({
    carName: "",
    regNo: "",
    ownerName: "",
    email: "",
    mobileNo: "",
    policyNo: "",
    insuranceProvider: "",
    insuranceType: "",
    premiumAmount: "",
    startDate: "",
    renewalStatus: "",
  });

  const generatePolicyNo = () => {
    const prefix = "POL";
    const timestamp = Date.now();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${timestamp}-${randomNum}`;
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, policyNo: generatePolicyNo() }));
  }, []);

  const onChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const columns = useBreakpointValue({ base: 1, md: 2 });

  const handleSubmitForm = async () => {
    try {
      const payload = { ...formData };

      const response = await handleCreateInsurance(payload);
      console.log("response", response);

      setFormData({
        carName: "",
        regNo: "",
        ownerName: "",
        email: "",
        mobileNo: "",
        policyNo: generatePolicyNo(),
        insuranceProvider: "",
        insuranceType: "",
        premiumAmount: "",
        startDate: "",
        renewalStatus: "",
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      {authenticated ? (
        <Box
          maxW="1000px"
          mx="auto"
          mt={{ base: 4, md: 8 }}
          p={{ base: 4, md: 8 }}
          borderWidth="1px"
          borderRadius="2xl"
          boxShadow="xl"
          bg="white"
          _dark={{ bg: "gray.800" }}
        >
          <Heading
            size="lg"
            mb={8}
            textAlign="center"
            color="teal.600"
            _dark={{ color: "teal.300" }}
          >
            Car Insurance Form
          </Heading>

          <VStack as="form" spacing={6} align="stretch">
            <SimpleGrid columns={columns} spacing={6}>
              <FormControl isRequired>
                <FormLabel>Car Name</FormLabel>
                <ThemeInput
                  name="carName"
                  placeholder="Enter Car Name"
                  value={formData.carName}
                  onChange={(e) => onChange("carName", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Registration No</FormLabel>
                <ThemeInput
                  name="regNo"
                  placeholder="Enter Registration No"
                  value={formData.regNo}
                  onChange={(e) => onChange("regNo", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Owner Name</FormLabel>
                <ThemeInput
                  name="ownerName"
                  placeholder="Enter Owner Name"
                  value={formData.ownerName}
                  onChange={(e) => onChange("ownerName", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <ThemeInput
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => onChange("email", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Mobile No</FormLabel>
                <ThemeInput
                  type="tel"
                  name="mobileNo"
                  placeholder="Enter Mobile No"
                  value={formData.mobileNo}
                  onChange={(e) => onChange("mobileNo", e.target.value)}
                />
              </FormControl>

              <FormControl isReadOnly>
                <FormLabel>Policy No (Auto-generated)</FormLabel>
                <ThemeInput
                  name="policyNo"
                  value={formData.policyNo}
                  readOnly
                  onChange={(e) => onChange("policyNo", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Insurance Provider</FormLabel>
                <ThemeSelect
                  value={formData.insuranceProvider}
                  onChange={(e) =>
                    onChange("insuranceProvider", e.target.value)
                  }
                >
                  <option value="">Select Provider</option>
                  <option value="HDFC ERGO">HDFC ERGO</option>
                  <option value="ICICI Lombard">ICICI Lombard</option>
                  <option value="Bajaj Allianz">Bajaj Allianz</option>
                  <option value="Tata AIG">Tata AIG</option>
                </ThemeSelect>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Insurance Type</FormLabel>
                <ThemeSelect
                  value={formData.insuranceType}
                  onChange={(e) => onChange("insuranceType", e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="Third Party">Third Party</option>
                  <option value="Comprehensive">Comprehensive</option>
                  <option value="Zero Depreciation">Zero Depreciation</option>
                </ThemeSelect>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Premium Amount</FormLabel>
                <ThemeInput
                  type="number"
                  name="premiumAmount"
                  placeholder="Enter Premium"
                  value={formData.premiumAmount}
                  onChange={(e) => onChange("premiumAmount", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Start Date</FormLabel>
                <ThemeInput
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={(e) => onChange("startDate", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Renewal Status</FormLabel>
                <ThemeSelect
                  name="renewalStatus"
                  value={formData.renewalStatus}
                  onChange={(e) => onChange("renewalStatus", e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Expired">Expired</option>
                  <option value="Pending Renewal">Pending Renewal</option>
                </ThemeSelect>
              </FormControl>
            </SimpleGrid>

            <Button
              mt={4}
              type="button"
              colorScheme="teal"
              size="lg"
              w="full"
              _hover={{ transform: "scale(1.02)" }}
              transition="0.2s"
              onClick={handleSubmitForm}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default InsuranceForm;
