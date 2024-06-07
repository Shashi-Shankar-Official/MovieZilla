import React from 'react';
import { Link } from 'react-router-dom';

function Cards({data, title}) {
    // console.log(data);
    // console.log(title);
    return (
        <div className='flex flex-wrap w-full h-full px-[3%] bg-[#1F1E24]'>
            {data.map((c,i) => (
                <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative w-[31vh] mr-[5%] mb-[5%]' key={i} >
                    <img className='shadow-[8px_17px_38px_2px] h-[40vh] object-cover rounded-lg bg-zinc-500' 
                    src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path || c.profile_path}`} alt="" />
                <h1 className='text-2xl text-zinc-400 text-center mt-3 font-semibold'>
                {c.name || c.title || c.original_name || c.original_title}
                </h1>

                {c.vote_average && <div className='absolute right-[-10%] bottom-[20%] text-white text-xl font-semibold bg-yellow-500 rounded-full w-[5vh] h-[5vh] flex justify-center items-center'>
                    {(c.vote_average * 10).toFixed()}<sup>%</sup></div>} 
                </Link>
            ))}
        </div>
    )
}

export default Cards;