
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
    

    return(
        <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
            <h1 className="text-2xl text-white font-bold">
            <i className=" text-[#6556CD] ri-tv-line text-2xl mr-2"></i>
            <span className="text-2xl">Baburao</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 my-5">New Feeds</h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i class="mr-2 ri-fire-fill"></i>Trending
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i class="mr-2 ri-bard-fill"></i>Popular
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i class="mr-2 ri-movie-2-fill"></i>Movies
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i class="mr-2 ri-tv-2-fill"></i>Tv shows
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i class="mr-2 ri-team-line"></i>People
                </Link>
                
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 my-5">Website Information</h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i class="mr-2 ri-information-2-fill"></i>About
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg ">
                    <i class="mr-2 ri-phone-fill"></i>Contact Us
                </Link>
                
            </nav>
        </div>
    )
}

export default Sidenav;