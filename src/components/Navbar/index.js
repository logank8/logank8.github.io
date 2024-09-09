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
                        home
                    </NavHome>
                    <NavLink to='/projects' activeStyle>
                         my work
                    </NavLink>
                    <NavLink to='/education' activeStyle>
                        education
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        contact me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;