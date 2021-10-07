import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { PuppyContext } from '../../PuppyContext';

const Signedin = ({ isSigninOpen }) => {
    const { user } = useAuth0();
    const { setIsPuppyListOpen } = useContext(PuppyContext);

    const handleClick = () => {
        setIsPuppyListOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Wrapper className={`${isSigninOpen}`}>
            <GreetTxt>Hi, {user.given_name}</GreetTxt>
            <PuppyList onClick={handleClick}>Puppy List</PuppyList>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-bottom: solid 2px var(--main-background-color);

    &.true {
        display: flex;
    }

    @media (min-width: 688px) {
        display: flex;
        margin-top: 6rem;
        border-bottom: 0;
    }
`;

const GreetTxt = styled.p`
    color: var(--button-color-secondary);
    font-size: 1.2rem;
`;
const PuppyList = styled.button`
    color: #fff;
    background-color: var(--button-color-secondary);
    border: none;
    border-radius: 10px;
    padding: 0.4rem 1.2rem;
    margin-top: 0.5rem;
    font-family: inherit;
    letter-spacing: 0.5px;

    &:hover,
    &:focus {
        outline: none;
        animation: shake 1s;
        transform-origin: center;
    }
`;

export default Signedin;
