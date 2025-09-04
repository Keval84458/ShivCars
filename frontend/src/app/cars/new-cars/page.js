import { PageWrapper } from "@/utils";
import React from "react";
import NewCarGrid from "./_layouts/new-car-grid";
import { getAllNewCars } from "@/services/other-apis";

const NewCars = async () => {
  const allCars = await getAllNewCars();

  return (
    <PageWrapper p={3} bg="secondary.50">
      <NewCarGrid allCars={allCars} />
    </PageWrapper>
  );
};

export default NewCars;
