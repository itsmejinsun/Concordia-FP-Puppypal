import React, { useState } from 'react';
import styled from 'styled-components';

import SelectPuppy from './SelectPuppy';
import AddPuppy from './AddPuppy';

const PuppyList = ({ setIsPuppyListOpen, setSelectedPuppy }) => {
    const [isAddPuppyOpen, setIsAddPuppyOpen] = useState(false);

    return (
        <Wrapper>
            <SelectPuppy
                setIsPuppyListOpen={setIsPuppyListOpen}
                setSelectedPuppy={setSelectedPuppy}
                isAddPuppyOpen={isAddPuppyOpen}
                setIsAddPuppyOpen={setIsAddPuppyOpen}
            />
            {isAddPuppyOpen ? (
                <AddPuppy setIsAddPuppyOpen={setIsAddPuppyOpen} />
            ) : null}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: contrast(1) blur(10px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export default PuppyList;
