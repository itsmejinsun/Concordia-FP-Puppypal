import React from 'react';
import styled from 'styled-components';

const MainNav = () => {
    return (
        <Wrapper>
            <LogoName>PUPPYPAL</LogoName>
            <div></div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 3rem;
`;
const LogoName = styled.h1`
    color: var(--main-font-color);
    font-family: var(--logo-font);
    font-size: 2.2rem;
`;
export default MainNav;
