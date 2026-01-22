'use client';

import { useEffect, useState } from 'react';
import Apod from './Apod/Apod.js';
import LandingPage from './LandingPage/LandingPage.js';

export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchAPOD(){
      const URL = "https://api.nasa.gov/planetary/apod?api_key=sWFq4D2q9N3UDDF6scWrOG6v6seOHzk2dVp3SrwJ";

      const res = await fetch(URL, {
        next: { revalidate: 86400 } //Revalidates once a day cache
      });

      if(!res.ok) {
        throw new Error('Failed to fetch APOD data');
      }

      const json = await res.json();
      console.log(json);

      setData(json);
    }

    //fetchAPOD();
    }, []);
      return (
      <main>
        {/*<Apod data={data} />*/}
        <LandingPage />
      </main>
      );
  }
