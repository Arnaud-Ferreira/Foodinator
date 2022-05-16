import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

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
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
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
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>
            )}
            {activeButton === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => ( 
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
            
        </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
   margin-top: 10rem;
   margin-bottom: 5rem;
   display: flex;
   .active{
       background: linear-gradient(35deg, #494949, #313131);
       color: white;
   }
   h2{
       margin-bottom: 2rem;
   }
   li{
       font-size: 1.2rem;
       line-height: 2.5rem;
   }
   ul{
       margin-top: 2rem;
   }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Detail;
