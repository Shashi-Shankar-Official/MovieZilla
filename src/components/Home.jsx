import React from 'react';
import Sidenav  from './partials/Sidenav.jsx';
import Topnav from './partials/Topnav.jsx';

const Home = () => {
    document.title = "BabuRao | Homepage"
    return (
        <>
        <Sidenav />
        <div className='w-[80%] h-full'>
            <Topnav  />
        </div>
        </>
    )
}

export default Home;