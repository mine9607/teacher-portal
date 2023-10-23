import { cn } from "@/lib/utils";
import axios from "axios";
import React from "react";

interface Activity {
  activity: string;
  availability: number;
  type: string;
  participants: number;
  price: number;
  accessibility: string;
  duration: string;
  kidFriendly: boolean;
  link: string;
  key: string;
}

let result: Activity;

export default async function Classes() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  //Using the Fetch API Method - this console logs the data but need to get into the page

  // await fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const response = data;
  //     console.log("-----------------FETCH----------------");
  //     console.log(response);
  //     return response;
  //   })
  //   .catch((error) => console.error(error));

  //How to pass the api response to the component

  async function getData() {
    const url = "https://bored-api.appbrewery.com/filter";
    // try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed data fetch");
    }
    // console.log(response.headers);
    // console.log(response.ok);
    // console.log(response.status);
    // console.log(response.url);

    return response.json();
    // } catch (error) {
    console.log("There was an error:", error);
    // }
  }

  const result = await getData();

  return (
    <div className="bg-background border rounded-md border-border text-primary dark:text-secondary p-2">
      <h2 className="text-xl text-primary p-2">Classes Page</h2>
      <ul className="text-left">
        {result.map((item: Activity) => (
          <li key={item.key}>{item.activity}</li>
        ))}
      </ul>
    </div>
  );
}
