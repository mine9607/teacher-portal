import Image from "next/image";
import React from "react";
import ModeToggle from "./ui/mode-toggle";

export default function Navbar() {
  return (
    <>
      <header className="flex m-4 justify-end items-center">
        <ModeToggle />
      </header>
    </>
  );
}
