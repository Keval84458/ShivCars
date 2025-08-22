import React from "react";
import { PageWrapper } from "@/utils";
import HeroSection from "./components/Hero-Section";
import Footer from "./components/Footer";

const page = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <Footer />
    </PageWrapper>
  );
};

export default page;
