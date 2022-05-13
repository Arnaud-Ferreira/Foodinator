import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiChickenLeg, GiNoodles} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
    return(
        <List>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>Burger's</h4>
            </NavLink>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Pizza's</h4>
            </NavLink>
            <NavLink to={'/cuisine/Asian'}>
                <GiNoodles />
                <h4>Asian</h4>
            </NavLink>
            <NavLink to={'/cuisine/Cajun'}>
                <GiChickenLeg />
                <h4>Chicken</h4>
            </NavLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

export default Category