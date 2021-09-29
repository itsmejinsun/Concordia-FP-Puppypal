import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { PuppyContext } from '../../PuppyContext';

const Signedin = ({ isSigninOpen }) => {
    const { user } = useAuth0();
    const { setIsPuppyListOpen } = useContext(PuppyContext);

    return (
        <Wrapper className={`${isSigninOpen}`}>
            <GreetTxt>Hi, {user.given_name}</GreetTxt>
            <PuppyList
                onClick={() => {
                    setIsPuppyListOpen(true);
                }}
            >
                Puppy List
            </PuppyList>
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
const PuppyList = styled.button``;

export default Signedin;
