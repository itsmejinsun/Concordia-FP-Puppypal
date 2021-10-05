import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import bg from '../../assets/bg03.jpg';

const Stage = ({ isSelected }) => {
    // const [drugApiData, setDrugApiData] = useState();
    const [inputData, setInputData] = useState(null);
    const [age, setAge] = useState(null);
    // const [errorMsg, setErrorMsg] = useState();

    const getAge = () => {
        const daysInMonth = 30.436875; // Days in a month on average.

        const dob = new Date(inputData);
        const today = new Date();

        const yearDob = dob.getFullYear();
        const yearToday = today.getFullYear();

        let years = yearToday - yearDob;
        dob.setFullYear(yearToday);

        const millisToday = today.getTime();
        var millisDob = dob.getTime();

        if (millisToday < millisDob) {
            --years;
            dob.setFullYear(yearToday - 1);
            millisDob = dob.getTime();
        }

        let days = (millisToday - millisDob) / 86400000;
        const monthsDec = days / daysInMonth;
        const months = Math.floor(monthsDec);
        days = Math.floor(daysInMonth * (monthsDec - months));

        setAge({ years: years, months: months, days: days });
    };

    // Reset input when other section is selected
    // useEffect(() => {
    //     if (!isSelected) {
    //         setInputData('');
    //         setDrugApiData('');
    //         setErrorMsg('');
    //     }
    // }, [isSelected]);

    // Fetch drug data by input from thedogapi
    const handleSubmit = async (ev) => {
        ev.preventDefault();

        await getAge();
    };

    const handleClick = (ev) => {
        // setErrorMsg('');
        // drugApiData.map((drug) =>
        //     drug._source.brand_name === ev.target.innerText ||
        //     drug._source.Health_Canada_product_name === ev.target.innerText
        //         ? drug._source.product_monograph_en_url
        //             ? window.open(drug._source.product_monograph_en_url)
        //             : setErrorMsg('🐶 no monograph 🐶')
        //         : null
        // );
    };

    return (
        <Wrapper>
            <SubWrapper className={isSelected ? 'active' : null}>
                <Header className="header">
                    <FontAwesomeIcon icon={faSeedling} className="icon" />
                    <h2>Stages of age</h2>
                </Header>

                <Input className={isSelected ? 'show' : null}>
                    <form onSubmit={(ev) => handleSubmit(ev)}>
                        <label htmlFor="birthday">Birthday</label>
                        <input
                            type="date"
                            id="birthday"
                            value={inputData}
                            onChange={(ev) => setInputData(ev.target.value)}
                        />
                        <button>Check</button>
                    </form>
                </Input>

                {/* {drugApiData && drugApiData.length > 0 ? (
                    <Content className={isSelected ? 'show' : null}>
                        <div>
                            {drugApiData.map((drug) => (
                                <p
                                    key={drug._id}
                                    onClick={(ev) => handleClick(ev)}
                                >
                                    {drug._source.brand_name
                                        ? drug._source.brand_name
                                        : drug._source
                                              .Health_Canada_product_name}
                                </p>
                            ))}
                        </div>
                        {errorMsg && (
                            <div>
                                <p>{errorMsg}</p>
                            </div>
                        )}
                    </Content>
                ) : null} */}
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

const Input = styled.div`
    display: none;

    label {
        color: #fff;
        margin-right: 0.25rem;
    }

    input {
        font-family: inherit;
        padding: 0.25rem;
        margin: 1rem 0.25rem;
        border: none;
        border-radius: 7.5px;
        text-align: center;

        @media (min-width: 688px) {
            margin: 2rem 0 1rem;
        }
    }

    button {
        font-family: inherit;
        margin-left: 0.5rem;
        padding: 0.2rem 0.5rem;
        border: none;
        border-radius: 7.5px;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            font-weight: bold;
        }
    }

    @media (min-width: 688px) {
        input {
            margin: 1rem 0.25rem;
        }
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
            margin: 0.05rem 0;
            cursor: pointer;

            &:hover {
                font-weight: bold;
            }
        }
    }

    div:nth-of-type(2) {
        background-color: grey;
        opacity: 0.5;
        margin-top: 1rem;
    }
`;
export default Stage;
