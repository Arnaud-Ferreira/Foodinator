import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

  const [input, setInput] = useState("");

  // To navigate between pages with the input
  const navigate = useNavigate();

  // On enter i want to load up another page
  const submitHandler = (e) => {
    // I don't want the page to refresh on enter
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch />
          <input
           onChange={(e) => setInput(e.target.value)}
           type="text"
           value={input} 
          />
        </div>
    </FormStyle>
  );
}


const FormStyle = styled.div`
    margin: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    div {
        width: 60%;
        position: relative;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.4rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;