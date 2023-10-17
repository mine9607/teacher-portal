import Image from "next/image";
import React from "react";

export default function Navbar({ children }) {
  return (
    <>
      <header>
        <div className=" border-black border-2 ">Logo</div>
        <ul className=" ">
          <li>Corporate Classes</li>
          <li>Teacher Portal</li>
          <li>Private Classes</li>
        </ul>
      </header>
      <div>{children}</div>
    </>
  );
}
