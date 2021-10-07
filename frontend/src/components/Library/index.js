import React, { useState } from 'react';
import styled from 'styled-components';

import { Wrapper, SubWrapper } from '../Styles';
import PuppyTop5 from './PuppyTop5';
import DogBreed from './DogBreed';
import Drug from './Drug';
import Stage from './Stage';
import HumanAge from './HumanAge';

// Initial data to know which section is selected
// To show the inputs and set styles
const initialState = {
    breed: false,
    drug: false,
    stage: false,
    humanAge: false,
};

const Library = () => {
    const [isSelected, setIsSelected] = useState(initialState);

    // Function that will change data of the state
    const onClick = (ev, key) => {
        setIsSelected({ [key]: true });
    };

    return (
        <Wrapper>
            <PuppyTop5 />

            <SubWrapper>
                <CardWrapper>
                    <Card
                        tabIndex="0"
                        className={isSelected.breed ? 'active' : null}
                        onClick={(ev) => onClick(ev, 'breed')}
                    >
                        <DogBreed isSelected={isSelected.breed} />
                    </Card>

                    <Card
                        tabIndex="0"
                        className={isSelected.drug ? 'active' : null}
                        onClick={(ev) => onClick(ev, 'drug')}
                    >
                        <Drug isSelected={isSelected.drug} />
                    </Card>

                    <Card
                        tabIndex="0"
                        className={isSelected.stage ? 'active' : null}
                        onClick={(ev) => onClick(ev, 'stage')}
                    >
                        <Stage isSelected={isSelected.stage} />
                    </Card>

                    <Card
                        tabIndex="0"
                        className={isSelected.humanAge ? 'active' : null}
                        onClick={(ev) => onClick(ev, 'humanAge')}
                    >
                        <HumanAge isSelected={isSelected.humanAge} />
                    </Card>
                </CardWrapper>
            </SubWrapper>
        </Wrapper>
    );
};

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 688px) {
        flex-direction: row;
    }
`;

const Card = styled.div`
    background-color: #fff;
    flex: 1;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 1rem;
    transition: flex 0.2s ease-in;

    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover,
    &.active {
        flex: 7;
    }

    @media (min-width: 688px) {
        height: 100%;
        margin: 0 0.5rem;
    }
`;
export default Library;
