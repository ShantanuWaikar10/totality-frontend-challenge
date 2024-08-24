"use client";

import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import Link from "next/link";
import React from "react";
import CartCount from "./CartCount";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <span className="flex justify-end">
        <Link
          className="bg-slate-400 hover:bg-slate-500 duration-300 transition-all text-slate-50 rounded-md mx-2 px-4 py-2"
          href="/cart"
        >
          Cart (<CartCount />)
        </Link>
        {!session?.user?.email ? (
          <span>
            <Link href={"/LoginForm"}>
              <Button className="mx-2" colorScheme="teal" variant="outline">
                Sign In
              </Button>
            </Link>

            <Link href={"/RegisterForm"}>
              <Button className="mx-2" colorScheme="teal" variant="outline">
                Sign Up
              </Button>
            </Link>
          </span>
        ) : (
          <span>
            <span className="mx-2 font-bold">
              Hello, <span className="">{session?.user?.name}</span>
            </span>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
            >
              Log Out
            </button>
          </span>
        )}
      </span>
    </>
  );
};

export default Navbar;
