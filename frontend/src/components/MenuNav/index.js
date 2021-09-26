import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const Nav = () => {
    return (
        <Wrapper>
            <Menu />
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
    padding-top: 2rem;

    &.active {
        background-color: var(--nav-selected-color);
    }
`;

export default Nav;
