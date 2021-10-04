import React, { useState } from 'react';

import { Wrapper, SubWrapper } from '../Styles';
import PuppyTop3 from './PuppyTop3';
import VaccineList from './VaccineList';
import VaccineAdd from './VaccineAdd/index';
import VaccineEdit from './VaccineEdit/index';

const Vaccination = () => {
    const [isVaccineAddOpen, setIsVaccineAddOpen] = useState(false);
    const [isVaccineEditOpen, setIsVaccineEditOpen] = useState(false);

    const [isVaccineAdded, setIsVaccineAdded] = useState(false);
    const [isVaccineEditted, setIsVaccineEditted] = useState(false);

    const [selectedVaccine, setSelectedVaccine] = useState();

    return (
        <Wrapper>
            <PuppyTop3 />
            <SubWrapper>
                <VaccineList
                    isVaccineAddOpen={isVaccineAddOpen}
                    setIsVaccineAddOpen={setIsVaccineAddOpen}
                    isVaccineEditOpen={isVaccineEditOpen}
                    setIsVaccineEditOpen={setIsVaccineEditOpen}
                    setSelectedVaccine={setSelectedVaccine}
                    isVaccineAdded={isVaccineAdded}
                    isVaccineEditted={isVaccineEditted}
                />
                {isVaccineAddOpen && (
                    <VaccineAdd
                        setIsVaccineAddOpen={setIsVaccineAddOpen}
                        isVaccineAdded={isVaccineAdded}
                        setIsVaccineAdded={setIsVaccineAdded}
                    />
                )}
                {isVaccineEditOpen && (
                    <VaccineEdit
                        setIsVaccineEditOpen={setIsVaccineEditOpen}
                        isVaccineEditted={isVaccineEditted}
                        setIsVaccineEditted={setIsVaccineEditted}
                        selectedVaccine={selectedVaccine}
                    />
                )}
            </SubWrapper>
        </Wrapper>
    );
};

export default Vaccination;
