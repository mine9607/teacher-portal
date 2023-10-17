import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Corporate() {
  return (
    <>
      {" "}
      <h1 className="m-4 text-xl">Welcome to Corporate Classes!</h1>
      <Link href="/" className="m-4 border border-black/50 rounded-full p-2">
        Go to Homepage
      </Link>
    </>
  );
}
