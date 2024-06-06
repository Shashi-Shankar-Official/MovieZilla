import React from 'react';
import { Link } from 'react-router-dom';

function Cards({data, title}) {
    // console.log(data);
    return (
        <div className='flex flex-wrap w-full h-full px-[3%] bg-[#1F1E24]'>
            {data.map((c,i) => (
                <Link className='w-[31vh] mr-[5%] mb-[5%]' key={i} >
                    <img className='shadow-[8px_17px_38px_2px] h-[40vh] object-cover' 
                    src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path || c.profile_path}`} alt="" />
                <h1 className='text-2xl text-zinc-400 text-center mt-3 font-semibold'>
                {c.name || c.title || c.original_name || c.original_title}
                </h1>
                </Link>
            ))}
        </div>
    )
}

export default Cards;