import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #563440;
    height: 85px;
    display: flex;
    justify-content: space-between;
    font-size: 11pt;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavHome = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    padding-right: 100px;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #DDCECD;
    }
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 6rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #DDCECD;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #ffffff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


