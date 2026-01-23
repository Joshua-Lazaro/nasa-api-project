'use client';

import { useContext } from 'react';
import SpaceExplorerFooter from '../components/Footer.js'; 
import NavBar from '../components/NavBar.js';

import { NeoContext } from "../Neo/NeoContext.js";
import AsteroidCard from "../Neo/AsteroidCard.js";

export default function AsteroidsPage() {
    const data = useContext(NeoContext);
    const neoData = useContext(NeoContext);

  if (!data) {
    return (
      <main className="flex flex-col min-h-screen">
        <NavBar />
        <section className="flex-grow flex items-center justify-center">
          <p className="text-gray-400">Loading asteroid data...</p>
        </section>
        <SpaceExplorerFooter />
      </main>
    );
  }

  // Flatten the object (dates → arrays of asteroids)
    const asteroids = neoData ? Object.values(neoData.near_earth_objects).flat() : [];

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <section className="flex-grow p-10">
        <h1 className="text-4xl font-bold text-white mb-8">Near-Earth Asteroids</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {asteroids.map((asteroid) => {
            // Guard against missing approach data
            const approach = asteroid.close_approach_data?.[0];
            if (!approach) {
              return null; // skip asteroids without approach info
            }

            return (
              <AsteroidCard
                key={`${asteroid.neo_reference_id}-${approach.close_approach_date}`}
                asteroid={asteroid}
              />
            );
          })}
        </div>
      </section>

      <SpaceExplorerFooter />
    </main>
  );
}
