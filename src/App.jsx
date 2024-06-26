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
import Trailer from "./components/partials/Trailer.jsx";
import NotFound from "./components/partials/NotFound.jsx";
import About from "./components/partials/About.jsx";
import Contact from "./components/partials/Contact.jsx";

function App() {
  return (
    <div className="bg-[#1F1E24]  w-screen h-screen flex">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} >
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} >
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  )
}

export default App;