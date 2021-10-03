import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { DividedSection } from '../../Styles';
import { PuppyContext } from '../../PuppyContext';
import Microchip from './Microchip';
import License from './License';
import Spay from './Spay';
import Insurance from './Insurance';
import VetClinic from './VetClinic';
import PrintProfile from './PrintProfile/index';

const initialState = {
    microchip: false,
    license: false,
    spay: false,
    insurance: false,
    vet: false,
};

const MoreSection = () => {
    const [isMoreSectionOpen, setIsMoreSectionOpen] = useState(initialState);
    const [isPrintOpen, setIsPrintOpen] = useState(false);

    const { selectedPuppyInfo } = useContext(PuppyContext);

    const handleSelect = (menu) => {
        setIsMoreSectionOpen({ ...isMoreSectionOpen, [menu]: true });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Wrapper>
                <h1>More</h1>
                <Contents>
                    <p tabIndex="0" onClick={() => handleSelect('microchip')}>
                        Microchip
                        <span>
                            {selectedPuppyInfo &&
                                selectedPuppyInfo.microchip &&
                                selectedPuppyInfo.microchip.number}
                        </span>
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('license')}>
                        Pet license
                        <span>
                            {selectedPuppyInfo &&
                                selectedPuppyInfo.license &&
                                selectedPuppyInfo.license.number}
                        </span>
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('spay')}>
                        Spay(Neuter)
                        <span>
                            {selectedPuppyInfo &&
                                selectedPuppyInfo.spay &&
                                selectedPuppyInfo.spay.date}
                        </span>
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('insurance')}>
                        Insurance
                        <span>
                            {selectedPuppyInfo &&
                                selectedPuppyInfo.insurance &&
                                selectedPuppyInfo.insurance.number}
                        </span>
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('vet')}>
                        Vet clinic
                        <span>
                            {selectedPuppyInfo &&
                                selectedPuppyInfo.vet &&
                                selectedPuppyInfo.vet.phone}
                        </span>
                    </p>
                </Contents>
                <div>
                    <button onClick={() => setIsPrintOpen(true)}>
                        Print Profile
                    </button>
                </div>
            </Wrapper>
            {isMoreSectionOpen.microchip && (
                <Microchip setIsMoreSectionOpen={setIsMoreSectionOpen} />
            )}
            {isMoreSectionOpen.license && (
                <License setIsMoreSectionOpen={setIsMoreSectionOpen} />
            )}
            {isMoreSectionOpen.spay && (
                <Spay setIsMoreSectionOpen={setIsMoreSectionOpen} />
            )}
            {isMoreSectionOpen.insurance && (
                <Insurance setIsMoreSectionOpen={setIsMoreSectionOpen} />
            )}
            {isMoreSectionOpen.vet && (
                <VetClinic setIsMoreSectionOpen={setIsMoreSectionOpen} />
            )}
            {isPrintOpen && <PrintProfile setIsPrintOpen={setIsPrintOpen} />}
        </>
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

    div {
        display: flex;
        justify-content: center;
    }
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;

    p > span {
        color: grey;
        font-size: 0.95rem;
        margin-left: 2rem;
    }
`;

export default MoreSection;
