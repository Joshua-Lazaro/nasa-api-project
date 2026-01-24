import NavBar from "../components/NavBar.js";
import Image from "next/image";
import SpaceExplorerFooter from "../components/Footer.js";
import { useContext } from "react";
import { ApodContext } from "../Apod/ApodContext.js";
import { NeoContext } from "../Neo/NeoContext.js";
import AsteroidCard from "../Neo/AsteroidCard.js";

export default function LandingPage() {
    const data = useContext(ApodContext);
    const neoData = useContext(NeoContext);
    const asteroids = neoData ? Object.values(neoData.near_earth_objects).flat() : [];

    if (!data) {
        return <p className="justify-center m-5">Loading...</p>;
    }

    return (
        <main>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <div id="landing-page" className="flex-grow h-20 justify-items-center text-center p-10">
                    <div className="relative w-full h-196 mb-50 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-black opacity-50">
                            <Image 
                                className="p-4 rounded-lg shadow-md"
                                src="/webb-tarantula-neb.png"
                                alt="Space image with stars and swirls of colorful orange, red and white."
                                fill
                                style={{
                                    transform: "scale(1.1)",
                                    transformOrigin: "32% 38%",
                                    objectPosition: "32% 38%",
                                    objectFit: "cover",
                                }}
                                priority={true} 
                            />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-start pl-10">
                            <div className="p-4 rounded flex flex-col items-start text-left">
                                <h1 className="text-white text-4xl font-bold drop-shadow-lg mb-10">
                                    Explore the Universe, 
                                    One API at a Time
                                </h1>
                                <p className="text-gray-200 mt-2 max-w-md drop-shadow-lg">
                                    Explore daily Astronomy Pictures of the Day (APOD) and Near Earth Asteroids data fetched from NASA's public APIs.
                                </p>
                                <a href="#featured-content">
                                <button className="mt-4 px-6 py-2 text-white rounded border-2 border-blue-600 hover:bg-blue-600 transition scroll-smooth">
                                    Explore Now
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center rounded-lg shadow-md p-6 flex-col items-center justify-center mb-50">
                            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-600">
                                Welcome to Space Explore
                            </h1>
                            <br/>
                            <p className="text-white">Discover the universe through breathtaking Astronomy Pictures of the Day and real‑time Near‑Earth Object data.</p>
                            <p className="text-white">Space Explore brings NASA’s public APIs to life, combining stunning visuals with scientific insights to help you 
                                experience the beauty and dynamism of space.</p>
                        </div>  

                    <div className="relative w-full h-[400px] sm:h-[500px] mb-20 rounded-lg overflow-hidden shadow-lg">
                        {/* Background image */}
                        <div className="bg-black opacity-75">
                            <img
                            src="/spiral-galaxy.png"
                            alt="Space image of a spiral galaxy with bright core and blue arms."
                            className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
                        />z
                        </div>
                        
                        {/* Overlay text */}
                        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
                            <h2 className="text-2xl text-left sm:text-4xl font-bold text-white mb-4 ml-10 sm:ml-20">About Space Explore</h2>
                            <p className="text-gray-200 max-w-3xl leading-relaxed text-left ml-20 sm:ml-20 text-sm sm:text-base">
                            Space Explore is an interactive web application powered by NASA’s public APIs. It combines the Astronomy Picture of the Day (APOD), 
                            showcasing stunning views of the cosmos, with Near‑Earth Object (NEO) data that tracks asteroids passing close to our planet. 
                            By blending imagery with real‑time scientific insights, Space Explore makes it easy to discover the wonders of space and understand the dynamic environment around Earth.
                            </p>
                        </div>
                    </div>

                    <h2 id="featured-content" className="text-white text-4xl font-bold drop-shadow-lg mb-10"> Featured Content</h2>
                    <div className="flex-row justify-center items-center mb-20 space-x-10 flex flex-wrap">
                        <div className="w-96 h-90">
                            {data.url && (
                                <div className="relative w-full min-h-[500px] mb-2 overflow-hidden rounded-lg shadow-lg">
                                    <a href="/Apod">
                                        <img
                                            src={data.url}
                                            alt={data.title || 'NASA Astronomy Picture of the Day'}
                                            className=" w-full h-full object-cover
                                                        transition-transform duration-300 hover:scale-103 hover:shadow-xl hover:opacity-90"
                                        />
                                    </a>                               
                                <h2 className="text-lg font-bold text-white">Astronomy Picture of the Day</h2>
                                </div>
                                
                            )}
                        </div>

                        <div className="w-96 h-90">
                            {data.url && (
                                <div className="relative w-full min-h-[500px] mb-2 overflow-hidden rounded-lg shadow-lg">
                                    <a href="/Neo">
                                        <img
                                            src="/Asteroid_Bennu.jpeg"
                                            alt="NASA Asteroid Bennu Picture"
                                            className=" w-full h-full object-cover
                                                        transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:opacity-90"
                                        />
                                    </a>
                                <h2 className="text-lg font-bold text-white">Near Earth Objects</h2>
                                </div>
                                
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}