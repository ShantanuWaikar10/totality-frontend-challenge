"use client";
import React, { useState } from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Data } from "@/assets/PropertyData";
import Product from "./Product";
export default function ProductList() {
  const [item, setItems] = useState(Data);
  const Bedroom1 = () => {
    const newItems = Data.filter((newval) => newval.Bedroom === 1);
    setItems(newItems);
  };
  const Bedroom2 = () => {
    const newItems = Data.filter((newval) => newval.Bedroom === 2);
    setItems(newItems);
  };
  const All = () => {
    setItems(Data);
  };

  const locationMumbai = () => {
    const newItems = Data.filter((newval) => newval.city === "mumbai");
    setItems(newItems);
  };

  const locationDelhi = () => {
    const newItems = Data.filter((newval) => newval.city === "delhi");
    setItems(newItems);
  };

  const locationPune = () => {
    const newItems = Data.filter((newval) => newval.city === "pune");
    setItems(newItems);
  };
  const locationNagpur = () => {
    const newItems = Data.filter((newval) => newval.city === "nagpur");
    setItems(newItems);
  };
  const locationNoida = () => {
    const newItems = Data.filter((newval) => newval.city === "noida");
    setItems(newItems);
  };
  const locationGurgaon = () => {
    const newItems = Data.filter((newval) => newval.city === "gurgaon");
    setItems(newItems);
  };
  const priceRange_0_999 = () => {
    const newItems = Data.filter(
      (newval) => newval.price >= 0 && newval.price <= 999
    );
    setItems(newItems);
  };
  const priceRange_1000_1499 = () => {
    const newItems = Data.filter(
      (newval) => newval.price >= 1000 && newval.price <= 1499
    );
    setItems(newItems);
  };
  const priceRange_1500 = () => {
    const newItems = Data.filter((newval) => newval.price >= 1500);
    setItems(newItems);
  };

  const gym = () => {
    const newItems = Data.filter((newval) => newval.gym);
    setItems(newItems);
  };
  const parking = () => {
    const newItems = Data.filter((newval) => newval.parking);
    setItems(newItems);
  };
  const pool = () => {
    const newItems = Data.filter((newval) => newval.pool);
    setItems(newItems);
  };

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/4 lg:p-10 p-5">
          <h1 className="text-4xl mb-10">Filters:</h1>
          <h2 className="text-xl mb-3 mt-3">Locations:</h2>
          <Stack
            className="grid grid-cols-3"
            direction="row"
            spacing={4}
            align="center"
          >
            <Button
              onClick={locationMumbai}
              colorScheme="teal"
              variant="outline"
            >
              Mumbai
            </Button>
            <Button
              onClick={locationDelhi}
              colorScheme="teal"
              variant="outline"
            >
              Delhi
            </Button>
            <Button onClick={locationPune} colorScheme="teal" variant="outline">
              Pune
            </Button>
            <Button
              onClick={locationNagpur}
              colorScheme="teal"
              variant="outline"
            >
              Nagpur
            </Button>
            <Button
              onClick={locationGurgaon}
              colorScheme="teal"
              variant="outline"
            >
              Gurgaon
            </Button>
            <Button
              onClick={locationNoida}
              colorScheme="teal"
              variant="outline"
            >
              Noida
            </Button>
            <Button onClick={All} colorScheme="teal" variant="outline">
              All
            </Button>
          </Stack>

          <h2 className="text-xl mb-3 mt-3">Number of Bedrooms:</h2>
          <Stack direction="row" spacing={4} align="center">
            <Button onClick={Bedroom1} colorScheme="teal" variant="outline">
              1
            </Button>
            <Button onClick={Bedroom2} colorScheme="teal" variant="outline">
              2
            </Button>
            <Button onClick={All} colorScheme="teal" variant="outline">
              All
            </Button>
          </Stack>

          <h2 className="text-xl mb-3 mt-3">Price Range (In Rs.):</h2>
          <Stack
            className="grid grid-cols-3"
            direction="row"
            spacing={4}
            align="center"
          >
            <Button
              onClick={priceRange_0_999}
              colorScheme="teal"
              variant="outline"
            >
              0-999
            </Button>
            <Button
              onClick={priceRange_1000_1499}
              colorScheme="teal"
              variant="outline"
            >
              1000-1499
            </Button>
            <Button
              onClick={priceRange_1500}
              colorScheme="teal"
              variant="outline"
            >
              1500+
            </Button>

            <Button onClick={All} colorScheme="teal" variant="outline">
              All
            </Button>
          </Stack>

          <h2 className="text-xl mb-3 mt-3">Amenities:</h2>
          <Stack
            className="grid grid-cols-3"
            direction="row"
            spacing={4}
            align="center"
          >
            <Button onClick={gym} colorScheme="teal" variant="outline">
              Gym
            </Button>
            <Button onClick={parking} colorScheme="teal" variant="outline">
              Parking
            </Button>
            <Button onClick={pool} colorScheme="teal" variant="outline">
              Pool
            </Button>

            <Button onClick={All} colorScheme="teal" variant="outline">
              All
            </Button>
          </Stack>
        </div>
        <div className="lg:m-10 justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {item.map((product, i) => {
            return <Product key={i} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
