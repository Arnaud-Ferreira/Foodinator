import { useEffect, useState } from "react";

function Most() {

    // To save the data's and use it
    const [most, setMost] = useState([]);

    // we run the getPopular function as soon as the components get mounted
    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`);
        // going to give me a json format to be able to play around with the data
        const data = await api.json();
        setMost(data.recipes);
    }


    return (
        <div>
            {/* we have saved all the datas in most thank's to useState so now mapping into the variable */}
            {most.map((recipe) => {
                return(
                    <div key={recipe.id}>
                       <p>{recipe.title}</p> 
                    </div>
                )
            })}
        </div>
    )
}

export default Most