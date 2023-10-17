import React from "react";

export default async function Classes() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div className="border-4 border-[#3D5AF1] rounded-lg h-96 w-40 text-center bg-[#22D1EE] text-white font-semibold p-2">
      Classes Page
    </div>
  );
}
