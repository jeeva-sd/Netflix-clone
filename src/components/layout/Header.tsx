'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import netflixLogo from '~/assets/netflix-logo.png';

const Header: React.FC = () => {
    const { push } = useRouter();
    const pathname = usePathname();

    const navs: any[] = [
        { title: 'Home', path: '/', selected: false, beta: false },
        { title: 'Trending', path: '/trending', selected: false, beta: true },
        { title: 'Watch-list', path: '/watchlist', selected: false, beta: false }
    ];

    const sideBarNavs = useMemo(() => {
        return navs.map((nav: any) => {
            if (pathname === nav.path) {
                return { ...nav, selected: true };
            }

            return nav;
        });
    }, [pathname]);

    return (
        <header>
            <nav className='shadow-black'>
                <div className='flex justify-around relative top-7 z-10 ml-10 items-center max-[1020px]:justify-between'>
                    <div className='-ml-48 max-[1020px]:-ml-0 max-[350px]:-ml-5'>
                        <Image
                            className='h-10 w-[148px] max-sm:h-6 max-sm:w-24'
                            src={netflixLogo}
                            width={100}
                            height={40}
                            alt='Netflix Logo'
                        />
                    </div>
                    <div className='-mr-64 flex gap-5 max-[1020px]:-mr-0'>
                        <div className='flex items-center gap-5 px-2'>
                            {sideBarNavs.map((nav: any, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => push(nav.path)}
                                    className={nav.selected ? 'text-red-600 font-medium tracking-tight' : 'tracking-tight text-white'}>
                                    {nav.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
