"use client";
import Image from "next/image";


import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 p-4 bg-gray-900 text-white flex justify-between items-center border-b-2 border-gray-900 pb-4 z-50"> 
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img
                src="/NASA_logo.svg"
                alt="NASA Logo"
                className="w-20 h-15 object-contain"
                />
                <h1 className="text-lg font-bold sm:text-2xl">Space Explore</h1>
            </div>
            <div className="space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/Apod" className="hover:underline">APOD</Link>
                <Link href="/Apod" className="hover:underline">Asteroids</Link>
            </div>
        </div>
        
    </nav>
  );
}