import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavHome
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavHome to='/' activeStyle>
                        LOGAN KEENER
                    </NavHome>
                    <NavLink to='/resume' activeStyle>
                        Résumé
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;