import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../components/partials/Topnav.jsx';
import Dropdown from '../components/partials/Dropdown.jsx';
import axios from '../utils/axios.jsx'
import Cards from '../components/partials/Cards.jsx';
import Loding from '../components/partials/Loding.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
function  People() {
    document.title = "MovieZilla | People";

    const navigate = useNavigate();    
    const [category,setcategory] = useState("popular");
    const [people,setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);


    const GetPeople =  async() => {
        try {
            const {data} = await axios.get(`/person/${category}?page=${page}`);  
            // console.log(data);          
            // settrending(data.results);
            if(data.results.length > 0)  {
                setpeople((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
            } else {
                sethasMore(false);
            }            
        } catch (error) {
            console.error( error);
        }
    }
    

    const refreshHandler = () => {
        if(people.length === 0) {
            GetPeople();
        } else {
            setpage(1);
            setpeople([1]);
            GetPeople();
        }
    }

    useEffect(() => {
        refreshHandler();
    },[category]);

    return people.length >0 ?  (
        <div className=' w-screen h-screen'>

            <div className='w-full flex items-center'>                
                <i onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-400 hover:text-[#6556CD] hover:bg-zinc-200 rounded-full px-3 mt-2 mx-2 "></i>
                <h1 className='text-3xl font-semibold text-zinc-400 text-center'>People</h1>

                <Topnav />             
                
            </div>

            <InfiniteScroll 
               dataLength={people.length}
               next={GetPeople()}
               hasMore={hasMore}
               loader={<h1>Loading...</h1>}
            >
                <Cards data={people} title={category} />
            </InfiniteScroll>

            

        </div> 
    ) : <Loding />;
}

export default People;