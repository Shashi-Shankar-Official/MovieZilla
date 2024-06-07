import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { useLocation, useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import Loding from "./partials/Loding";
import HorizontalCards from "./partials/HorizontalCards";

function Moviedetails() {
    const {pathname} = useLocation();
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
    },[id]);
    return info ?  (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),
                        url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
            backgroundPosition: "top-[40%]",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
            className="w-screen h-[140vh] px-[10%]" >
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

                <img className='shadow-[8px_17px_38px_2px] h-[50vh] object-cover rounded-lg bg-zinc-500' 
                src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />

                <div className="content ml-[10%] text-white">
                    <h1 className="text-5xl font-black  italic">
                        {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
                        <small className="text-2xl font-bold text-zinc-300">({info.detail.release_date.split("-")[0]})</small>
                    </h1>
                    
                    <div className="mt-3 mb-5 flex items-center gap-x-5">
                    <span className='text-white text-xl font-semibold bg-yellow-500 rounded-full w-[5vh] h-[5vh] flex justify-center items-center'>
                    {(info.detail.vote_average * 10).toFixed()}<sup>%</sup></span>

                    <h1 className="text-2xl font-semibold w-[60px] leading-6">User Score</h1>
                    <h1>{info.detail.release_date}</h1>
                    <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
                    <h1>{info.detail.runtime}min</h1>
                    </div>

                    <h1 className="text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>

                    <h1 className="text-2xl mb-2 mt-5 ">Overview</h1>
                    <p className="">{info.detail.overview}</p> 

                    <h1 className="text-2xl mb-2 mt-5 ">Movie Translated</h1>
                    <p className="mb-10">{info.translations.join(", ")}</p>      

                    <Link className="rounded-lg p-5 bg-[#6556CD] text-xl gap-2 items-center" to={`${pathname}/tailer`} >Play Trailer <i class="ri-play-circle-line"></i></Link>               
                    
                     
                </div>
            </div>


            {/* part 3 Available on Platform */}
            <div className="w-[80%] gap-y-5  flex flex-col mt-10">
            
                    {info.watchproviders && 
                        info.watchproviders.flatrate && 
                        <div className="flex gap-10 items-center text-zinc-200 ">
                          <h1 className="text-lg font-semibold">Available on platform</h1>
                          {info.watchproviders.flatrate.map((w,i) => <img id={i} title={w.provider_name} className="w-[5vh] h-[5vh] object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />)}
                        </div>
                    }

                    {info.watchproviders && 
                    info.watchproviders.rent && 
                        <div className="flex gap-x-10 items-center text-zinc-200">
                          <h1 className="text-lg font-semibold">Available on Rent</h1>
                          {info.watchproviders.rent.map((w,i) => <img id={i} title={w.provider_name} className="w-[5vh] h-[5vh] object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />)}
                        </div>
                    }

                    {info.watchproviders && 
                    info.watchproviders.buy && 
                        <div className="flex gap-10 items-center text-zinc-200">
                          <h1 className="text-lg font-semibold">Available to buy</h1>
                          {info.watchproviders.buy.map((w,i) => <img id={i} title={w.provider_name} className="w-[5vh] h-[5vh] object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />)}
                        </div>
                    }
                        
                
            </div>     

            {/* part 4 Recommendations and Similarity  */}
            <hr  className="mt-5 border-none h-[2px] bg-zinc-500"/>
            <h1 className="text-3xl text-white mt-10 font-semibold">Recommendations & Similar</h1>
            <HorizontalCards className=""
             data = {info.recommendations.length >0 ? info.recommendations : info.similar} />
            
            
        </div>
    ) : <Loding />;
}

export default Moviedetails;