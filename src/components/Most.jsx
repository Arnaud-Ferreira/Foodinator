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
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
        // going to give me a json format to be able to play around with the data
        const data = await api.json();
        setMost(data.recipes);
    };

    return (
        <div>
            {/* we have saved all the datas in most thank's to useState so now mapping into the variable */}
                    <Wrapper>
                       <h3>Most Picked</h3>
                      <Splide>
                        {most.map((recipe) => {
                            return(
                                <SplideSlide>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
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

 img{
    border-radius: 2rem;
 }
 `;

export default Most