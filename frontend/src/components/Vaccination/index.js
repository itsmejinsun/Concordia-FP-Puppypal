import React, { useState } from 'react';

import { Wrapper, SubWrapper } from '../Styles';
import PuppyTop3 from './PuppyTop3';
import VaccineList from './VaccineList';
import VaccineAdd from './VaccineAdd/index';

const Vaccination = () => {
    const [isVaccineAddOpen, setIsVaccineAddOpen] = useState(false);

    return (
        <Wrapper>
            <PuppyTop3 />
            <SubWrapper>
                <VaccineList setIsVaccineAddOpen={setIsVaccineAddOpen} />
                {isVaccineAddOpen && (
                    <VaccineAdd setIsVaccineAddOpen={setIsVaccineAddOpen} />
                )}
            </SubWrapper>
        </Wrapper>
    );
};

export default Vaccination;
