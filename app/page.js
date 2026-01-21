'use client';

import { useEffect, useState } from 'react';
import Apod from './Apod/Apod.js';
import LandingPage from './LandingPage/LandingPage.js';

export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchAPOD(){
      const URL = "https://api.nasa.gov/planetary/apod?api_key=sWFq4D2q9N3UDDF6scWrOG6v6seOHzk2dVp3SrwJ";

      const cached = localStorage.getItem('apodData');
      if (cached) {
        const parsed = JSON.parse(cached);
        const today = new Date().toISOString().split('T')[0];
        if (parsed.date === today) {
          console.log('Using cached data');
          setData(parsed);
          return;
        }
      }

      // Fetch fresh data
      const res = await fetch(URL);
      const json = await res.json();
      console.log(json);

      localStorage.setItem('apodData', JSON.stringify(json));
      setData(json);
    }

    fetchAPOD();
    }, []);
      return (
      <main>
        {/*<Apod data={data} />*/}
        <LandingPage />
      </main>
      );
  }
