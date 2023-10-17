import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Corporate() {
  return (
    <>
      {" "}
      <h1 className="flex m-4 text-xl">Welcome to Corporate Classes!</h1>
      <div className="flex m-4 gap-2">
        <Link href="/" className="border border-black/50 rounded-full p-2 text-center justify-center">
          Go to Homepage
        </Link>
      </div>
    </>
  );
}
