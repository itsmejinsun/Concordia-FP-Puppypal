import React from 'react';
import styled from 'styled-components';

import { DividedSection } from '../Styles';

const ProfileSection = () => {
    return (
        <Wrapper>
            <h1>Profile</h1>
            <div>
                <p>Name</p>
                <p>Birthday</p>
                <p>Gender</p>
                <p>Breed</p>
                <p>Profile picture</p>
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
`;

export default ProfileSection;
