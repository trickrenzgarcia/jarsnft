"use client";

import Link from "next/link";
import { MouseEvent, useState } from "react";
import SearchInput from "./SearchInput";
import JarsLogo from "./JarsLogo";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <div className="flex z-10 lg:hidden">
      {isOpen === false ? (
        <button className="text-2xl" onClick={handleClick}>
          &#9776;
        </button>
      ) : (
        <section className="absolute left-0 top-0 flex flex-col justify-center bg-background p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-end mb-4">
              <JarsLogo />
              <h1 className="animate-flip-down animate-once animate-duration-[1200ms] animate-ease-in mb-2 text-xl font-bold">Jars</h1>
            </div>
            <button className="self-end pr-2 mt-4 mb-8 text-4xl" onClick={handleClick}>
              &times;
            </button>
          </div>
          <SearchInput />
          <nav className="flex min-h-screen flex-col items-center py-4">
            <Link
              href="/"
              className="w-full py-6 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
            >
              Home
            </Link>
            <Link
              href="/create"
              className="w-full py-6 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
            >
              Create
            </Link>
            <Link
              href="/collection"
              className="w-full py-6 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
            >
              Collections
            </Link>
            <Link
              href="/coins"
              className="w-full py-6 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
            >
              Coin Analytics
            </Link>
            <Link
              href="/insights"
              className="w-full py-6 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
            >
              Insights
            </Link>
          </nav>
        </section>
      )}
    </div>
  );
}
