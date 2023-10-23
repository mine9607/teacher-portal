import ModeToggle from "@/components/ui/mode-toggle";
import Link from "next/link";

// `app/page.tsx` is the UI for the `/` URL
export default function App() {
  return (
    <>
      <div className="flex m-4 gap-2">
        <Link href="/corporate" className="border border-black/50 rounded-full p-2 text-center justify-center">
          Corporate Class Information
        </Link>
        <br />
        <Link href="/teachers" className="border border-black/50 rounded-full p-2 text-center justify-center">
          Go to Teacher Portal
        </Link>
      </div>
    </>
  );
}
