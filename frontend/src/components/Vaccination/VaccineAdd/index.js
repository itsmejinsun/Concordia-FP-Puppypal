import React from 'react';
import styled from 'styled-components';

import { ModalWrapper, ModalSubWrapper } from '../../Styles';
import VaccineAddDetail from './VaccineAddDetail';

const VaccineAdd = ({
    setIsVaccineAddOpen,
    isVaccineAdded,
    setIsVaccineAdded,
}) => {
    return (
        <ModalWrapper>
            <SubWrapper>
                <button
                    className="close"
                    onClick={() => setIsVaccineAddOpen(false)}
                >
                    ⨉
                </button>
                <VaccineAddDetail
                    setIsVaccineAddOpen={setIsVaccineAddOpen}
                    isVaccineAdded={isVaccineAdded}
                    setIsVaccineAdded={setIsVaccineAdded}
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
