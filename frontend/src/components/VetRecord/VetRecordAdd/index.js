import React, { useState } from 'react';
import styled from 'styled-components';

import { ModalWrapper, ModalSubWrapper } from '../../Styles';
import VetRecordAddDetail from './VetRecordAddDetail';
import AddMedication from './AddMedication';

const initialState = {
    date: null,
    vet: null,
    reason: null,
    memo: null,
    prescription: null,
    medication: [],
    weight: null,
    file: null,
    nextVisitDate: null,
    nextVisitTime: null,
};

const initialMedState = {
    name: null,
    dose: null,
    startDate: null,
    endDate: null,
    time: null,
    memo: null,
};

const VetRecordAdd = ({
    setIsVetRecordAddOpen,
    isVetRecordAdded,
    setIsVetRecordAdded,
}) => {
    const [inputData, setInputData] = useState(initialState);
    const [inputMedData, setInputMedData] = useState(initialMedState);

    const [isMedOpen, setIsMedOpen] = useState(false);

    const handleSaveMed = (ev) => {
        ev.preventDefault();

        setInputData((inputData) => {
            return {
                ...inputData,
                prescription: true,
                medication: [...inputData.medication, inputMedData],
            };
        });
        setIsMedOpen(false);
    };

    const handleDeleteMed = (ev) => {
        ev.preventDefault();

        const value = ev.target.innerText;

        const without = inputData.medication.filter(
            (med) => !value.includes(med.name)
        );

        if (without.length <= 0) {
            setInputData((inputData) => {
                return {
                    ...inputData,
                    prescription: false,
                    medication: [],
                };
            });

            return;
        }

        setInputData((inputData) => {
            return {
                ...inputData,
                medication: without,
            };
        });
    };

    return (
        <Wrapper>
            <SubWrapper>
                <button
                    className="close"
                    onClick={() => setIsVetRecordAddOpen(false)}
                >
                    ⨉
                </button>

                <VetRecordAddDetail
                    inputData={inputData}
                    setInputData={setInputData}
                    setIsVetRecordAddOpen={setIsVetRecordAddOpen}
                    isVetRecordAdded={isVetRecordAdded}
                    setIsVetRecordAdded={setIsVetRecordAdded}
                    setIsMedOpen={setIsMedOpen}
                    handleDeleteMed={handleDeleteMed}
                />
            </SubWrapper>

            {isMedOpen ? (
                <SubWrapper className="med">
                    <button
                        className="close"
                        onClick={() => setIsMedOpen(false)}
                    >
                        ⨉
                    </button>

                    <AddMedication
                        inputMedData={inputMedData}
                        setInputMedData={setInputMedData}
                        setIsMedOpen={setIsMedOpen}
                        handleSaveMed={handleSaveMed}
                    />
                </SubWrapper>
            ) : null}
        </Wrapper>
    );
};

const Wrapper = styled(ModalWrapper)`
    .med {
        margin-top: 0;
    }
`;

const SubWrapper = styled(ModalSubWrapper)`
    background-color: var(--main-background-color);
    height: 520px;
    border: solid 1px lightgray;
`;

export default VetRecordAdd;
