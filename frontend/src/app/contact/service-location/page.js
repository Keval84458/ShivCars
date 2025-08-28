import { PageWrapper } from "@/utils";
import { Text } from "@chakra-ui/react";
import React from "react";
import ServiceLocationForCars from "./_layouts/services-location-for-car";

const ServiceLocation = () => {
  return (
    <PageWrapper>
      <ServiceLocationForCars />
    </PageWrapper>
  );
};

export default ServiceLocation;
