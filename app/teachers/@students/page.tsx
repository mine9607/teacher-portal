import axios from "axios";

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

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Photos {
  albumID: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// let result: Activity;

export default async function Students() {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  async function getData() {
    // const url = "https://bored-api.appbrewery.com/filter";
    // const url = "https://picsum.photos/200/300";
    const url = "https://jsonplaceholder.typicode.com/photos";
    // const url = "https://restcountries.com/v3.1/all";

    try {
      // const response = await axios.get(url);
      const response = await axios.get(url);

      //log response headers (THIS IS VERY USEFUL FOR RESPONSE TYPE aka content-type)
      // console.log(response.headers);
      //log response status, status Text, Config
      // console.log("----------------Config-----------------");
      // console.log(`Method: ${response.config.method}`);
      // console.log(`URL: ${response.config?.url}`);
      // console.log("----------------Status-----------------");
      // console.log(`Status: ${response.statusText} - Code: ${response.status}`);

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to make request:", error);
    }
  }

  const result = await getData();

  return (
    <div className="border-4 border-[#22D1EE] rounded-lg w-fit text-center  bg-[#E2F3F5] text-[#3D5AF1] font-semibold p-2">
      <h1>Students Page</h1>
      <ul className=" text-left">
        {result.map((item: Photos) => (
          <li key={item.id}>{item.url}</li>
        ))}
      </ul>
    </div>
  );
}
