import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import axios from "../../utils/axios.jsx";

function Trending() {
    const navigate = useNavigate();
    
    const [category,setcategory] = useState("all");
    const [duration,setduration] = useState("day");
    const [trending,settrending] = useState(null);

    const GetTrending =  async() => {
        try {
            const {data} = await axios.get(`/trending/${category}/${duration} `);            
            settrending(data.results);
        } catch (error) {
            console.error( error);
        }
    }
    console.log(trending);

    useEffect(() => {
        GetTrending();
    },[category,duration]);

    return (
        <div className='px-[3%] w-screen h-screen'>

            <div className='w-full flex items-center'>                
                <i onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-200 rounded-full px-3 mt-1"></i>
                <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>

                <Topnav />
                <Dropdown title="Category" options={["movie", "tv", "all"]} func="" />
                <div className='w-[2%]' ></div>
                <Dropdown title="Duration" options={["week", "day"]} func="" />
            </div>

        </div>
    )
}

export default Trending;