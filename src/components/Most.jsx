import { useEffect, useState } from "react";
// this allows me create functoin that can attach components that has styling attached to it
import styled from "styled-components";
// Splide gonna be the carroussel & SplideSlide each individual card
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

function Most() {

    // To save the data's and use it
    const [most, setMost] = useState([]);

    // we run the getPopular function as soon as the components get mounted
    useEffect(() => {
        getMost();
    },[]);

    const getMost = async () => {


        const check = localStorage.getItem('most');

        // if i have an item in localstorage i want to set it (get it form LocalStorage)
        if(check) {
            // when i get the item back i gotta parsing it back to the array from string
            setMost(JSON.parse(check));
        }else{
            const api = await fetch( 
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
                );
            // going to give me a json format to be able to play around with the data
            const data = await api.json();

            // i gotta stringify the array to save it in localStorage
            localStorage.setItem('most', JSON.stringify(data.recipes));
            setMost(data.recipes);
        }

    };

    return (
        <div>
            {/* we have saved all the datas in most thank's to useState so now mapping into the variable */}
                    <Wrapper>
                       <h3>Most Picked</h3>
                      <Splide
                        options={{
                            perPage: 4,
                            arrows: false,
                            pagination: false,
                            drag: 'free',
                            gap: "2.5rem",
                        }}>
                        {most.map((recipe) => {
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

export default Most;