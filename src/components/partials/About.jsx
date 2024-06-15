import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="flex items-center justify-between w-full max-w-4xl px-8 py-4">
                <Link onClick={() => navigate(-1)} className="text-2xl text-gray-200 hover:text-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-semibold mb-4">Welcome to Movie Magic!</h1>
                <p className="text-lg text-gray-400 mb-8">Your ultimate destination for movie lovers.</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a8 8 0 018 8c0 3.866-2.746 7.072-6.383 7.84a1 1 0 11-.327-1.966A6 6 0 104 10a1 1 0 011-1 8 8 0 015-7.333V2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold">Shashi Shankar</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a8 8 0 018 8c0 3.866-2.746 7.072-6.383 7.84a1 1 0 11-.327-1.966A6 6 0 104 10a1 1 0 011-1 8 8 0 015-7.333V2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold">Sachin Kumar</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
