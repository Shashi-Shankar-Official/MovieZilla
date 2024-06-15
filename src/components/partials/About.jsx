import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function About() {
const navigate = useNavigate();
return (
<>
<Link onClick={() => navigate(-1)}
className="ri-arrow-left-line text-2xl text-zinc-200 hover:text-[#6556CD] h-[3.5vh] hover
rounded-full px-3 mt-2 mx-2 "></Link>
<div className="mx-[30%] px-5 text-center flex flex-col  justify-center  ">
<h1 className="text-3xl font-semibold text-zinc-500 ">This is a movie website, created with <span className="text-3xl text-rose-500">♥</span> by</h1>
<h1 className="text-5xl font-bold text-zinc-300 italic">Shashi Shankar</h1>
<h1 className="text-3xl font-semibold text-zinc-500 mt-3 mb-3">&</h1>
<h1 className="text-5xl font-bold text-zinc-300 italic">Sachin Kumar</h1>
</div>
</>
)
}

export default About;
