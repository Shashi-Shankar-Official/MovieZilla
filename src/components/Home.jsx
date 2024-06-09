import React, {useEffect, useState} from 'react';
import Sidenav  from './partials/Sidenav.jsx';
import Topnav from './partials/Topnav.jsx';
import axios from "../utils/axios.jsx";
import Header from './partials/Header.jsx';
import HorizontalCards from './partials/HorizontalCards.jsx';
import Dropdown from './partials/Dropdown.jsx';
import Loding from './partials/Loding.jsx';

const Home = () => {
    document.title = "MovieZilla | Homepage";
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

    const GetHeaderWallpaper =  async() => {
        try {
            const {data} = await axios.get(`/trending/all/day`);            
            let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
            setwallpaper(randomdata);
        } catch (error) {
            console.error( error);
        }
    }
    // console.log(wallpaper);


    const GetTrending =  async() => {
        try {
            const {data} = await axios.get(`/trending/${category}/day`);            
            settrending(data.results);
        } catch (error) {
            console.error( error);
        }
    }

    useEffect(() => {
        GetTrending();
        !wallpaper && GetHeaderWallpaper();        
    },[category]);
    // console.log(wallpaper);
            
    return wallpaper && trending ? (
        <>
        <Sidenav />
        <div className='w-[80%] h-[120vh] overflow-auto overflow-x-hidden '>
            <Topnav  />
            <Header  data ={wallpaper}/>

            
            <div className="flex justify-between p-5">
            <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
            
            <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e)=> setcategory(e.target.value) } />
            </div>
            
            <HorizontalCards data={trending} func={setcategory} />
        </div>
        </>
    ): <Loding />
}

export default Home;