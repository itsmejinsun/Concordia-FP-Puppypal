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
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Home;
