import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LandingFooter = () => {
  return (
    <section className="text-center py-16 bg-[#04141c] mt-16">
      <h2 className="text-3xl font-bold mb-4 ">
        Ready to start remembering your wins?
      </h2>
      <p className="text-[var(--gray-01)] mb-6">
        Join DevHistory and start documenting your dev journey today.
      </p>
      <Link href="/sign-up">
        <SignInButton>
          <button className="clerk-btn">Get Started for Free</button>
        </SignInButton>
      </Link>
    </section>
  );
};

export default LandingFooter;
