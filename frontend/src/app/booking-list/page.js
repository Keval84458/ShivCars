import { PageWrapper } from "@/utils";
import React from "react";
import CarBookingList from "./_layouts/car-booking-list";

const BookingList = async () => {
  return (
    <PageWrapper>
      <CarBookingList />
    </PageWrapper>
  );
};

export default BookingList;
