import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({data}) {
    return (                  
            <div className="w-[100%] flex overflow-x-auto overflow-y-auto bg-[#1F1E24] mb-5 p-5">
                {data.map((d,i) => (
                    <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%]  h-[40vh] mr-5 mb-5 bg-zinc-900">
                        <img className="w-full  h-[55%] object-cover" src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || d.profile_path}`} alt="" />
                        <div className="text-white p-3 h-[45%] overflow-y-auto">
                        <h1 className=" mt-3 text-center w-[70%] text-xl font-semibold ">
                            {d.name || d.title || d.original_name || d.original_title}
                        </h1>
                        <p className="text-center">
                            {d.overview.slice(0,50)}...
                            <span className="text-zinc-400">more</span>
                        </p>
                        </div>
                    </Link>
                ))}
            </div>
    )
}

export default HorizontalCards;