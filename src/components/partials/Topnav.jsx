import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios.js";

function Topnav() {

   const [query, setquery] = useState("");
//    console.log(query);
const api_key = 'bda40107c84d59465bbd99dff6f7620b';

   const GetSearches = async() => {
    try {
        const d = await axios.get(`search/multi?api_key=${api_key}&query=${query}`);
        console.log(d);
    } catch (error) {
        console.error( error);
        
    }
}

useEffect(() => {
    GetSearches();
},[query]);

    return (
        <div className="w-full h-[10vh] relative flex justify-center items-center ">
            <i className=" text-zinc-400 text-3xl ri-search-line"></i>
            <input onChange={(e) => setquery(e.target.value)}
             value={query}
             className="text-zinc-200 w-[50%] mx-10 p-5 rounded-lg text-xl outline-none border-none bg-transparent " type="text" placeholder="search anything" />
             {query.length >0 && (
               <i onClick={() => setquery("")} className="text-zinc-400 text-3xl ri-close-circle-line"></i>
             )}
            

            <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded ">
                {/* <Link className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-4 border-zinc-100 ">
                   <img src="" alt="" />
                   <span>Hello everyone</span>
                </Link> */}
                
            </div>
        </div>
    )
}

export default Topnav;