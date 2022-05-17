import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiChickenLeg, GiNoodles} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
    return(
        <List>
            <StyleLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>Burger's</h4>
            </StyleLink>
            <StyleLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Pizza's</h4>
            </StyleLink>
            <StyleLink to={'/cuisine/Asian'}>
                <GiNoodles />
                <h4>Asian</h4>
            </StyleLink>
            <StyleLink to={'/cuisine/Cajun'}>
                <GiChickenLeg />
                <h4>Chicken</h4>
            </StyleLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const StyleLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2.2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #c55424, #800a0a);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.7rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
    &:hover {
        background: linear-gradient(to right, #f27121, #e94057);
        transform: scale(1);
        transition: all 0.3s ease-out;

        svg {
           color: white;
            }
        h4 {
          color: white;
           } 
    }
`;

export default Category