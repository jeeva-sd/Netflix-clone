import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import { pageAssets } from '~/contents/PageContents';

const SecctionOne = () => {
    return (
        <React.Fragment>
            <div className='lg:h-[43.75rem] md:h-auto md:py-28 w-full flex items-center justify-evenly flex-wrap-reverse'>
                <div className='relative flex justify-center'>
                    <img src={pageAssets.downloadPageImageOne} alt='downloadPageImageOne' className=' mx-auto mb-20 mt-20' />

                    <div className='flex h-18 items-center justify-between border bg-black rounded-xl py-5 absolute w-8/12 bottom-28 pr-5'>
                        <img src={pageAssets.downloadPageImageTwo}
                            className='w-[51px] h-18 ml-4' alt='' />

                        <h2 className='text-white'>Stranger Things <br />
                            <span className='text-blue-600'>
                                Downloading...
                            </span>
                        </h2>

                        <MdOutlineFileDownload fontSize={30} />
                    </div>
                </div>

                <div className='text-white lg:text-start text-center'>
                    <h2 className=' text-5xl max-[960px]:text-3xl max-[480px]:text-2xl font-bold w-[600px] max-[900px]:w-full max-[900px]:mt-28'>Download your shows to
                        watch offline</h2>
                    <p className='font-medium lg:text-2xl text-lg mt-5 w-[500px] max-[900px]:w-full px-28 lg:px-0'>Save your favourites easily and always
                        have something to watch.</p>
                </div>
            </div>

            <hr className='border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]'></hr>
        </React.Fragment>
    );
};

export default SecctionOne;