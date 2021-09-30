import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCamera } from '@fortawesome/free-solid-svg-icons';

import { PuppyContext } from '../../PuppyContext';

const ProfilePictureDetail = () => {
    const [uploadProfilePic, setUploadProfilePic] = useState();
    console.log(uploadProfilePic);
    const { setIsProfilePicOpen } = useContext(PuppyContext);

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

    return (
        <Wrapper>
            <h1>Profile picture</h1>
            <PictureWrapper>
                {!uploadProfilePic ? (
                    <Picture>
                        <div className="dogicon">
                            <FontAwesomeIcon icon={faDog} />
                        </div>
                    </Picture>
                ) : (
                    <Picture
                        style={{
                            background: `url("${uploadProfilePic}") no-repeat center/cover`,
                        }}
                    />
                )}
                <label htmlFor="fileInput">
                    <FontAwesomeIcon icon={faCamera} />
                </label>
                <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    onChange={(ev) => handleImgChange(ev)}
                />
            </PictureWrapper>
            <div>
                <button onClick={() => setIsProfilePicOpen(false)}>
                    Cancel
                </button>
                <button>Save</button>
            </div>
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

    label {
        color: grey;
        font-size: 2rem;
        position: absolute;
        right: 10px;
        bottom: 10px;
        cursor: pointer;
    }

    input {
        display: none;
    }
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

export default ProfilePictureDetail;
