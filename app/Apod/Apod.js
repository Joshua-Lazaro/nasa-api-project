export default function Apod({ data }) {
  return (
    <div className="border rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow">
      <img 
        src={data.url} 
        alt={data.title}
        className="w-full h-48 object-contain"
      />
      <h2 className="text-xl font-bold capitalize mt-2">{data.title}</h2>
      <p className="text-gray-600">{data.date}</p>
      <div className="mt-2">
        {data.media_type === "image" ? (
          <p className="text-gray-600">{data.explanation}</p>
        ) : (
          <p className="text-gray-600">Media type: {data.media_type}</p>
        )}
      </div>
    </div>
  )
}  