import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from './brand.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
      <Brand to={"/"}>
        <img className="logo" src={Logo} alt="logo"></img>
      </Brand>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Brand = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', cursive;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;

export default App;

