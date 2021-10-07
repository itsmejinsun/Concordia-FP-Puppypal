import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MainNav = () => {
    const history = useHistory();

    // Function that will handle route on logo
    // When you click logo it will bring you to the home
    const handleClick = () => {
        history.push('/');
    };

    return (
        <Wrapper>
            <LogoName tabIndex="0" onClick={() => handleClick()}>
                PUPPYPAL
            </LogoName>
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
    cursor: pointer;
`;
export default MainNav;
