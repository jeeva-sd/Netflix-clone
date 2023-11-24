import Image from 'next/image';
import React from 'react';
import { pageAssets } from '~/contents/PageContents';

const LandingScreen: React.FC = () => {
    return (
        <React.Fragment>
            <div className='overflow-hidden w-full h-[85vh] -mt-10'>
                <Image
                    alt='landingPageBgUrl'
                    width={200}
                    height={200}
                    src={pageAssets.landingPageBgUrl}
                    className='object-cover scale-125 -translate-y-[10%] h-full w-full ' />
                <div
                    className='absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-[#000000cf] to-[#000000cf] via-[#0000005a] h-[85vh]'>
                </div>
                <hr className='border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]' />
            </div>

            <div className='flex justify-center'>
                <div className='absolute top-0 flex justify-center flex-col items-center h-[95vh] max-[960px]:h-[78vh] max-[960px]:mt-20 max-[600px]:h-[72vh] text-white font-extrabold text-center max-[480px]:mt-10'>
                    <div>
                        <p className='text-5xl max-[960px]:text-3xl max-[480px]:text-2xl lg:w-[1150px] md:w-[800px] '>
                            The biggest Indian hits. The best Indian stories.  All streaming here.
                        </p>
                    </div>
                    <div className='mt-5 mb-5 text-sm font-normal'>
                        <p className='tracking-tight text-2xl max-[960px]:text-lg max-[480px]:text-base'>
                            Watch anywhere. Cancel anytime.</p>
                    </div>
                    <div className='mb-3 font-normal'>
                        <p className='text-[20px] tracking-tight max-[960px]:text-lg max-[480px]:text-base'>
                            Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <div>
                            <input type='email' name='' id='email' placeholder='Email address'
                                className=' text-white bg-[rgba(0,0,0,0.29)] border border-gray-400 rounded p-4 w-[400px] font-medium max-[960px]:w-[300px] placeholder:text-white max-[300px]:w-[230px]' />
                        </div>

                        <div>
                            <button
                                className='bg-red-600 p-3 rounded  flex items-center font-bold ml-5 w-60 max-[960px]:w-40 max-[480px]:mt-3'>
                                <p className='mx-auto text-2xl max-[960px]:text-xl'><label htmlFor='email'>Get Started </label></p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LandingScreen;
