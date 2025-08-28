"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Button,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ThemeInput, ThemeSelect } from "@/utils";
import { handleCreateFinance } from "@/services/server-apis";
import { toast } from "react-toastify";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { useAuth } from "@/context/AuthProvider";
import NotLoggedIn from "@/app/components/not-logged-in";

const CarFinanceForm = () => {
  const { authenticated } = useAuth();
  const [formData, setFormData] = useState({
    vehicleName: "",
    regNo: "",
    ownerName: "",
    email: "",
    mobileNo: "",
    loanProvider: "",
    loanAmount: "",
    months: "",
    interestRate: "",
    emiAmount: "",
    totalPayableAmount: "",
    startDate: "",
    status: "",
  });

  const calculateEMI = () => {
    const P = parseFloat(formData.loanAmount) || 0;
    const annualRate = parseFloat(formData.interestRate) || 0;
    const N = parseInt(formData.months) || 0;

    if (P > 0 && annualRate > 0 && N > 0) {
      const R = annualRate / 12 / 100;
      const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

      const total = EMI * N;

      setFormData((prev) => ({
        ...prev,
        emiAmount: EMI.toFixed(2),
        totalPayableAmount: total.toFixed(2),
      }));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [formData.loanAmount, formData.interestRate, formData.months]);

  const onChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      console.log("formData", formData);
      const payload = { ...formData };

      const response = await handleCreateFinance(payload);
      if (response) {
        toast.success("Finance record created successfully!");
        setFormData({
          vehicleName: "",
          regNo: "",
          ownerName: "",
          email: "",
          mobileNo: "",
          loanProvider: "",
          loanAmount: "",
          months: "",
          interestRate: "",
          emiAmount: "",
          totalPayableAmount: "",
          startDate: "",
          status: "",
        });
      } else {
        toast.error("Finance record failed, please try again..!");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      {authenticated ? (
        <>
          <Box display={{ md: "none" }}>
            <Button
              as={Link}
              href={PAGE_PATH_KEYS.HOME}
              bg="primary.500"
              size="sm"
              gap={1}
              color="white.100"
              _hover={{ bg: "primary.500" }}
              _disabled={{ bg: "primary.500" }}
            >
              <FaArrowAltCircleLeft />
              Home
            </Button>
          </Box>

          <Box
            maxW="1200px"
            mx="auto"
            mt={3}
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading
              mb={6}
              textAlign="center"
              fontSize="3xl"
              color="primary.500"
            >
              Car Finance Form
            </Heading>

            <SimpleGrid columns={[1, 2]} spacing={6}>
              <FormControl isRequired>
                <FormLabel>Vehicle Name</FormLabel>
                <ThemeInput
                  placeholder="Enter Car Name"
                  value={formData.vehicleName}
                  onChange={(e) => onChange("vehicleName", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Reg No</FormLabel>
                <ThemeInput
                  placeholder="Enter Registration No"
                  value={formData.regNo}
                  onChange={(e) => onChange("regNo", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Owner Name</FormLabel>
                <ThemeInput
                  placeholder="Enter Owner Name"
                  value={formData.ownerName}
                  onChange={(e) => onChange("ownerName", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <ThemeInput
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => onChange("email", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Mobile No</FormLabel>
                <ThemeInput
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={formData.mobileNo}
                  onChange={(e) => onChange("mobileNo", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Loan Provider</FormLabel>
                <ThemeSelect
                  value={formData.loanProvider}
                  onChange={(e) => onChange("loanProvider", e.target.value)}
                >
                  <option value="">Select Loan Provider</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="SBI">SBI Bank</option>
                  <option value="Axis">Axis Bank</option>
                  <option value="Other">Other</option>
                </ThemeSelect>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Loan Amount</FormLabel>
                <ThemeInput
                  type="number"
                  placeholder="Enter Loan Amount"
                  value={formData.loanAmount}
                  onChange={(e) => onChange("loanAmount", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Months</FormLabel>
                <ThemeSelect
                  value={formData.months}
                  onChange={(e) => onChange("months", e.target.value)}
                >
                  <option value="">Select Months</option>
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                  <option value="48">48 Months</option>
                  <option value="60">60 Months</option>
                </ThemeSelect>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Interest Rate (%)</FormLabel>
                <ThemeInput
                  type="number"
                  placeholder="Enter Annual Interest Rate"
                  value={formData.interestRate}
                  onChange={(e) => onChange("interestRate", e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>EMI Amount</FormLabel>
                <ThemeInput
                  value={formData.emiAmount}
                  readOnly
                  placeholder="Auto calculated"
                  onChange={(e) => onChange("emiAmount", e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Total Payable Amount</FormLabel>
                <ThemeInput
                  value={formData.totalPayableAmount}
                  readOnly
                  placeholder="Auto calculated"
                  onChange={(e) =>
                    onChange("totalPayableAmount", e.target.value)
                  }
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Loan Start Date</FormLabel>
                <ThemeInput
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => onChange("startDate", e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Status</FormLabel>
                <ThemeSelect
                  value={formData.status}
                  onChange={(e) => onChange("status", e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Closed">Closed</option>
                  <option value="Pending">Pending</option>
                </ThemeSelect>
              </FormControl>
            </SimpleGrid>

            <Box mt={4}>
              <Text fontSize="lg" fontWeight="bold">
                📌 EMI: ₹{formData.emiAmount || 0} / month
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                💰 Total Payable: ₹{formData.totalAmount || 0}
              </Text>
            </Box>

            <Button
              mt={6}
              colorScheme="blue"
              type="button"
              w="full"
              onClick={handleSubmit}
            >
              Submit Finance
            </Button>
          </Box>
        </>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default CarFinanceForm;
