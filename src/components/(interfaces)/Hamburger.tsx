"use client"

import Link from "next/link";
import { MouseEvent, useState } from "react";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        (isOpen === false ? setIsOpen(true) : setIsOpen(false));
    }

    return (
        <div className="flex md:hidden">
            {
                isOpen === false ?
                    <button className="text-2xl" onClick={handleClick}>&#9776;</button> :
                    <section className="absolute top-0 left-0 bg-background w-full flex flex-col p-4 justify-center">
                        <button className="text-4xl self-end pr-2" onClick={handleClick}>&times;</button>
                        <nav className="flex flex-col min-h-screen items-center py-8">
                            <Link href="/" className="w-full text-xl text-center py-6 hover:opacity-90">Home</Link>
                            <Link href="/create" className="w-full text-xl text-center py-6 hover:opacity-90">Create</Link>
                            <Link href="/collection" className="w-full text-xl text-center py-6 hover:opacity-90">Collections</Link>
                            <Link href="/trade" className="w-full text-xl text-center py-6 hover:opacity-90">Trade</Link>
                            <Link href="/coins" className="w-full text-xl text-center py-6 hover:opacity-90">Coin Analytics</Link>
                            <Link href="/learn" className="w-full text-xl text-center py-6 hover:opacity-90">Insights</Link>
                        </nav>
                    </section>
            }
        </div>
    )
}