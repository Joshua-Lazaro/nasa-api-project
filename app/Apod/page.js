'use client';
import { useContext } from "react";
import NavBar from "../components/NavBar.js";
import Image from "next/image";
import Apod from "./Apod.js";
import { ApodContext } from "./ApodContext.js";

export default function ApodPage() {
    const data = useContext(ApodContext);
    return (
        <main className="">
            <NavBar />
            {data ? <Apod data={data} /> : <p className="justify-center m-5">Loading...</p>}
        </main>
    )
}