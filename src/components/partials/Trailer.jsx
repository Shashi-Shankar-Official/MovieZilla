import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';

function Trailer() {
    const navigate = useNavigate();
    const {pathname}= useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo =useSelector(state => state[category].info.videos);
    return (
        <div className=' bg-[rgba(0,0,0,.7)] z-[100] absolute top-0 left-0 w-screen h-full flex item-center justify-center'>
            <Link onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-200 hover:text-[#6556CD] h-[3.5vh] hover:bg-zinc-100 rounded-full px-3 mt-2 mx-2 "></Link>

            {ytvideo  ? <ReactPlayer
            controls
              height = {800}
              width={1500} 
              url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/> : <NotFound />}    
            
        </div>
    )
}

export default Trailer;