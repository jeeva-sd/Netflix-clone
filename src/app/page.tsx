'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DeviceSupport from '~/components/home/DeviceSupport';
import EnjoyBigScreen from '~/components/home/EnjoyBigScreen';
import FAQ from '~/components/home/FAQ';
import LandingScreen from '~/components/home/LandingScreen';
import SecctionOne from '~/components/home/SecctionOne';
import NetflixAnimation from "~/assets/netflix-animation.gif";
import { updateIntro } from '~/state/reducers/common';
import { dispatch } from '~/state/store';
import { useSelector } from 'react-redux';

export default function Home() {
  const isIntroPlayed = useSelector((state: any) => state.common.introShown);
  const [NetflixPromo, setNetflixPromo] = useState(!isIntroPlayed);

  useEffect(() => {
    if (!isIntroPlayed) setTimeout(() => setNetflixPromo(false), 2000);
    dispatch(updateIntro());
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