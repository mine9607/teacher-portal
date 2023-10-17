import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div className="border border-black rounded-lg h-96 w-40 text-center  bg-blue-100 text-blue-400 font-semibold p-2">
      Students Page
    </div>
  );
}
