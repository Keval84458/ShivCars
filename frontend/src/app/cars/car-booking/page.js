import React from "react";
import CarBookingForm from "./_layouts/car-booking-form";
import { PageWrapper } from "@/utils";
import { getAllNewCars } from "@/services/other-apis";

const CarBookings = async () => {
  return (
    <PageWrapper p={1}>
      <CarBookingForm />
    </PageWrapper>
  );
};

export default CarBookings;
