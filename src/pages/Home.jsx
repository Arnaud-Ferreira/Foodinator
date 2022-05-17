// Home gonna contains the two components
import Carnivorous from "../components/Carnivorous";
import Most from "../components/Most";
import Vegetarian from "../components/Veggie";
import {motion} from 'framer-motion';

import React from 'react'

function Home() {
  return (
    // all the element i want transitioned needs to be wrapped into motion div
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
        <Carnivorous />
        <Most />
        <Vegetarian />
    </motion.div>
  )
}

export default Home