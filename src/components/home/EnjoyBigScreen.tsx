import Image from 'next/image';
import React from 'react';
import { pageAssets } from '~/contents/PageContents';

const EnjoyBigScreen = () => {
    return (
        <React.Fragment>
            <div className='lg:h-[43.75rem] py-32 w-full flex items-center justify-center flex-wrap'>
                <div className='text-white lg:text-start text-center lg:w-4/12 w-full text-5xl max-[960px]:text-3xl max-[480px]:text-2xl lg:px-0 px-10'>
                    <h2 className='font-bold'>Enjoy on your TV</h2>
                    <p className='font-medium lg:text-2xl text-lg mt-5'>Watch on smart TVs, PlayStation, Xbox,
                        Chromecast, Apple TV, Blu-ray players and more.
                    </p>
                </div>

                <div className='relative flex justify-center lg:w-5/12 w-10/12'>
                    <Image
                        width={650}
                        height={650}
                        src={pageAssets.bigScreenImage}
                        alt=''
                        className='z-10 relative w-full' />
                    <div className='absolute top-[20%] left-[18%] overflow-hidden'>
                        <video autoPlay playsInline muted loop>
                            <source
                                src={pageAssets.bigScreenVideo}
                                type='video/mp4'
                            />
                        </video>
                    </div>
                </div>
            </div>

            <hr className="border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]" />
        </React.Fragment>
    );
};

export default EnjoyBigScreen;