import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../components/partials/Topnav.jsx';
import Dropdown from '../components/partials/Dropdown.jsx';
import axios from '../utils/axios.jsx'
import Cards from '../components/partials/Cards.jsx';
import Loding from '../components/partials/Loding.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';

function Popular() {
    document.title = "MovieZilla | Popular  ";

    const navigate = useNavigate();    
    const [category,setcategory] = useState("movie");
    const [popular,setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);


    const GetPopular =  async() => {
        try {
            const {data} = await axios.get(`/${category}/popular?page=${page}`);  
            // console.log(data);          
            // settrending(data.results);
            if(data.results.length > 0)  {
                setpopular((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
            } else {
                sethasMore(false);
            }            
        } catch (error) {
            console.error( error);
        }
    }
    

    const refreshHandler = () => {
        if(popular.length === 0) {
            GetPopular();
        } else {
            setpage(1);
            setpopular([1]);
            GetPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
    },[category]);


    return popular.length >0 ?  (
        <div className=' w-screen h-screen'>

            <div className='w-full flex items-center'>                
                <i onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-200 rounded-full px-3 mt-1"></i>
                <h1 className='text-3xl font-semibold text-zinc-400'>Popular</h1>

                <Topnav />
                <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />
                <div className='w-[2%]' ></div>
                
            </div>

            <InfiniteScroll 
               dataLength={popular.length}
               next={GetPopular()}
               hasMore={hasMore}
               loader={<h1>Loading...</h1>}
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>

            

        </div> 
    ) : <Loding />;
}

export default Popular;