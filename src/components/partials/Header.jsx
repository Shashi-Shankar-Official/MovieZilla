import React from "react";
import { Link } from "react-router-dom";

function Header({data}) {

    return (
        <div
  style={{
    background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),
                url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path || data.profile_path})`,
    backgroundPosition: "top-[40%]",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
  className="w-full h-[60vh] flex flex-col justify-end items-start p-[5%] ">
    <h1 className="text-5xl font-black text-white italic"> {data.name || data.title || data.original_name || data.original_title} </h1>
    <p className="w-[70%] text-white mt-3"> {data.overview.slice(0, 200)}...
      <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link></p>
    <p className="text-white ">
    <i className="ri-megaphone-fill text-yellow-500 text-xl"></i> {data.release_date || "No information"} &nbsp;  &nbsp; 
    <i className="ri-album-fill text-yellow-500 text-xl "></i> {data.media_type.toUpperCase()}
    </p>
    <Link to={`/${data.media_type}/details/${data.id}/trailer`} className=" bg-[#6556CD] p-3 rounded-lg mt-4 text-white font-semibold "> Watch Trailer
    </Link>

</div>

    )
}

export default Header;