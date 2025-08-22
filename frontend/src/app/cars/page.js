import React from "react";
import { PageWrapper } from "@/utils";
import { Text } from "@chakra-ui/react";
import axios from "axios";

const Cars = async () => {
  try {
    const response = await axios.get("http://localhost:8001/authenticated", {
      withCredentials: true,
    });
    // const data = await response;
    console.log("data", response);
  } catch (err) {
    console.log("err", err);
  }
  return (
    <PageWrapper>
      <Text>Cars</Text>
    </PageWrapper>
  );
};

export default Cars;
