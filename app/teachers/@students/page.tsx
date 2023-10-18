import axios from "axios";
import React from "react";

export default async function page() {
  // await new Promise((resolve) => setTimeout(resolve, 1500));

  //Using the Axios Library - fetches data correctly - how to pass to rendered component???
  const url = "https://jsonplaceholder.typicode.com/todos";
  axios.get(url).then(
    (response) => {
      console.log("-----------------AXIOS----------------");
      console.log(response.data);
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <div className="border-4 border-[#22D1EE] rounded-lg h-96 w-40 text-center  bg-[#E2F3F5] text-[#3D5AF1] font-semibold p-2">
      Students Page
    </div>
  );
}
