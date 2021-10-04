import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import VaccineTable from './VaccineTable/index';

const VaccineList = ({
    isVaccineAddOpen,
    setIsVaccineAddOpen,
    isVaccineEditOpen,
    setIsVaccineEditOpen,
    setSelectedVaccine,
    isVaccineAdded,
    isVaccineEditted,
}) => {
    const [vaccineData, setVaccineData] = useState([]);

    // Function that will open add vaccine modal
    const handleClick = () => {
        setIsVaccineAddOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Fetch selected puppy's all vaccine list
    useEffect(() => {
        fetch(
            `/api/${localStorage.getItem('id')}/puppy/${localStorage.getItem(
                'pup'
            )}/vaccine`,
            { method: 'GET' }
        )
            .then((res) => res.json())
            // .then((data) => console.log(data.data));
            .then((data) => setVaccineData(data.data));
    }, [isVaccineAdded, isVaccineEditted]);

    return (
        <div>
            <Header>
                <h1>Vaccination</h1>
                <button onClick={handleClick}>Add</button>
            </Header>
            {vaccineData.length > 0 && (
                <VaccineTable
                    vaccineData={vaccineData}
                    isVaccineEditOpen={isVaccineEditOpen}
                    setIsVaccineEditOpen={setIsVaccineEditOpen}
                    setSelectedVaccine={setSelectedVaccine}
                />
            )}
        </div>
    );
};

const Header = styled.div`
    padding: 0 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    button {
        color: var(--button-color-primary);
        background: none;
        border: solid 2px var(--button-color-primary);
        border-radius: 10px;
        min-width: 110px;
        padding: 0.2rem 1rem;
        margin: 0 0.5rem;
        font-family: inherit;
        font-size: 1rem;
        cursor: pointer;

        &:hover,
        &:focus {
            outline: none;
            animation: shake 1s;
            transform-origin: center;
        }
    }

    @keyframes shake {
        10%,
        90% {
            transform: rotate(-2deg);
        }
        20%,
        80% {
            transform: rotate(2deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(-2deg);
        }
        40%,
        60% {
            transform: rotate(2deg);
        }
    }
`;

export default VaccineList;
