"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { addToCart } from "@/redux/slices/cartSlice";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();

  function handleAddItemToCart() {
    dispatch(addToCart(product));
    toast.success("Added to Cart");
  }

  return (
    <>
      <Card key={product.id} className="m-5" maxW="sm">
        <CardBody>
          <Image src={product.image} alt="" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            <Text>{product.description}</Text>

            <Text color="blue.600" fontSize="2xl">
              Rs.{product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button onClick={() => handleAddItemToCart()}>Book Now</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
