import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios.jsx";
import noimage from "/noimage.png";

function Topnav() {

   const [query, setquery] = useState("");
   const [searches, setsearches] = useState([]);


   const GetSearches = async() => {
    try {
        const {data} = await axios.get(`/search/multi?query=${query}`);
        // console.log(d);
        
        setsearches(data.results);
        // console.log(searches);
    } catch (error) {
        console.error( error);
        
    }
}

   useEffect(() => {
       GetSearches();
   }, [query]);

    return (
        <div className="w-full h-[10vh] relative flex justify-center items-center ">
            <i className=" text-zinc-400 text-3xl ri-search-line"></i>
            <input onChange={(e) => setquery(e.target.value)}
             value={query}
             className="text-zinc-200 w-[45%] mx-10 p-3 rounded-full text-xl outline outline-[#6556CD] border-none bg-transparent " type="text" placeholder="search anything" />
             {query.length >0 && (
               <i onClick={() => setquery("")} className="text-zinc-400 text-3xl ri-close-circle-line"></i>
             )}
            
            
            <div className="z-[100] absolute w-[45%] max-h-[50vh] bg-zinc-200 top-[100%] left-[25%] overflow-auto rounded-md ">
            {searches.map((s,i) => (
                 <Link to={`/${s.media_type}/details/${s.id}`} key={i} className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-4 border-zinc-100 ">
                   <img className="w-[20vh] h-[12vh] object-cover rounded-lg mr-7 shadow-lg" 
                   src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:noimage} alt="" />
                   <span> {s.name || s.title || s.original_name || s.original_title} </span>
                </Link> 
            ))}
                
                
            </div>
        </div>
    )
}

export default Topnav;
