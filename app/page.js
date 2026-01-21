'use client';

import { useEffect, useState } from 'react';
import Apod from './components/Apod.js';
import Image from "next/image";

async function fetchAPOD() {
  const API_KEY = "sWFq4D2q9N3UDDF6scWrOG6v6seOHzk2dVp3SrwJ";
  const URL = "https://api.nasa.gov/planetary/apod?api_key=sWFq4D2q9N3UDDF6scWrOG6v6seOHzk2dVp3SrwJ";

  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
}

export default async function Page() {
  const data = await fetchAPOD();

  return (
    <main>
      <h1>Welcome to My Nasa API WebApp</h1>
      <Apod data={data} />
    </main>
  );
}