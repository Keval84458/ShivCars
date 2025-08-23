import React from "react";
import { PageWrapper } from "@/utils";
import HeroSection from "./components/Hero-Section";
import Footer from "./components/Footer";
import CarForm from "./components/extra";

const page = () => {
  return (
    <PageWrapper>
      {/* <HeroSection /> */}
      <CarForm />
      {/* <Footer /> */}
    </PageWrapper>
  );
};

export default page;
