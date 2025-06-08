"use client";
import { useStoreUser } from "@/hooks/user-store-user";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Header = () => {
  const { isLoading, isAuthenticated } = useStoreUser();
  console.log("Header isLoading:", isLoading);
  console.log("Header isAuthenticated:", isAuthenticated);
  return (
    <div>
      {" "}
      <header className="flex justify-end items-center p-4 gap-4 h-16 bg-transparent absolute top-0 left-0 right-0 z-50">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>{" "}
    </div>
  );
};

export default Header;
