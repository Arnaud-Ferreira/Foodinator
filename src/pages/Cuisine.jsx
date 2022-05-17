import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useParams} from 'react-router-dom';


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getRecipes = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    // When the function is running & the component get mounted we pass a name based on URL and its gonna go on params and update the 'name' params on request
    useEffect(() => {
        getRecipes(params.type);
        // when the params in URL changes, this useEffect will run again
    },[params.type]);

  return (
    <Grid
    // when navigate to the page its gonna fade in from initial 0 to 1
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
        {cuisine.map((recipe) => {
            return(
                <Card key={recipe.id}>
                    <Link to={'/recipe/' + recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h4>{recipe.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    transform: scale(0.9);
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a{
        text-decoration: none;
    }

    h4 {
        text-align: center;
    }
    &:hover{
     transform: scale(1);
     transition: all 0.3s ease-in-out;
 }
`;

export default Cuisine;