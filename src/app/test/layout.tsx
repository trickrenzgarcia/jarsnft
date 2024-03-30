import { Navbar } from "@/components/(layout)";
import Link from "next/link";

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex h-[300px] w-full items-center justify-center border-b-2">
        <h1 className="text-4xl font-bold">
          This Page is for testing components
        </h1>
      </div>
      <div className="flex">
        <div className="basis-[20%] border-r-2 p-7">
          <h2 className="mb-2 font-bold">Test Links</h2>
          <ul className="mb-2">
            <li className="hover:underline">
              <Link href="/test/likes">Likes</Link>
            </li>
            <li className="hover:underline">
              <Link href="/test/messages">Messages</Link>
            </li>
            <li className="hover:underline">
              <Link href="/test/spline">Spline 3D</Link>
            </li>
          </ul>
          <h2 className="mb-2 font-bold">UI</h2>
          <ul className="mb-2">
            <li className="hover:underline">
              <Link href="/test/ui/card">Card</Link>
            </li>
          </ul>
        </div>
        <div className="basis-[80%]">{children}</div>
      </div>
    </>
  );
}
