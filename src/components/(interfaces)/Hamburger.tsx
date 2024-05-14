"use client";

import Link from "next/link";
import { MouseEvent, useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <div className="flex lg:hidden">
      {isOpen === false ? (
        <button className="text-2xl" onClick={handleClick}>
          &#9776;
        </button>
      ) : (
        <section className="absolute left-0 top-0 flex w-full flex-col justify-center bg-background p-4">
          <button className="self-end pr-2 text-4xl" onClick={handleClick}>
            &times;
          </button>
          <nav className="flex min-h-screen flex-col items-center py-8">
            <Link
              href="/"
              className="w-full py-6 text-center text-xl hover:opacity-90"
            >
              Home
            </Link>
            <Link
              href="/create"
              className="w-full py-6 text-center text-xl hover:opacity-90"
            >
              Create
            </Link>
            <Link
              href="/collection"
              className="w-full py-6 text-center text-xl hover:opacity-90"
            >
              Collections
            </Link>
            <Link
              href="/trade"
              className="w-full py-6 text-center text-xl hover:opacity-90"
            >
              Trade
            </Link>
            <Link
              href="/coins"
              className="w-full py-6 text-center text-xl hover:opacity-90"
            >
              Coin Analytics
            </Link>
            <Link
              href="/insights"
              className="w-full py-6 text-center text-xl hover:opacity-90"
            >
              Insights
            </Link>
          </nav>
        </section>
      )}
    </div>
  );
}
