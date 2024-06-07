import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../components/partials/Topnav.jsx';
import Dropdown from '../components/partials/Dropdown.jsx';
import axios from '../utils/axios.jsx'
import Cards from '../components/partials/Cards.jsx';
import Loding from '../components/partials/Loding.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
function TvShows() {
    document.title = "MovieZilla | Tv Shows";

    const navigate = useNavigate();    
    const [category,setcategory] = useState("airing_today");
    const [tv,settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);


    const GetTv =  async() => {
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`);  
            // console.log(data);          
            // settrending(data.results);
            if(data.results.length > 0)  {
                settv((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
            } else {
                sethasMore(false);
            }            
        } catch (error) {
            console.error( error);
        }
    }
    

    const refreshHandler = () => {
        if(tv.length === 0) {
            GetTv();
        } else {
            setpage(1);
            settv([1]);
            GetTv();
        }
    }

    useEffect(() => {
        refreshHandler();
    },[category]);
    return tv.length >0 ?  (
        <div className=' w-screen h-screen'>

            <div className='w-full flex items-center'>                
                <i onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-200 rounded-full px-3 mt-2 mx-2 "></i>
                <h1 className='text-3xl font-semibold text-zinc-400 text-center'>Tv Shows</h1>

                <Topnav />
                <Dropdown title="Category" options={["popular","top_rated","airing_today","on_the_air"]} func={(e) => setcategory(e.target.value)} />
                
                
            </div>

            <InfiniteScroll 
               dataLength={tv.length}
               next={GetTv()}
               hasMore={hasMore}
               loader={<h1>Loading...</h1>}
            >
                <Cards data={tv} title="tv" />
            </InfiniteScroll>

            

        </div> 
    ) : <Loding />;
}

export default TvShows;