"use client";
import Image from "next/image";


import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-red-600 text-white flex justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img
                src="/pokemon-icon.svg"
                alt="Pokémon Logo"
                className="w-10 h-10"
                />
                <h1 className="text-xl font-bold">Pokémon Dashboard</h1>
            </div>
            <div className="space-x-4">
                <Link
                href="/"
                className="hover:underline"
                >
                Home
                </Link>

                <Link
                href="/about"
                className="hover:underline"
                >
                About
                </Link>
            </div>
        </div>
    </nav>
  );
}