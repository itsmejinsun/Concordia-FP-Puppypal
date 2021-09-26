import React from 'react';
import styled from 'styled-components';

import logoDog from '../../assets/logo-dog.png';

const MainNav = () => {
    return (
        <Wrapper>
            <LogoName>
                PUPPYPAL
                <img src={logoDog} alt="logodog" />
            </LogoName>
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
    font-size: 2.5rem;
    position: relative;

    img {
        width: 2rem;
        position: absolute;
        top: 6px;
        right: -24px;
    }
`;
export default MainNav;
