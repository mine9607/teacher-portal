import Link from "next/link";
import React from "react";

export default function Teacher() {
  return (
    <>
      <h1 className="m-4 text-xl">Welcome to the Teacher Portal!</h1>
      <Link href="/" className="flex w-40 m-4 border border-black/50 rounded-full p-2 text-center justify-center">
        Go to Homepage
      </Link>
    </>
  );
}
