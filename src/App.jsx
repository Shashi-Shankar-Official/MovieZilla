import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Trending from "./components/partials/Trending.jsx";
import Popular from "./components/Popular.jsx";
import Movie from "./components/Movie.jsx";
import TvShows from "./components/TvShows.jsx";
import People from "./components/People.jsx";
import Moviedetails from "./components/Moviedetails.jsx";
import Tvdetails from "./components/Tvdetails.jsx";
import Persondetails from "./components/Persondetails.jsx";

function App() {
  return (
    <div className="bg-[#1F1E24]  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
      </Routes>
    </div>
  )
}

export default App;