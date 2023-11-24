'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { dispatch } from '~/state/store';
import { removeList } from '~/state/reducers/watchlist';
import { trendingMovieData } from '~/contents/trendingMovieList';

export default function WatchList() {
    const [searchTerm, setSearchTerm] = useState('');
    const watchlist = useSelector((state: any) => state.watchlist.movieList);

    const filteredMovies = useMemo(() => {
        return trendingMovieData.filter((movie: any) =>
            (movie?.title?.toLowerCase().includes(searchTerm.toLowerCase()) && watchlist.includes(movie.id))
        );
    }, [watchlist, searchTerm]);

    const handleWatchList = (id: any) => {
        dispatch(removeList(id));
    };

    return (
        <div className="flex flex-col justify-center py-10">
            <div className='flex justify-center my-10 w-full px-10 h-4/12'>
                <input
                    type="text"
                    className='lg:w-6/12 w-full p-2 text-black'
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap justify-center gap-5 h-8/12">
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className='lg:w-2/12 w-6/12 border flex justify-center items-end flex-wrap'>
                        <Image
                            src={movie.poster_path}
                            alt={movie.title || ''}
                            width={200}
                            height={400}
                            className='w-full h-auto'
                        />
                        <h3 className="mt-2 text-lg font-bold line-clamp-1 text-center uppercase">{movie.title}</h3>
                        <button onClick={() => handleWatchList(movie.id)} className='text-center bg-red-600 p-2 w-full h-10'>Remove from Watchlist</button>
                    </div>
                ))}

                {filteredMovies.length === 0 && <div>No Movies Found</div>}
            </div>
        </div>
    );
}
