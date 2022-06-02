import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import './Detail.scss';

import React from 'react';

function Detail() {

    let params = useParams();
    const [details, setDetails] = useState({});
    // Simple way to get class active on button's
    const [activeButton, setActiveButton] = useState("instructions");

    const fetchRecipes = async () => {
        // Give me data about of each recipes
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            );
        // I save it
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id]);

    return (
        <DetailWrapper>
        <div className="left">
            <h2>{details.title}</h2>
            <img className="image" src={details.image} alt="recipe" />
        </div>
        <Info>
            {/* When we click on the instructions button i can run a function that say to set the active button to instructions */}
            <Button
             className={activeButton === 'instructions' ? 'active' : ''}
             onClick={() => setActiveButton('instructions')}
             >
              Instructions
            </Button>
            <Button
             className={activeButton ==='ingredients' ? 'active' : ''}
             onClick={() => setActiveButton("ingredients")}
             >
              Ingrédients
            </Button>

            {/* If it's true then render out anything here */}
            {activeButton === 'instructions' && (
                <div className="wrapper">
                <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
            )}
            {activeButton === 'ingredients' && (
                <ul className="article">
                {details.extendedIngredients.map((ingredient) => ( 
                    <li className='element' key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
            
        </Info>
        </DetailWrapper>
    );
}

// Styled components
const DetailWrapper = styled.div`
   margin-top: 10rem;
   margin-bottom: 5rem;
   display: flex;
   .active{
       background: linear-gradient(35deg, #c55424, #800a0a);
       color: white;
   }
   h2{
       margin-bottom: 2rem;
   }
   li{
       font-size: 1.2rem;
       line-height: 2.5rem;
   }

`;

const Button = styled.button`
    cursor: pointer;    
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    transform: scale(0.9);
    &:hover{
        transform: scale(1);
        transition: all 0.2s ease-in-out;
    }
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Detail;
