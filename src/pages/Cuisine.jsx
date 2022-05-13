import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getRecipes = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    // When the function is running & the component get mounted we pass a name based on URL and its gonna go on params and update the 'name' params on request
    useEffect(() => {
        getRecipes(params.type);
        // when the params in URL changes, this useEffect will run again
    },[params.type]);

  return (
    <Grid>
        {cuisine.map((recipe) => {
            return(
                <Card key={recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h4>{recipe.title}</h4>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
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
`;

export default Cuisine;