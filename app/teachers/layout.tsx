import { Button } from "@/components/ui/button";
import React, { JSXElementConstructor, Suspense } from "react";
import { HashLoader } from "react-spinners";

export default function Layout(props: {
  children: React.ReactNode;
  classes: React.ReactNode;
  students: React.ReactNode;
}) {
  // Note you could also destructure the props object as
  // function Layout({children, students, classes}: {children: React.ReactNode; classes: React.ReactNode; students: React.ReactNode;}){}

  return (
    <>
      <div>
        {props.children}
        <div className=" flex m-4 gap-4">
          <div className="">{props.classes}</div>
          <div className="">{props.students}</div>
        </div>
        <div>
          <Button>Hello World</Button>
        </div>
      </div>
    </>
  );
}
