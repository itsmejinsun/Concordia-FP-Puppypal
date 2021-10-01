import React from 'react';
import styled from 'styled-components';

import { DividedSection } from '../Styles';

const MoreSection = () => {
    return (
        <Wrapper>
            <h1>More</h1>
            <Contents>
                <p tabIndex="0">Microchip</p>
                <p tabIndex="0">Dog license</p>
                <p tabIndex="0">Spay(Neuter)</p>
                <p tabIndex="0">Insurance</p>
                <p tabIndex="0">Vet</p>
            </Contents>
            <div>
                <button>Print Profile</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(DividedSection)`
    p {
        position: relative;
        transition: 0.5s;
        cursor: pointer;

        &:focus,
        &:hover {
            outline: none;
            padding-left: 0.5rem;
            font-weight: bold;
            transform: scale(1.05);
        }
    }
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
`;

export default MoreSection;