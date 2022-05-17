// Render out the home in here because this file gonna be huge & to not bloat up App basic function
import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Detail from './Detail';
import { Route, Routes } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import {useLocation} from "react-router-dom";

function Pages() {
  const location = useLocation();
  return (
    // i want to fade out this page before the other comes in
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Detail />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;


// Note about framer motion :
// To fade in and fade out we need to detect when the component fades out to bring
// the other one in => need to detect the presence to detect the change

// We need to add a key and a location with the router only