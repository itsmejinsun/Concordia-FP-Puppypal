import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    faUser,
    faUserSlash,
} from '@fortawesome/free-solid-svg-icons';

import Menu from './Menu';
import Signin from './Signin';

const MenuNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSigninOpen, setIsSigninOpen] = useState(false);

    return (
        <Wrapper>
            <MenuBar>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </button>
                <button onClick={() => setIsSigninOpen(!isSigninOpen)}>
                    {isSigninOpen ? (
                        <FontAwesomeIcon icon={faUserSlash} />
                    ) : (
                        <FontAwesomeIcon icon={faUser} />
                    )}
                </button>
            </MenuBar>
            <Menu isMenuOpen={isMenuOpen} />
            <Signin isSigninOpen={isSigninOpen} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    @media (min-width: 688px) {
        flex: 0 290px;
        font-size: 1.15rem;
    }
`;

const MenuBar = styled.div`
    background-color: var(--nav-background-color);
    display: flex;
    justify-content: space-between;

    @media (min-width: 688px) {
        display: none;
    }

    button {
        color: inherit;
        background: none;
        border: none;
        font-size: 1.5rem;
        padding: 1.25rem 2.5rem;
        cursor: pointer;
    }
`;

export default MenuNav;
