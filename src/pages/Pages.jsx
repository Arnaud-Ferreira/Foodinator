// Render out the home in here because this file gonna be huge & to not bloat up App basic function
import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Detail from './Detail';
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Detail />}/>
      </Routes>
  );
}

export default Pages;