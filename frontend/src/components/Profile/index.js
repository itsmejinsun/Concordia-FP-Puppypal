import React from 'react';
import styled from 'styled-components';

import { Wrapper, SubWrapper } from '../Styles';
import PuppyTop6 from './PuppyTop6';
import MoreSection from './MoreSection/index';
import ProfileSection from './ProfileSection/index';

const Profile = () => {
    return (
        <Wrapper>
            <PuppyTop6 />
            <SectionWrapper>
                <ProfileSection />
                <MoreSection />
            </SectionWrapper>
        </Wrapper>
    );
};

const SectionWrapper = styled(SubWrapper)`
    width: 100%;
    position: relative;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export default Profile;
