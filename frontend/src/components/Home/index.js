import React from 'react';
import styled from 'styled-components';

import Introduction from './Introduction';

const Home = () => {
    return (
        <Wrapper>
            <Introduction />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
`;

export default Home;
