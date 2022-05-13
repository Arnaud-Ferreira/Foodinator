import React from 'react';
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";

function Carnivorous() {

  const [carnivorous, setCarnivorous] = useState([]);

  useEffect(() => {
      getCarnivorous();
  },[]);

  const getCarnivorous = async () => {


      const check = localStorage.getItem('carnivorous');

      if(check) {
          setCarnivorous(JSON.parse(check));
      }else{
          const api = await fetch( 
              `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=meat`
              );
          const data = await api.json();

          localStorage.setItem('carnivorous', JSON.stringify(data.recipes));
          setCarnivorous(data.recipes);
      }

  };

  return (
    <div>
            <Wrapper>
               <h3>Carnivorous Picks</h3>
              <Splide
                options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "2.5 rem",
                }}>
                {carnivorous.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient />
                        </Card>
                        </SplideSlide>
                    );
                })}
              </Splide>
            </Wrapper>
</div>
  )
}

const Wrapper = styled.div`
 margin: 4rem 0rem;
`;

const Card = styled.div`
 min-height: 25rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;

 img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
 p {
     position: absolute;
     z-index: 10;
     left: 50%;
     bottom: 0%;
     transform: translate(-50%, 0%);
     color: white;
     width: 100%;
     text-align: center;
     font-size: 1rem;
     height: 40%;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 `;

 const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), #52515166);
  `;


export default Carnivorous;