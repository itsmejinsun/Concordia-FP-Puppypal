import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import bg from '../../assets/bg01.jpg';

const DogBreed = ({ isSelected }) => {
    const [dogApiData, setDogApiData] = useState(null);
    const [selectedBreed, setSelectedBreed] = useState(null);

    // Reset select when other section is selected
    useEffect(() => {
        if (!isSelected) {
            setSelectedBreed('');
        }
    }, [isSelected]);

    // Fetch all dog breed data from thedogapi
    useEffect(() => {
        const apiKey = process.env.REACT_APP_DOGAPI_KEY;

        fetch('https://api.thedogapi.com/v1/breeds', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        })
            .then((res) => res.json())
            .then((data) => setDogApiData(data));
    }, []);

    return (
        <Wrapper>
            <SubWrapper className={isSelected ? 'active' : null}>
                <Header className="header">
                    <FontAwesomeIcon icon={faPaw} className="icon" />
                    <h2>Dog Breed</h2>
                </Header>

                {dogApiData ? (
                    <>
                        <Select className={isSelected ? 'show' : null}>
                            <select
                                onClick={(ev) => ev.stopPropagation()}
                                onChange={(ev) =>
                                    setSelectedBreed(ev.target.value)
                                }
                                value={!isSelected ? 'select' : selectedBreed}
                            >
                                <option
                                    value="select"
                                    // selected={isOutFocus ? true : false}
                                >
                                    Dog Breed
                                </option>

                                {dogApiData.map((breed) => (
                                    <option key={breed.id} value={breed.name}>
                                        {breed.name}
                                    </option>
                                ))}
                            </select>
                        </Select>

                        {selectedBreed ? (
                            <Content className={isSelected ? 'show' : null}>
                                {dogApiData.map((breed) =>
                                    breed.name === selectedBreed ? (
                                        <div key={breed.name}>
                                            <p>{breed.origin}</p>
                                            <p>{breed.temperament}</p>
                                            <p>{breed.weight.metric} kg</p>
                                            <p>{breed.life_span}</p>
                                        </div>
                                    ) : null
                                )}
                            </Content>
                        ) : null}
                    </>
                ) : null}
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
        }
    }
`;
export default DogBreed;
