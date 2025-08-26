import { PageWrapper } from "@/utils";
import React from "react";
import CarDetailsCard from "./_layouts/car-details-card";
import { getCarById } from "@/services/server-apis";

const CarDetails = async ({ searchParams }) => {
  const { id: carId } = await searchParams;
  const carData = await getCarById(carId);

  return (
    <PageWrapper p={1}>
      <CarDetailsCard carData={carData} />
    </PageWrapper>
  );
};

export default CarDetails;
