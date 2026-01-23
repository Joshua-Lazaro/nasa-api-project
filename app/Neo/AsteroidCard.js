
export default function AsteroidCard({ asteroid }) {
  const approach = asteroid.close_approach_data[0];

  return (
    <div
      key={`${asteroid.neo_reference_id}-${approach.close_approach_date}`}
      className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <h2 className="text-lg font-bold">{asteroid.name}</h2>
      <p>Date: {approach.close_approach_date_full}</p>
      <p>
        Diameter:{" "}
        {asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}–
        {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
      </p>
      <p>
        Velocity:{" "}
        {parseFloat(approach.relative_velocity.kilometers_per_second).toFixed(2)} km/s
      </p>
      <p>
        Miss Distance:{" "}
        {parseFloat(approach.miss_distance.kilometers).toLocaleString()} km
      </p>
      <p
        className={
          asteroid.is_potentially_hazardous_asteroid ? "text-red-500" : "text-green-500"
        }
      >
        {asteroid.is_potentially_hazardous_asteroid ? "⚠️ Hazardous" : "✅ Safe"}
      </p>
    </div>
  );
}