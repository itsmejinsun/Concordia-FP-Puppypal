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
    max-height: 150px;
    height: 15%;
    width: 95%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
`;
const LogoName = styled.h1`
    color: #58355e;
    font-family: var(--logo-font);
`;
export default MainNav;
