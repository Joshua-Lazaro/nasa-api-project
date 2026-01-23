import SpaceExplorerFooter from "../components/Footer";

export default function Apod({ data }) {
  return (
    <div>
    <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative w-full h-196 mb-5 rounded-lg overflow-hidden shadow-lg"> 
        <img
          src={data.url}
          alt={data.title}
          className="p-1 rounded-lg shadow-md w-full h-full object-cover"
        />
      </div>
      <div className="px-4">
        <h2 className="text-xl font-bold capitalize mt-2">{data.title}</h2>
        <p className="text-white">{data.date}</p>
        <div className="mt-2 mb-5">
          {data.media_type === "image" ? (
            <p className="text-white">{data.explanation}</p>
          ) : (
            <p className="text-white">Media type: {data.media_type}</p>
          )}
        </div>
      </div>
    </div>
    <SpaceExplorerFooter />
    </div>
  )
}  