import Breadcrumb from "@/components/Breadcrumb";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="p-10">
      <Breadcrumb/>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Booking Confirmed!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for booking your property. Our team will get back to
            you soon.
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};

export default Page;
