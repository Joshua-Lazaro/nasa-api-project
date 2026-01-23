'use client';

import { useEffect, useState } from 'react';
import Apod from './Apod/Apod.js';
import LandingPage from './LandingPage/LandingPage.js';
import ApodPage from './Apod/page.js';

export default function Page() {
      return (
      <main>
        {/*<Apod data={data} />*/}
        <LandingPage />
      </main>
      );   
  }
