import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #3d3d66;
    height: 85px;
    display: flex;
    justify-content: space-between;
    font-size: 14pt;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    font-family: "Gill Sans", sans-serif;
`;

export const NavHome = styled(Link)`
    color: #dcdcde;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    padding-right: 100px;
    height: 100%;
    cursor: pointer;
    font-size: 16pt;
    &.active {
        font-size: 18pt;
        color: #ffffff;
    };
    &:hover {
        transition: 0.2s;
        color: #ffffff;
    };
`;

export const NavLink = styled(Link)`
    color: #dcdcde;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 6rem;
    height: 100%;
    cursor: pointer;
    &.active {
        font-size: 18pt;
        color: #ffffff;
    };
    &:hover {
        transition: 0.2s;
        color: #ffffff;
    };
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fffff;
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


