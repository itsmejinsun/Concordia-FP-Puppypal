import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

import { PuppyContext } from '../../PuppyContext';

const SelectedPuppy = ({ isSigninOpen }) => {
    const {
        selectedPuppyInfo,
        setIsPuppyListOpen,
        isPuppyChanged,
        handleGetPuppy,
    } = useContext(PuppyContext);

    useEffect(() => {
        handleGetPuppy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPuppyChanged]);

    const handleClick = (ev) => {
        ev.preventDefault();
        setIsPuppyListOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Wrapper className={`${isSigninOpen}`}>
            {selectedPuppyInfo && (
                <StyledLink activeClassName="active" to="/profile">
                    <Background>
                        <InfoWrapper>
                            {selectedPuppyInfo.profilePic ? (
                                <img
                                    src={selectedPuppyInfo.profilePic}
                                    alt={selectedPuppyInfo._id}
                                />
                            ) : (
                                <Icon>
                                    <div className="dogicon">
                                        <FontAwesomeIcon icon={faDog} />
                                    </div>
                                </Icon>
                            )}

                            <p>
                                {selectedPuppyInfo.name
                                    .slice(0, 1)
                                    .toUpperCase()}
                                {selectedPuppyInfo.name.slice(1)}
                            </p>
                            <button onClick={(ev) => handleClick(ev)}>
                                Sign out
                            </button>
                        </InfoWrapper>
                    </Background>
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

const Background = styled.div`
    background-color: var(--button-color-secondary);
    width: 120px;
    height: 130px;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
`;

const InfoWrapper = styled.div`
    position: absolute;
    top: -20px;
    left: 20px;

    img {
        width: 80px;
        border-radius: 50%;
        border: solid 3px #fff;
        margin-bottom: 0.25rem;
    }

    p {
        color: #fff;
        font-size: 1rem;
    }

    button {
        background: none;
        border: solid 1px var(--main-font-color);
        border-radius: 5px;
        padding: 0.1rem 0.5rem;
        margin-top: 0.75rem;
        font-family: inherit;
        cursor: pointer;

        &:hover,
        &:focus {
            outline: none;
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

const Icon = styled.div`
    background-color: darkgrey;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid 5px lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;

    .dogicon {
        color: lightgrey;
        font-size: 3rem;
    }
`;

export default SelectedPuppy;
