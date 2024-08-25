"use client";
import Breadcrumb from "@/components/Breadcrumb";
import CartProduct from "@/components/CartProduct";
import Link from "next/link";
import React from "react";
import { Button, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Cart() {
  const router = useRouter();
  const [mobile, setMobile] = React.useState("");
  const handleMobileChange = (event) => setMobile(event.target.value);

  const [name, setName] = React.useState("");
  const handleNameChange = (event) => setName(event.target.value);

  const handleBook = () => {
    if (!name && !mobile) {
      toast.error("All fields are required");
    } else {
      router.push("/booked");
    }
  };

  const cartItems = useSelector((store) => store.cart);

  const subTotal = cartItems
    .reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.qty;
    }, 0)
    .toFixed(2);
  console.log(cartItems);

  return (
    <div className="px-2 py-2 lg:px-20 lg:py-16 ">
      <Breadcrumb />
      <div className="grid sm:grid-cols-3 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="sm:px-5 flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {cartItems.length > 0 ? (
              cartItems.map((item, i) => {
                return <CartProduct cartItem={item} key={i} />;
              })
            ) : (
              <p className="text-xl">Cart is Empty</p>
            )}
          </div>
        </div>
        <div className="col-span-4 bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800  p-5 dark:text-slate-100 font-bold">
          <h2 className="text-2xl pb-3">Cart total</h2>
          <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal"></p>
          {cartItems.length > 0 ? (
            <div className="my-3">
              Booking Date:{" "}
              <Input
                className="my-2"
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              Name:
              <Input
                value={name}
                onChange={handleNameChange}
                className="my-2"
                placeholder="Name"
                size="md"
              />
              Mobile:
              <Input
                value={mobile}
                onChange={handleMobileChange}
                className="my-2"
                placeholder="Mobile"
                size="md"
              />
              <div className="my-5">
                <Button
                  onClick={handleBook}
                  className="bg-slate-200 text-slate-900 rounded-lg  py-2 px-4 font-normal"
                >
                  Book
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="mb-5 flex items-center justify-between py-4 font-bold">
            <span>Total </span>
            <span>Rs.{subTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
