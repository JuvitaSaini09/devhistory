"use client";
import { useStoreUser } from "@/hooks/user-store-user";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { isLoading, isAuthenticated } = useStoreUser();
  console.log("Header isLoading:", isLoading);
  console.log("Header isAuthenticated:", isAuthenticated);
  return (
    <div>
      {" "}
      {/* <header className="flex justify-end items-center p-4 gap-4 h-16 bg-transparent absolute top-0 left-0 right-0 z-50">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>{" "} */}
      <header className=" h-24 absolute top-0 left-0 right-0 z-50 bg-transparent px-[30px] py-[15px]">
        <nav>
          <ul className="flex items-center justify-between ">
            <li>
              <Link href="/" className="flex justify-center items-center gap-1">
                <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[28px] border-t-[var(--theme-color-01)] mx-auto" />
                <h1 className="font-dela-gothic text-2xl">DevHistory</h1>
              </Link>
            </li>
            <li>
              {" "}
              <SignedOut>
                <SignInButton>
                  <button className="clerk-btn">Sign In</button>
                </SignInButton>
                <SignUpButton>
                  <button className="clerk-btn">Sign Up</button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                {/* <UserButton /> */}
                <SignOutButton>
                  <button className="clerk-btn">Sign Out</button>
                </SignOutButton>
              </SignedIn>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
