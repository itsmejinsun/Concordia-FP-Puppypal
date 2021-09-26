import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Signin from './Signin';

const MenuNav = () => {
    return (
        <Wrapper>
            <Menu />
            <Signin />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--nav-background-color);
    flex: 1.5 100px;
    height: 100%;
    border-top-left-radius: 10px;
    font-family: var(--main-font);
    font-size: 1.25rem;
    /* padding-top: 3rem; */

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &.active {
        background-color: var(--nav-selected-color);
    }
`;

export default MenuNav;
