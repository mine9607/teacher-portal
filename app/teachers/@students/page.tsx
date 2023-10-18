import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

let result: Todo;

// async function getData() {
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   try {
//     const response = await axios.get(url);
//     console.log("-----------------AXIOS----------------");
//     return response.data;
//   } catch (error) {
//     console.log("Failed to make request:", error);
//   }
//   console.log(result);
// }

export default async function Students() {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await axios.get(url);
      console.log("-----------------Students----------------");
      return response.data;
    } catch (error) {
      console.log("Failed to make request:", error);
    }
  }

  const result = await getData();

  return (
    <div className="border-4 border-[#22D1EE] rounded-lg w-40 text-center  bg-[#E2F3F5] text-[#3D5AF1] font-semibold p-2">
      <h1>Students Page</h1>
      <ul className=" text-left">
        {result.map((item: Todo) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
