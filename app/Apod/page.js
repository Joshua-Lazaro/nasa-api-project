import NavBar from "../components/NavBar.js";

export default function ApodPage() {
    return (
        <main className="">
            <NavBar />
    
            <div className="justify-items-center text-center p-10">
                <div className="w-full border rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                        src="https://api.nasa.gov/assets/img/general/apod.jpg"
                        alt="Astronomy Picture of the Day"
                        className="w-full h-48 object-contain"
                    />
                    <div className="text-align: left">
                        <h2 className="text-xl font-bold capitalize mt-2">title</h2>
                        <p className="text-gray-600">date</p>
                        <div className="mt-2">
                            <p className="text-gray-600">explain</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-start">
                    <img 
                        src="https://api.nasa.gov/assets/img/general/apod.jpg"
                        alt="Astronomy Picture of the Day"
                        className="w-full h-48 object-contain"
                    />
                    <div className="flex-col">
                        <h2 className="text-xl font-bold capitalize mt-2">title</h2>
                        <p className="text-gray-600">date</p>
                        <div className="mt-2">
                            <p className="text-gray-600">explain</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </main>
    )
}