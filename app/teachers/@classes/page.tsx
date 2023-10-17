import React from "react";

export default async function Classes() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div className="border border-black rounded-lg h-96 w-40 text-center bg-blue-400 text-white font-semibold p-2">
      Classes Page
    </div>
  );
}
