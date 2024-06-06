import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import axios from "../../utils/axios.jsx";
import Cards from './Cards.jsx';
import Loding from './Loding.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';


function Trending() {
    const navigate = useNavigate();
    
    const [category,setcategory] = useState("all");
    const [duration,setduration] = useState("day");
    const [trending,settrending] = useState([]);
    const [page, setpage] = useState(1);

    const GetTrending =  async() => {
        try {
            const {data} = await axios.get(`/trending/${category}/${duration} `);            
            // settrending(data.results);
            settrending((prevState) => [...prevState, ...data.results]);
            setpage(page+1);
        } catch (error) {
            console.error( error);
        }
    }
    // console.log(trending);

    const refreshHandler = async () => {
        if(trending.length === 0) {
            GetTrending();
        } else {
            setpage(1);
            settrending([1]);
        }
    }

    useEffect(() => {
        GetTrending();
    },[category,duration]);

    return trending.length >0 ?  (
        <div className=' w-screen h-screen'>

            <div className='w-full flex items-center'>                
                <i onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-200 rounded-full px-3 mt-1"></i>
                <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>

                <Topnav />
                <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />
                <div className='w-[2%]' ></div>
                <Dropdown title="Duration" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
            </div>

            <InfiniteScroll 
               dataLength={trending.length}
               next={GetTrending()}
               hasMore={true}
               loader={<h1>Loading...</h1>}
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>

            

        </div> 
    ) : <Loding />;
}

export default Trending;