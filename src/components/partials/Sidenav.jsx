import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
    

    return(
        <div className='w-[20%] h-[150vh] bg-[#1F1E24] border-r-2 border-zinc-400 p-10'>
            <h1 className="text-2xl text-white font-bold">
            <i className=" text-[#6556CD] ri-tv-line text-2xl mr-2"></i>
            <span className="text-2xl">MovieZilla</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 my-5">New Feeds</h1>
                <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i className="mr-2 ri-fire-fill text-yellow-500"></i>Trending
                </Link>
                <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i className="mr-2 ri-bard-fill text-zinc-100"></i>Popular
                </Link>
                <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i className="mr-2 ri-movie-2-fill text-purple-400"></i>Movies
                </Link>
                <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i className="mr-2 ri-tv-2-fill text-pink-600"></i>Tv shows
                </Link>
                <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i className="mr-2 ri-team-line text-blue-400"></i>People
                </Link>
                
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 my-5">Website Information</h1>
                <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i className="mr-2 ri-information-2-fill"></i>About
                </Link>
                <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i className="mr-2 ri-phone-fill"></i>Contact Us
                </Link>
                
            </nav>
        </div>
    )
}

export default Sidenav;