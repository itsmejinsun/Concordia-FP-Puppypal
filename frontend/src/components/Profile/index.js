import React from 'react';
import styled from 'styled-components';

import { Wrapper, SubWrapper } from '../Styles';
import MoreSection from './MoreSection/index';
import ProfileSection from './ProfileSection/index';

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
