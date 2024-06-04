import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({data}) {
    return (
        <div className="w-full h-[40vh] p-5">
            <div className="mb-5">
            <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
            

            <div className="select">
                <select defaultValue="0" name="format" id="format">
                    <option value="0" disabled>
                        Disabled Option
                    </option>
                </select>
            </div>
            </div>
            
            
            <div className="w-[100%] flex overflow-y-hidden">
                {data.map((d,i) => (
                    <div key={i} className="min-w-[15%] h-full mr-5 mb-5 bg-zinc-900">
                        <img className="w-full h-[55%] object-cover" src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || d.profile_path}`} alt="" />
                        <div className="text-white p-3 h-[45%]">
                        <h1 className=" mt-3 text-center w-[70%] text-xl font-semibold ">
                            {d.name || d.title || d.original_name || d.original_title}
                        </h1>
                        <p className="text-center">
                            {d.overview.slice(0,50)}...
                            <span className="text-zinc-400">more</span>
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HorizontalCards;