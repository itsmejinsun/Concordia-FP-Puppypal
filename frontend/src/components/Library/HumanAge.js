import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

import bg from '../../assets/bg04.jpg';
import { DOG_AGE_IN_HUMAN_YEAR } from '../../assets/data';

const HumanAge = ({ isSelected }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);

    const sizeList = Object.keys(DOG_AGE_IN_HUMAN_YEAR);
    const ageList = Object.keys(DOG_AGE_IN_HUMAN_YEAR['Small(-20lb)']);

    // Reset select when other section is selected
    useEffect(() => {
        if (!isSelected) {
            setSelectedSize('');
            setSelectedAge('');
        }
    }, [isSelected]);

    return (
        <Wrapper>
            <SubWrapper className={isSelected ? 'active' : null}>
                <Header className="header">
                    <FontAwesomeIcon icon={faBaby} className="icon" />
                    <h2>In Human Age</h2>
                </Header>

                <>
                    <Select className={isSelected ? 'show' : null}>
                        <select
                            onClick={(ev) => ev.stopPropagation()}
                            onChange={(ev) => setSelectedSize(ev.target.value)}
                            value={!isSelected ? 'select' : selectedSize}
                        >
                            <option value="select">Size</option>
                            {sizeList.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                        <select
                            onClick={(ev) => ev.stopPropagation()}
                            onChange={(ev) => setSelectedAge(ev.target.value)}
                            value={!isSelected ? 'select' : selectedAge}
                        >
                            <option value="select">Age</option>
                            {ageList.map((age) => (
                                <option key={age} value={age}>
                                    {age}
                                </option>
                            ))}
                        </select>
                    </Select>

                    {selectedAge ? (
                        <Content className={isSelected ? 'show' : null}>
                            <div>
                                <p>
                                    Puppy's age in human years is...{' '}
                                    <h1>
                                        {
                                            DOG_AGE_IN_HUMAN_YEAR[selectedSize][
                                                selectedAge
                                            ]
                                        }
                                    </h1>
                                </p>
                            </div>
                        </Content>
                    ) : null}
                </>
            </SubWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('${bg}');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
`;

const SubWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    &.active {
        align-items: center;
        backdrop-filter: blur(10px);

        .show {
            display: initial;
        }
    }

    .header {
        display: flex;
        align-items: center;

        .icon {
            color: #fff;
            font-size: 2rem;
            margin-left: 1rem;
        }

        h2 {
            color: #fff;
            margin-left: 1rem;
            display: initial;
        }
    }

    @media (min-width: 688px) {
        justify-content: flex-start;
        align-items: center;

        &.active {
            justify-content: center;
        }

        &:hover,
        &:focus,
        &.active {
            .header {
                h2 {
                    display: initial;
                }
            }
        }

        .header {
            margin-top: 2rem;

            .icon {
                margin-left: 0;
            }

            h2 {
                display: none;
            }
        }
    }
`;

const Header = styled.div`
    @media (min-width: 688px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const Select = styled.div`
    display: none;

    select {
        font-family: inherit;
        padding: 0.25rem;
        margin: 2rem 0 1rem;
        border: none;
        border-radius: 7.5px;
        text-align: center;
    }

    select:nth-of-type(2) {
        margin-left: 1rem;
    }
`;

const Content = styled.div`
    display: none;

    div {
        background-color: #000;
        opacity: 0.5;
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        text-align: center;
        max-width: 360px;

        p {
            color: #fff;
            opacity: 1;
            margin: 0.25rem 0;
            line-height: 1.2rem;
        }

        h1 {
            color: #fff;
            margin-top: 1rem;
        }
    }
`;
export default HumanAge;
