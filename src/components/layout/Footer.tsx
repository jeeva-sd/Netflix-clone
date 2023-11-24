import React from 'react';
import { IoLanguageOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <>
            <hr className='border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)] mt-20'></hr>

            <footer className='pb-20 pt-10'>
                <div className='w-9/12 mx-auto h-10 mt-40 flex items-center'>
                    <p className='text-gray-300'>
                        Questions? Call {' '}
                        <u>
                            <a href='tel:000-800-919-1694'>000-800-919-1694</a>
                        </u>
                    </p>
                </div>
                <div
                    className='text-gray-300 text-sm grid grid-cols-3 mx-auto w-9/12 mt-5 mb-5 max-md:grid-cols-2 gap-y-8 max-[640px]:grid-cols-2'>
                    <div>
                        <ul className='grid gap-y-3 underline'>
                            <li>FAQ</li>
                            <li>Media center</li>
                            <li>Ways to Watch</li>
                            <li>Cookie Preferences</li>
                            <li>Speed Test</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid gap-y-3 underline'>
                            <li>Help Center</li>
                            <li>Investor Relations</li>
                            <li>Terms of Use</li>
                            <li>Corporate Information</li>
                            <li>Legal Notices</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid gap-y-3 underline'>
                            <li>Account</li>
                            <li>Jobs</li>
                            <li>Privacy</li>
                            <li>Contact Us</li>
                            <li>Only on Netflix</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center text-white w-9/12 mx-auto h-10 mt-10'>
                    <IoLanguageOutline className='fa-solid fa-globe absolute ml-2' />

                    <select name='' id='' className='bg-[rgb(35,35,35)] w-32 pl-8 font-bold h-8 rounded border border-gray-300'>
                        <option value='English'>
                            English
                        </option>
                        <option value='हिंदी'>
                            हिंदी
                        </option>
                    </select>
                </div>
                <div className='flex items-center text-gray-300 w-9/12 mx-auto h-10'>
                    Netflix India
                </div>
            </footer>
        </>
    );
};

export default Footer;
