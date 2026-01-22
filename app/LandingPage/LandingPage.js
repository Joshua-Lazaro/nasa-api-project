import NavBar from "../components/NavBar.js";

export default function LandingPage() {
    return (
        <main>
            <NavBar />
            <div id="landing-page" className="h-20 justify-items-center text-center p-10">
                <div className="text-center rounded-lg shadow-md p-6 flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                        Welcome to My Nasa API WebApp
                    </h1>
                    <br/>
                    <p className="text-gray-400">This is a web application that fetches data from NASA's public APIs.</p>
                    <p className="text-gray-400">Explore daily Astronomy Pictures of the Day (APOD) and Near Earth Asteroids data fetched from NASA's public APIs.</p>
                </div>
                
            </div>
        </main>
    )
}