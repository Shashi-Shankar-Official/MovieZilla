import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import Loding from "./partials/Loding";

function Moviedetails() {
    const navigate = useNavigate(); 
    const {id} = useParams();
    const {info} = useSelector(state => state.movie);
    const dispatch= useDispatch();
    console.log(info);
    useEffect(() => {
        dispatch(asyncloadmovie(id));
        return () => {
            dispatch(removemovie());
        }
    },[]);
    return info ?  (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),
                        url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
            backgroundPosition: "top-[40%]",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
            className="w-screen h-screen px-[10%]" >
                {/* part 1 navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 items-center text-xl">
            <Link onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-200 hover:text-[#6556CD] hover:bg-zinc-100 rounded-full px-3 mt-2 mx-2 "></Link>
    
            <a target="_blank" href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
            <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-global-line"></i></a>
            <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
            </nav>

            {/* part 2 poster and details */}
            <div className="w-full flex">
                <div>
                <img className='shadow-[8px_17px_38px_2px] h-[40vh] object-cover rounded-lg bg-zinc-500' 
                src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />

                <div className="mt-5">
                    {info.watchproviders && 
                        info.watchproviders.flatrate && 
                        info.watchproviders.flatrate.map(w => <img className="w-[5vh] h-[5vh] object-cover rounded-md"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />)}
                </div>
                </div>
            
            </div>

        </div>
    ) : <Loding />;
}

export default Moviedetails;