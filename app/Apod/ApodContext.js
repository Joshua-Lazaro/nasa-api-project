'use client';
import { useEffect, useState, createContext } from 'react';

export const ApodContext = createContext(null); //context to hold APOD data

export function ApodProvider({ children }) { //provider component to fetch and provide APOD data
    const [data, setData] = useState(null);
      useEffect(() => {
        async function fetchAPOD(){
          const URL = `https://api.nasa.gov/planetary/apod?api_key=sWFq4D2q9N3UDDF6scWrOG6v6seOHzk2dVp3SrwJ`;
          const res = await fetch(URL, {
            next: { revalidate: 43200 , tags: ["apod"]} //Revalidates once a day cache
          });
          if(!res.ok) {
            throw new Error('Failed to fetch APOD data');
          }
          const json = await res.json();
          console.log(json);
          setData(json);
        }
        fetchAPOD();
        }, []);
        return(
        <ApodContext.Provider value={data}>
        {children}
        </ApodContext.Provider>
  );
}