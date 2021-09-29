import React from 'react';
import styled from 'styled-components';

import { DividedSection } from '../Styles';

const MoreSection = () => {
    return (
        <Wrapper>
            <h1>More</h1>
            <div>
                <p>Microchip</p>
                <p>Dog license</p>
                <p>Spaying(Neutering)</p>
                <p>Insurance</p>
                <p>Vet</p>
            </div>
            <div>
                <button>Print Profile</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(DividedSection)``;

export default MoreSection;
