import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

function Search() {
  return (
    <FormStyle>
        <div>
          <input type="text" />
          <FaSearch />
        </div>
    </FormStyle>
  );
}

const FormStyle = styled.div`
    margin: 0rem 20 rem;
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