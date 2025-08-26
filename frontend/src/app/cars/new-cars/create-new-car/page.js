import React from "react";
import { PageWrapper } from "@/utils";
import CreateNewCarForm from "./_layouts/create-new-car-form";

const CreateNewCar = () => {
  return (
    <PageWrapper p={1}>
      <CreateNewCarForm />
    </PageWrapper>
  );
};

export default CreateNewCar;
