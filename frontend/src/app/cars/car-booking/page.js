import React from "react";
import CarBookingForm from "./_layouts/car-booking-form";
import { PageWrapper } from "@/utils";
import { getAllNewCars } from "@/services/server-apis";

const CarBookings = async () => {
  const carData = await getAllNewCars();
  console.log("carData", carData);
  return (
    <PageWrapper p={1}>
      <CarBookingForm carData={carData} />
    </PageWrapper>
  );
};

export default CarBookings;
