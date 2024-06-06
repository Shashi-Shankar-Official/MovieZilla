import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Trending from "./components/partials/Trending.jsx";
import Popular from "./components/Popular.jsx";
import Movie from "./components/Movie.jsx";
import TvShows from "./components/TvShows.jsx";
import People from "./components/People.jsx";

function App() {
  return (
    <div className="bg-[#1F1E24]  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv_shows" element={<TvShows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  )
}

export default App;