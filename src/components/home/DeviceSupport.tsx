import React from 'react';
import { pageAssets } from '~/contents/PageContents';

const DeviceSupport = () => {
    return (
        <React.Fragment>
            <div className='lg:h-[43.75rem] w-full flex items-center justify-center flex-wrap'>
                <div className='text-white text-center mb-20 mt-20'>
                    <h2 className='text-5xl max-[960px]:text-3xl max-[480px]:text-2xl font-bold'>Watch everywhere</h2>
                    <p className='font-medium lg:text-2xl text-lg mt-5 w-[600px] max-[600px]:w-full max-[1240px]:w-full px-28 lg:px-0'>
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                    </p>
                </div>
                <div className='relative flex justify-center mb-20 mt-20'>
                    <img
                        src={pageAssets.deviceSupportImage}
                        alt=''
                        className='w-[90%] z-10 relative'
                    />
                    <div className='absolute top-[12%] left-[19.5%] max-w-[60%] max-h-[55%] overflow-hidden'>
                        <video autoPlay playsInline muted loop>
                            <source
                                src={pageAssets.deviceSupportVideo}
                                type='video/mp4'
                            />
                        </video>
                    </div>
                </div>
            </div>
            <hr className='border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]' />
        </React.Fragment>
    );
};

export default DeviceSupport;
