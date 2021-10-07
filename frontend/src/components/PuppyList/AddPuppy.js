import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { PuppyContext } from '../PuppyContext';

const initialPuppyInfo = {
    _id: null,
    type: 'puppy',
    name: null,
    birthday: null,
    gender: null,
    breed: null,
};

const AddPuppy = ({ setIsAddPuppyOpen }) => {
    const { user } = useAuth0();
    const [puppyInfo, setPuppyInfo] = useState(initialPuppyInfo);

    const { dogBreed, handleGetGogBreed } = useContext(PuppyContext);

    // Call fuction that will fetch dog breed list
    useEffect(() => {
        handleGetGogBreed();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Function that will fetch to post new puppy user
    const handleSubmit = (ev) => {
        ev.preventDefault();

        fetch(`/api/${user.sub}/puppy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(puppyInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                data.status === 200 && setIsAddPuppyOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    };

    return (
        <Wrapper>
            <button className="close" onClick={() => setIsAddPuppyOpen(false)}>
                ⨉
            </button>
            <h2>Add Puppy</h2>
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <InputWrapper>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(ev) =>
                            setPuppyInfo({
                                ...puppyInfo,
                                name: ev.target.value,
                            })
                        }
                        required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        onChange={(ev) =>
                            setPuppyInfo({
                                ...puppyInfo,
                                birthday: ev.target.value,
                            })
                        }
                        required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        onChange={(ev) =>
                            setPuppyInfo({
                                ...puppyInfo,
                                gender: ev.target.value,
                            })
                        }
                    >
                        <option>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="breed">Breed</label>
                    <select
                        id="breed"
                        onChange={(ev) =>
                            setPuppyInfo({
                                ...puppyInfo,
                                breed: ev.target.value,
                            })
                        }
                    >
                        <option>Select</option>
                        <option value="mixed breed">mixed-breed</option>
                        <option value="other">other</option>
                        {dogBreed &&
                            dogBreed.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                    </select>
                </InputWrapper>
                <Register type="submit" value="REGISTER" />
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #fff;
    width: 480px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    h2 {
        margin-top: 1rem;
    }

    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 1.5rem;
    }
`;

const InputWrapper = styled.div`
    width: 100%;

    label {
        color: gray;
    }

    input,
    select {
        color: inherit;
        outline: none;
        background-color: var(--input-color-primary);
        border: 0;
        padding: 0.25rem 0;
        margin: 0.2rem 0 0.75rem;
        text-align: center;
        font-family: inherit;
        font-size: inherit;
        width: 100%;
    }

    option {
        background-color: #fff;
    }
`;

const Register = styled.input`
    color: #fff;
    background-color: var(--button-color-primary);
    border: none;
    border-radius: 5px;
    width: 70%;
    padding: 0.5rem 0;
    margin: 0.75rem 0;
    font-size: inherit;
    letter-spacing: 0.5px;

    &:hover,
    &:focus {
        outline: none;
        animation: shake 1s;
        transform-origin: center;
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

export default AddPuppy;
