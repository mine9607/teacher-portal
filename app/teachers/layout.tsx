import React from "react";

export default function Layout(props: {
  children: React.ReactNode;
  classes: React.ReactNode;
  students: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="">
          {props.children}
          <div className="flex m-4 gap-4">
            {props.classes}
            {props.students}
          </div>
        </div>
      </div>
    </>
  );
}
