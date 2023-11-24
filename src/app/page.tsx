'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DeviceSupport from '~/components/home/DeviceSupport';
import EnjoyBigScreen from '~/components/home/EnjoyBigScreen';
import FAQ from '~/components/home/FAQ';
import LandingScreen from '~/components/home/LandingScreen';
import SecctionOne from '~/components/home/SecctionOne';
import NetflixAnimation from "~/assets/netflix-animation.gif";

export default function Home() {
  const [NetflixPromo, setNetflixPromo] = useState(true);

  useEffect(() => {
    setTimeout(() => setNetflixPromo(false), 2000);
  }, []);

  return (
    <React.Fragment>

      {NetflixPromo ?
        <Image
          alt=''
          src={NetflixAnimation}
          className='w-screen h-screen'
          width={100} height={100}
        /> :
        <>
          <LandingScreen />
          <EnjoyBigScreen />
          <SecctionOne />
          <DeviceSupport />
          <FAQ />
        </>}

    </React.Fragment>
  );
}