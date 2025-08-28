import { PageWrapper } from "@/utils";
import { Text } from "@chakra-ui/react";
import React from "react";
import BookServiceForm from "./_layouts/book-service-form";

const BookService = () => {
  return (
    <PageWrapper>
      <BookServiceForm />
    </PageWrapper>
  );
};

export default BookService;
