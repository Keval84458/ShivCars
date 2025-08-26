import { PageWrapper } from "@/utils";
import React from "react";
import NewCarGrid from "./_layouts/new-car-grid";
import { getAllNewCars } from "@/services/server-apis";

const NewCars = async () => {
  const allCars = await getAllNewCars();

  return (
    <PageWrapper p={2}>
      <NewCarGrid allCars={allCars} />
    </PageWrapper>
  );
};

export default NewCars;
