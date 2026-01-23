'use client';
import { useEffect, useState, createContext } from 'react';

export const NeoContext = createContext(null); //context to hold APOD data

export function NeoProvider({ children }) { //provider component to fetch and provide APOD data
    const [data, setData] = useState(null);
      useEffect(() => {
        async function fetchNEO(){
          const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=sWFq4D2q9N3UDDF6scWrOG6v6seOHzk2dVp3SrwJ`;
          const res = await fetch(URL);
          if(!res.ok) {
            throw new Error('Failed to fetch APOD data');
          }
          const json = await res.json();
          console.log("Asteroid Data: ");
          console.log(json);
          setData(json);
        }
        fetchNEO();
        }, []);
        return(
        <NeoContext.Provider value={data}>
        {children}
        </NeoContext.Provider>
  );
}