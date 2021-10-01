import React, { useContext, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { DividedSection } from '../Styles';
import { PuppyContext } from '../PuppyContext';

const ProfileSection = () => {
    const {
        isPuppyChanged,
        selectedPuppyInfo,
        setIsProfilePicOpen,
        dogBreed,
        handleGetGogBreed,
        handleGetPuppy,
        handleUpdatePuppy,
        handleDeletePuppy,
    } = useContext(PuppyContext);

    const [isEditOn, setIsEditOn] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [inputData, setInputData] = useState();

    const formEl = useRef();
    const genderEl = useRef();
    const breedEl = useRef();

    const handleInputChange = (key, value) => {
        setInputData({ ...inputData, [key]: value });
    };

    const handlePictureClick = (ev) => {
        ev.preventDefault();
        setIsProfilePicOpen(true);
    };

    const handleEditClick = (ev) => {
        ev.preventDefault();
        setIsEditOn(!isEditOn);
        setInputData(selectedPuppyInfo);
    };

    const handleDeleteClick = (ev) => {
        ev.preventDefault();

        if (isEditOn) {
            handleUpdatePuppy(inputData);
            handleGetPuppy();
            setIsEditOn(false);
            setIsChanged(!isChanged);
            return;
        }
        handleDeletePuppy();
    };

    useEffect(() => {
        if (dogBreed.length <= 0) handleGetGogBreed();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditOn]);

    useEffect(() => {
        if (selectedPuppyInfo) {
            formEl.current.reset();
            genderEl.current.value = `${selectedPuppyInfo.gender}`;
            breedEl.current.value = `${selectedPuppyInfo.breed}`;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPuppyChanged]);

    return (
        <Wrapper>
            <h1>Profile</h1>
            {selectedPuppyInfo ? (
                <form ref={formEl}>
                    <InputWrapper>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            defaultValue={`${selectedPuppyInfo.name
                                .slice(0, 1)
                                .toUpperCase()}${selectedPuppyInfo.name.slice(
                                1
                            )}`}
                            onChange={(ev) =>
                                handleInputChange('name', ev.target.value)
                            }
                            required
                            disabled={isEditOn ? false : true}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="bday">Birthday</label>
                        <input
                            type="text"
                            id="bday"
                            defaultValue={selectedPuppyInfo.birthday}
                            onChange={(ev) =>
                                handleInputChange('birthday', ev.target.value)
                            }
                            required
                            disabled={isEditOn ? false : true}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="gender">Gender</label>
                        <select
                            ref={genderEl}
                            id="gender"
                            defaultValue={selectedPuppyInfo.gender}
                            onChange={(ev) =>
                                handleInputChange('gender', ev.target.value)
                            }
                            required
                            disabled={isEditOn ? false : true}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="breed">Breed</label>
                        <select
                            ref={breedEl}
                            id="breed"
                            defaultValue={selectedPuppyInfo.breed}
                            onChange={(ev) =>
                                handleInputChange('breed', ev.target.value)
                            }
                            required
                            disabled={isEditOn ? false : true}
                        >
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
                    <InputWrapper>
                        <label>Profile picture</label>
                        <button onClick={(ev) => handlePictureClick(ev)}>
                            Change
                        </button>
                    </InputWrapper>
                    <div>
                        <button
                            className={isEditOn ? '' : 'fill'}
                            onClick={(ev) => handleEditClick(ev)}
                        >
                            {isEditOn ? 'Cancel' : 'Edit'}
                        </button>
                        <button
                            className={isEditOn ? 'fill' : ''}
                            onClick={(ev) => handleDeleteClick(ev)}
                        >
                            {isEditOn ? 'Save' : 'Delete'}
                        </button>
                    </div>
                </form>
            ) : null}
        </Wrapper>
    );
};

const Wrapper = styled(DividedSection)`
    .fill {
        color: #fff;
        background-color: var(--button-color-primary);
    }
    button:hover {
        animation: shake 1s;
    }

    label + button {
        color: var(--main-font-color);
        padding: 0.1rem;
        margin-right: 2rem;
        border-color: var(--main-font-color);
        font-size: 0.8rem;
        transition: background-color 0.2s ease-in;

        &:hover {
            animation: none;
            color: #fff;
            background-color: var(--main-font-color);
        }
    }

    div:last-of-type {
        margin-top: 2.75rem;
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

const InputWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
    display: flex;
    align-items: center;

    &:first-of-type {
        margin-top: 0;
    }

    label {
        flex: 1;
    }

    input,
    select {
        max-width: 170px;
        flex: 2;
        font-family: inherit;
        font-size: 1rem;
        text-align: center;
    }

    select {
        max-width: 180px;
        padding: 0.1rem;
    }

    input:disabled,
    select:disabled {
        background: none;
        border: none;
        font-weight: bold;
    }

    select:disabled {
        color: black;
        appearance: none;
    }

    button {
        &.edit {
            color: #fff;
            background-color: var(--button-color-primary);
        }
    }
`;

export default ProfileSection;
