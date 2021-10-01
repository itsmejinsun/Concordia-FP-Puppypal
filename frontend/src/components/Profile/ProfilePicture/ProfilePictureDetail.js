import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCamera } from '@fortawesome/free-solid-svg-icons';

import { PuppyContext } from '../../PuppyContext';

const ProfilePictureDetail = () => {
    const [uploadProfilePic, setUploadProfilePic] = useState();

    const {
        selectedPuppyInfo,
        setIsProfilePicOpen,
        isPuppyChanged,
        setIsPuppyChanged,
    } = useContext(PuppyContext);

    console.log('1', uploadProfilePic);
    console.log('2', selectedPuppyInfo);

    const handleImgChange = (ev) => {
        const selected = ev.target.files[0];
        const fileType = ['image/png', 'image/jpeg', 'image/jpg'];
        if (selected && fileType.includes(selected.type)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadProfilePic(reader.result);
            };
            reader.readAsDataURL(selected);
        }
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (uploadProfilePic) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem('pup')}/profilePic`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: uploadProfilePic }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setIsProfilePicOpen(false);
                    setIsPuppyChanged(!isPuppyChanged);
                });
        }
    };

    return (
        <Wrapper>
            <h1>Profile picture</h1>
            <PictureWrapper>
                {uploadProfilePic ? (
                    <Picture
                        style={{
                            background: `url("${uploadProfilePic}") no-repeat center/cover`,
                        }}
                    />
                ) : selectedPuppyInfo ? (
                    <Picture
                        style={{
                            background: `url("${selectedPuppyInfo.profilePic}") no-repeat center/cover`,
                        }}
                    />
                ) : (
                    <Picture>
                        <div className="dogicon">
                            <FontAwesomeIcon icon={faDog} />
                        </div>
                    </Picture>
                )}
            </PictureWrapper>
            <PictureForm onSubmit={(ev) => handleSubmit(ev)}>
                <label htmlFor="fileInput">
                    <FontAwesomeIcon icon={faCamera} />
                </label>
                <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    onChange={(ev) => handleImgChange(ev)}
                />
                <div>
                    <button onClick={() => setIsProfilePicOpen(false)}>
                        Cancel
                    </button>
                    <button type="submit">Save</button>
                </div>
            </PictureForm>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    button {
        color: var(--button-color-primary);
        background: none;
        width: 110px;
        padding: 0.25rem 1rem;
        margin: 0 0.5rem;
        border: solid 2px var(--button-color-primary);
        border-radius: 10px;
        font-family: inherit;
        font-size: 1rem;
        cursor: pointer;

        &:hover,
        &:focus {
            outline: none;
            animation: shake 1s;
            transform-origin: center;
        }
    }

    button:last-of-type {
        color: #fff;
        background-color: var(--button-color-primary);
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

const PictureWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Picture = styled.div`
    background-color: lightgrey;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .dogicon {
        color: #fff;
        font-size: 4rem;
    }
`;

const PictureForm = styled.form`
    position: relative;

    label {
        color: grey;
        font-size: 2rem;
        position: absolute;
        right: 62px;
        top: -90px;
        cursor: pointer;
    }

    input {
        display: none;
    }
`;

export default ProfilePictureDetail;
