import React from "react";

export default async function Classes(props) {
  // await new Promise((resolve) => setTimeout(resolve, 500));

  //Using the Fetch API Method - this console logs the data but need to get into the page
  const url = "https://bored-api.appbrewery.com/filter";
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const response = data;
      console.log("-----------------FETCH----------------");
      console.log(response);
      return response;
    })
    .catch((error) => console.error(error));

  //How to pass the api response to the component
  return (
    <div className="border-4 border-[#3D5AF1] rounded-lg h-96 w-40 text-center bg-[#22D1EE] text-white font-semibold p-2">
      Classes Page
      <div>[Insert Data Here]</div>
    </div>
  );
}
