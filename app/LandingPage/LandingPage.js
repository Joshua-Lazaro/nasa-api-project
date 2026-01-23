import NavBar from "../components/NavBar.js";
import Image from "next/image";
import SpaceExplorerFooter from "../components/Footer.js";
import { useContext } from "react";
import { ApodContext } from "../Apod/ApodContext.js";


export default function LandingPage() {
    const data = useContext(ApodContext);
    
    if (!data) {
        return <p className="justify-center m-5">Loading...</p>;
    }

    return (
        <main>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <div id="landing-page" className="flex-grow h-20 justify-items-center text-center p-10">
                    <div className="relative w-full h-196 mb-10 rounded-lg overflow-hidden shadow-lg">
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

                        <div className="absolute inset-0 flex items-center justify-start pl-10">
                            <div className="p-4 rounded flex flex-col items-start text-left">
                                <h1 className="text-white text-4xl font-bold drop-shadow-lg mb-10">
                                    Explore the Universe, 
                                    One API at a Time
                                </h1>
                                <p className="text-gray-200 mt-2 max-w-md drop-shadow-lg">
                                    Explore daily Astronomy Pictures of the Day (APOD) and Near Earth Asteroids data fetched from NASA's public APIs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center rounded-lg shadow-md p-6 flex-col items-center justify-center mb-50">
                            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-600">
                                Welcome to Space Explore
                            </h1>
                            <br/>
                            <p className="text-gray-400">This is a web application that fetches data from NASA's public APIs.</p>
                            <p className="text-gray-400">Explore beautiful Astronomy Pictures and Near Earth Asteroids data.</p>
                        </div>  
                    
                    <h1 className="text-white text-4xl font-bold drop-shadow-lg mb-10"> Featured Content</h1>
                    <div className="flex-row justify-center items-center mb-20 space-x-10">
                        <div className="w-96 h-90">
                            {data.url && (
                                <div className="relative w-full min-h-[500px] mb-2 overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={data.url}
                                    alt={data.title || 'NASA Astronomy Picture of the Day'}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <h2 className="text-lg font-bold text-white">Astronomy Picture of the Day</h2>
                                </div>
                                
                            )}
                        </div>
                          
                    </div>
                </div>
            </div>
        </main>
    );
}