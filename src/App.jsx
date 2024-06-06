import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Trending from "./components/partials/Trending.jsx";
import Popular from "./components/Popular.jsx";

function App() {
  return (
    <div className="bg-[#1F1E24]  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  )
}

export default App;