import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const SelectPuppy = ({
    setIsPuppyListOpen,
    setSelectedPuppy,
    isAddPuppyOpen,
    setIsAddPuppyOpen,
}) => {
    const { user, logout } = useAuth0();
    const [puppyList, setPuppyList] = useState();

    useEffect(() => {
        fetch(`/api/puppy/${user.sub}`)
            .then((res) => res.json())
            .then((data) => setPuppyList(data.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAddPuppyOpen]);

    const handleClick = (puppy) => {
        setSelectedPuppy(puppy);
        setIsPuppyListOpen(false);
    };

    return (
        <Wrapper>
            <button className="close" onClick={() => setIsPuppyListOpen(false)}>
                ⨉
            </button>
            <SelectWrapper>
                <h3>Please select or add your Puppy</h3>
                {puppyList && (
                    <div>
                        {puppyList.map((puppy) => (
                            <SelectBtn
                                key={puppy._id}
                                onClick={() => handleClick(puppy)}
                            >
                                {puppy.name.slice(0, 1).toUpperCase()}
                                {puppy.name.slice(1)}
                            </SelectBtn>
                        ))}
                        <AddBtn onClick={() => setIsAddPuppyOpen(true)}>
                            +
                        </AddBtn>
                    </div>
                )}
            </SelectWrapper>
            <SingoutWrapper>
                <p>Do you want to sign out?</p>
                <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    Sign out
                </button>
            </SingoutWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #fff;
    width: 480px;
    height: 480px;
    margin-top: 2rem;
    border-bottom: solid 2px var(--main-background-color);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    .close {
        color: grey;
        background: none;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }

    @media (min-width: 992px) {
        margin-top: 0;
        border-right: solid 2px var(--main-background-color);
    }
`;

const SelectWrapper = styled.div`
    text-align: center;

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem;
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 15px;
    width: 85px;
    height: 100px;
    margin: 1rem;
    font-family: inherit;
    transition: transform 0.2s ease-in;

    &:hover {
        animation: spin 1s;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const SelectBtn = styled(Button)`
    color: #fff;
    background-color: var(--button-color-secondary);
    font-size: 1.1rem;
`;

const AddBtn = styled(Button)`
    color: darkgray;
    font-size: 3rem;
`;

const SingoutWrapper = styled.div`
    text-align: center;

    button {
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

export default SelectPuppy;
