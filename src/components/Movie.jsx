import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../components/partials/Topnav.jsx';
import Dropdown from '../components/partials/Dropdown.jsx';
import axios from '../utils/axios.jsx'
import Cards from '../components/partials/Cards.jsx';
import Loding from '../components/partials/Loding.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
function Movie() {
    document.title = "MovieZilla | Movies";

    const navigate = useNavigate();    
    const [category,setcategory] = useState("now_playing");
    const [movie,setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);


    const GetMovie =  async() => {
        try {
            const {data} = await axios.get(`/movie/${category}?page=${page}`);  
            // console.log(data);          
            // settrending(data.results);
            if(data.results.length > 0)  {
                setmovie((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
            } else {
                sethasMore(false);
            }            
        } catch (error) {
            console.error( error);
        }
    }
    

    const refreshHandler = () => {
        if(movie.length === 0) {
            GetMovie();
        } else {
            setpage(1);
            setmovie([1]);
            GetMovie();
        }
    }

    useEffect(() => {
        refreshHandler();
    },[category]);
    return movie.length >0 ?  (
        <div className=' w-screen h-screen'>

            <div className='w-full flex items-center'>                
                <i onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-200 rounded-full px-3 mt-2 mx-2 "></i>
                <h1 className='text-3xl font-semibold text-zinc-400'>Movie</h1>

                <Topnav />
                <Dropdown title="Category" options={["popular","top_rated","upcomming","now_playing"]} func={(e) => setcategory(e.target.value)} />
                <div className='w-[2%]' ></div>
                
            </div>

            <InfiniteScroll 
               dataLength={movie.length}
               next={GetMovie()}
               hasMore={hasMore}
               loader={<h1>Loading...</h1>}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>

            

        </div> 
    ) : <Loding />;
}

export default Movie;