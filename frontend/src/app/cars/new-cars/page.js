import { PageWrapper } from "@/utils";
import React from "react";
import NewCarGrid from "./_layouts/new-car-grid";

const NewCars = () => {
  return (
    <PageWrapper p={2}>
      <NewCarGrid />
    </PageWrapper>
  );
};

export default NewCars;
