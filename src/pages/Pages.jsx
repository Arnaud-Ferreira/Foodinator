// Render out the home in here because this file gonna be huge & to not bloat up App basic function

import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
  );
}

export default Pages;