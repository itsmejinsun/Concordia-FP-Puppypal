import React from 'react';
import styled from 'styled-components';

import { ModalWrapper, ModalSubWrapper } from '../../Styles';
import VaccineAddDetail from './VaccineAddDetail';

const VaccineAdd = ({ setIsVaccineAddOpen }) => {
    return (
        <ModalWrapper>
            <SubWrapper>
                <button
                    className="close"
                    onClick={() => setIsVaccineAddOpen(false)}
                >
                    ⨉
                </button>
                <VaccineAddDetail />
            </SubWrapper>
        </ModalWrapper>
    );
};

const SubWrapper = styled(ModalSubWrapper)`
    background-color: var(--main-background-color);
    height: 520px;
`;

export default VaccineAdd;
