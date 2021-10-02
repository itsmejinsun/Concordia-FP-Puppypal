import React, { useState } from 'react';
import styled from 'styled-components';

import { DividedSection } from '../../Styles';
import Microchip from './Microchip';
import License from './License';
import Spay from './Spay';
import Insurance from './Insurance';
import VetClinic from './VetClinic';

const initialState = {
    microchip: false,
    license: false,
    spay: false,
    insurance: false,
    vet: false,
};

const MoreSection = () => {
    const [isMoreSectionOpen, setIsMoreSectionOpen] = useState(initialState);

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
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('license')}>
                        Pet license
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('spay')}>
                        Spay(Neuter)
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('insurance')}>
                        Insurance
                    </p>
                    <p tabIndex="0" onClick={() => handleSelect('vet')}>
                        Veterinary clinic
                    </p>
                </Contents>
                <div>
                    <button>Print Profile</button>
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
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
`;

export default MoreSection;
