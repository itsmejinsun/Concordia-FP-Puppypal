import React from 'react';
import styled from 'styled-components';

import MoreSection from './MoreSection';
import ProfileSection from './ProfileSection';
import { Wrapper, SubWrapper } from '../Styles';

const Profile = () => {
    return (
        <Wrapper>
            <SectionWrapper>
                <ProfileSection />
                <MoreSection />
            </SectionWrapper>
        </Wrapper>
    );
};

const SectionWrapper = styled(SubWrapper)`
    width: 100%;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export default Profile;
