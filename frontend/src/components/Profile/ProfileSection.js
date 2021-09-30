import React, { useContext } from 'react';
import styled from 'styled-components';

import { DividedSection } from '../Styles';
import { PuppyContext } from '../PuppyContext';

const ProfileSection = () => {
    const { selectedPuppyInfo, setIsProfilePicOpen } = useContext(PuppyContext);

    const handleClick = () => {
        setIsProfilePicOpen(true);
    };

    return (
        <Wrapper>
            <h1>Profile</h1>
            <div>
                <Contents>
                    <div>
                        <p>Name</p>
                        <p>Birthday</p>
                        <p>Gender</p>
                        <p>Breed</p>
                    </div>
                    {selectedPuppyInfo ? (
                        <div className="bold">
                            <p>
                                {selectedPuppyInfo.name
                                    .slice(0, 1)
                                    .toUpperCase()}
                                {selectedPuppyInfo.name.slice(1)}
                            </p>
                            <p>{selectedPuppyInfo.birthday}</p>
                            <p>{selectedPuppyInfo.gender}</p>
                            <p>{selectedPuppyInfo.breed}</p>
                        </div>
                    ) : null}
                </Contents>
                <p>
                    Profile picture{' '}
                    <button onClick={handleClick}>Change</button>
                </p>
            </div>
            <div>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(DividedSection)`
    .edit {
        color: #fff;
        background-color: var(--button-color-primary);
    }

    p > button {
        color: var(--main-font-color);
        padding: 0.2rem;
        border-color: var(--main-font-color);
        font-size: 0.9rem;
        transition: background-color 0.2s ease-in;

        &:hover {
            animation: none;
            color: #fff;
            background-color: var(--main-font-color);
        }
    }
`;

const Contents = styled.div`
    display: flex;
    align-items: flex-start;

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .bold {
        font-weight: bold;
    }
`;

export default ProfileSection;
