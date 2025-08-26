"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Badge,
  Spinner,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  handlegetAllCarBookings,
  handleBookedCarDeleteById,
} from "@/services/server-apis";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CarBookingList = () => {
  const [carBookingData, setCarBookingData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCarBookingData = async () => {
    try {
      const response = await handlegetAllCarBookings();
      setCarBookingData(response.rows);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
    }
  };

  const bookedCarDeleteById = async (id) => {
    console.log("CarIID", id);
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to delete this booking?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "Cancel",
      });
      if (result.isConfirmed) {
        const response = await handleBookedCarDeleteById(id);
        if (response?.success) {
          fetchCarBookingData();
          toast.success("Booking deleted successfully 🚗", {
            position: "top-right",
            autoClose: 2500,
          });
        } else {
          toast.error(response?.message || "Failed to delete booking ❌", {
            position: "top-right",
            autoClose: 2500,
          });
        }
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later ⚠️", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchCarBookingData();
  }, []);

  return (
    <Box p={6} minH="100vh">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb={6}
        textAlign="center"
        color="primary.700"
      >
        Car Booking List
      </Text>

      <TableContainer
        border="1px solid"
        borderColor="primary.200"
        rounded="lg"
        shadow="lg"
        bg="white"
        overflowX="auto"
      >
        {loading ? (
          <Flex justify="center" align="center" p={8}>
            <Spinner size="xl" color="primary.500" />
          </Flex>
        ) : (
          <Table variant="striped" colorScheme="primary" size="md">
            <Thead bg="primary.600">
              <Tr>
                <Th color="white">Car ID</Th>
                <Th color="white">Customer Name</Th>
                <Th color="white">Email</Th>
                <Th color="white">Mobile No</Th>
                <Th color="white">Location</Th>
                <Th color="white">ID Proof</Th>
                <Th color="white">ID Number</Th>
                <Th color="white">Feedback</Th>
                <Th color="white">Created At</Th>
                <Th color="white">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {carBookingData && carBookingData.length > 0 ? (
                carBookingData.map((booking) => (
                  <Tr
                    key={booking.booking_id}
                    _hover={{ bg: "primary.140", transition: "0.2s" }}
                  >
                    <Td fontWeight="bold" color="primary.700">
                      {booking.car_id}
                    </Td>
                    <Td>{booking.customer_name}</Td>
                    <Td>{booking.email}</Td>
                    <Td>{booking.mobile_no}</Td>
                    <Td>{booking.location}</Td>
                    <Td>
                      <Badge colorScheme="purple" variant="subtle">
                        {booking.id_proof}
                      </Badge>
                    </Td>
                    <Td>{booking.id_number}</Td>
                    <Td color="gray.600" fontStyle="italic">
                      {booking.feedback}
                    </Td>
                    <Td>{booking.booking_date}</Td>
                    <Td>
                      <Button
                        size="sm"
                        p={1}
                        bg="red.500"
                        color="white"
                        _hover={{ bg: "red.600" }}
                        onClick={() => bookedCarDeleteById(booking.booking_id)}
                      >
                        <MdDelete size="1.2rem" />
                      </Button>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={10} textAlign="center" py={6} color="gray.500">
                    No bookings found
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
};

export default CarBookingList;
