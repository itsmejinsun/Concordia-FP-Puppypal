import React from 'react';
import styled from 'styled-components';

import { ModalWrapper, ModalSubWrapper } from '../../Styles';
import VaccineEditDetail from './VaccineEditDetail';

const VaccineAdd = ({
    setIsVaccineEditOpen,
    isVaccineEditted,
    setIsVaccineEditted,
    selectedVaccine,
}) => {
    return (
        <ModalWrapper>
            <SubWrapper>
                <button
                    className="close"
                    onClick={() => setIsVaccineEditOpen(false)}
                >
                    ⨉
                </button>
                <VaccineEditDetail
                    selectedVaccine={selectedVaccine}
                    isVaccineEditted={isVaccineEditted}
                    setIsVaccineEditted={setIsVaccineEditted}
                />
            </SubWrapper>
        </ModalWrapper>
    );
};

const SubWrapper = styled(ModalSubWrapper)`
    background-color: var(--main-background-color);
    height: 520px;
`;

export default VaccineAdd;
