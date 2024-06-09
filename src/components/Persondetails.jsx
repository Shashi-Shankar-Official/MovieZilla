import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removepeople } from "../store/actions/personActions";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import Loding from "./partials/Loding";
import HorizontalCards from "./partials/HorizontalCards";

function Persondetails() {
    const {pathname} = useLocation();
    const navigate = useNavigate(); 
    const {id} = useParams();
    const {info} = useSelector((state) => state.person);
    const dispatch= useDispatch();
    // console.log(info);
    useEffect(() => {
        dispatch(asyncloadperson(id));
        return () => {
            dispatch(removepeople());
        }
    },[id]);


    return info ? (
        <div className="px-[10%] w-screen flex flex-col bg-[#1F1E24] h-[150vh]">

            {/* part 1 navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 items-center text-xl">
            <Link onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-200 hover:text-[#6556CD] hover:bg-zinc-100 rounded-full px-3 mt-2 mx-2 "></Link>  
            </nav>

            <div className="w-full  flex ">

                {/* part 2 left poster and details */}
                <div className="w-[20%]">
                <img className='shadow-[8px_17px_38px_2px] h-[40vh] object-cover rounded-lg bg-zinc-500' 
                src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />
                <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

                 {/* social media links */}
                <div className="text-2xl text-white flex items-center justify-center gap-5 ">
                <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-fill"></i></a>                
                <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-global-line"></i></a>
                <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-line"></i></a>
                <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-line"></i></a>
                
                </div>

                {/* Personal  information */}
                <h1 className="text-2xl text-zinc-400 font-semibold my-5">Personal Info</h1>
                <h1 className="text-lg text-zinc-400 font-semibold ">Known for</h1>
                <h1 className=" text-zinc-400 ">{info.detail.known_for_department}</h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
                <h1 className=" text-zinc-400 ">{info.detail.gender===2 ? "Male": "Female"}</h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
                <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">Place of birth</h1>
                <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>
                <h1 className="text-lg text-zinc-400 font-semibold mt-3">Also known as</h1>
                <h1 className=" text-zinc-400 ">{info.detail.also_known_as.join(", ")}</h1>
                </div>

                {/* part 3 right details and information */}
                <div className="w-[80%] ml-[5%]">
                <h1 className="text-6xl text-zinc-400 font-black my-5">{info.detail.name}</h1>
                <h1 className="text-xl text-zinc-400 font-semibold ">Biography</h1>
                <p className="text-zinc-400 mt-3 h-[15vh] overflow-y-auto">{info.detail.biography}</p>

                <h1 className="text-lg font-semibold text-zinc-400 mt-5 ">Known For</h1>  
                <HorizontalCards data={info.combinedCredits.cast} />              
                </div>
            </div>
        </div>
    ) : <Loding />;
}

export default Persondetails;