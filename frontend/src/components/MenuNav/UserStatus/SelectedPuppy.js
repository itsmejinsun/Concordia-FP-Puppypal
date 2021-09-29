import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { PuppyContext } from '../../PuppyContext';

const SelectedPuppy = ({ localPuppy, isSigninOpen }) => {
    const { user } = useAuth0();
    const { selectedPuppyInfo, setSelectedPuppyInfo, setIsPuppyListOpen } =
        useContext(PuppyContext);

    useEffect(() => {
        fetch(`/api/${user.sub}/puppy/${localPuppy}`)
            .then((res) => res.json())
            .then((data) => setSelectedPuppyInfo(data.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = (ev) => {
        ev.preventDefault();
        setIsPuppyListOpen(true);
    };
    return (
        <Wrapper className={`${isSigninOpen}`}>
            {selectedPuppyInfo && (
                <StyledLink activeClassName="active" to="/profile">
                    <InfoWrapper>
                        <p>
                            {selectedPuppyInfo.name.slice(0, 1).toUpperCase()}
                            {selectedPuppyInfo.name.slice(1)}
                        </p>
                        <button onClick={(ev) => handleClick(ev)}>
                            Sign out
                        </button>
                    </InfoWrapper>
                </StyledLink>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
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

const InfoWrapper = styled.div`
    background-color: var(--button-color-secondary);
    width: 100px;
    height: 100px;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: #fff;
    }

    button {
        cursor: pointer;

        &:hover {
            animation: shake 1s;
            transform-origin: center;
        }
    }

    @keyframes shake {
        10%,
        90% {
            transform: rotate(-2deg);
        }
        20%,
        80% {
            transform: rotate(2deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(-2deg);
        }
        40%,
        60% {
            transform: rotate(2deg);
        }
    }
`;

const StyledLink = styled(NavLink)`
    padding: 1.1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transition: all 0.4s ease-in;

    &.active {
        padding: 1.1rem 3rem;
        background-color: var(--nav-selected-color);

        &:hover {
            transform: none;
            box-shadow: none;
        }
    }

    &:hover {
        background-color: var(--nav-selected-color);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transform: scale(1.075);
        padding: 1.1rem 3rem;
    }
`;

export default SelectedPuppy;
