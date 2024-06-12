import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    return (
        <>
        <Link onClick={() => navigate(-1)} 
                className="ri-arrow-left-line text-2xl text-zinc-200 hover:text-[#6556CD] h-[3.5vh] hover:bg-zinc-100 rounded-full px-3 mt-2 mx-2 "></Link>
        <div className="mx-[30%] flex flex-col  justify-center text-center">
            <h1 className="text-3xl font-semibold text-[#6556CD] ">We are waiting to hear from you </h1>
            <h1 className="text-3xl font-semibold text-zinc-300 ">you can email us at: </h1>
            <h1 className="text-5xl font-semibold text-zinc-300 mt-10"><i className="ri-mail-line"></i>shankarshashi386@gmail.com</h1>
            <p className="text-3xl font-semibold text-zinc-500 mt-3">or</p>
            <h1 className="text-5xl font-semibold text-zinc-300 mt-10"><i className="ri-mail-line"></i>ksachin814112@gmail.com</h1>
        </div>
        </>
    )
}

export default Contact;