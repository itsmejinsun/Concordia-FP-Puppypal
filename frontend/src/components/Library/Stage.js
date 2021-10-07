import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import bg from '../../assets/bg03.jpg';
import { PUPPY_GROWTH_STAGE } from '../../assets/data';

const Stage = ({ isSelected }) => {
    const [selectedAge, setSelectedAge] = useState(null);

    // Reset select when other section is selected
    useEffect(() => {
        if (!isSelected) {
            setSelectedAge('');
        }
    }, [isSelected]);

    return (
        <Wrapper>
            <SubWrapper className={isSelected ? 'active' : null}>
                <Header className="header">
                    <FontAwesomeIcon icon={faSeedling} className="icon" />
                    <h2>Puppy Growth</h2>
                </Header>

                <>
                    <Select className={isSelected ? 'show' : null}>
                        <select
                            onClick={(ev) => ev.stopPropagation()}
                            onChange={(ev) => setSelectedAge(ev.target.value)}
                            value={!isSelected ? 'select' : selectedAge}
                        >
                            <option value="select">Age</option>
                            {PUPPY_GROWTH_STAGE.map((age) => (
                                <option key={age.age} value={age.age}>
                                    {age.age}
                                </option>
                            ))}
                        </select>
                    </Select>

                    {selectedAge ? (
                        <Content className={isSelected ? 'show' : null}>
                            {PUPPY_GROWTH_STAGE.map((age) =>
                                age.age === selectedAge ? (
                                    <div>
                                        <p key={age.content}>{age.content}</p>
                                    </div>
                                ) : null
                            )}
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
    }
`;
export default Stage;
