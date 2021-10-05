import React, { useState } from 'react';
import styled from 'styled-components';

import { ModalWrapper, ModalSubWrapper } from '../../Styles';
import VetRecordEditDetail from './VetRecordEditDetail';
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
    setIsVetRecordEditOpen,
    isVetRecordEditted,
    setIsVetRecordEditted,
    selectedVetRecord,
}) => {
    const [inputData, setInputData] = useState(initialState);
    const [inputMedData, setInputMedData] = useState(initialMedState);

    const [isMedOpen, setIsMedOpen] = useState(false);
    const [isEditOn, setIsEditOn] = useState(false);

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

        if (!isEditOn) {
            return;
        }

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
        <ModalWrapper>
            <SubWrapper>
                <button
                    className="close"
                    onClick={() => setIsVetRecordEditOpen(false)}
                >
                    ⨉
                </button>

                <VetRecordEditDetail
                    inputData={inputData}
                    setInputData={setInputData}
                    selectedVetRecord={selectedVetRecord}
                    isVetRecordEditted={isVetRecordEditted}
                    setIsVetRecordEditted={setIsVetRecordEditted}
                    setIsMedOpen={setIsMedOpen}
                    handleDeleteMed={handleDeleteMed}
                    isEditOn={isEditOn}
                    setIsEditOn={setIsEditOn}
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
        </ModalWrapper>
    );
};

const SubWrapper = styled(ModalSubWrapper)`
    background-color: var(--main-background-color);
    height: 520px;
`;

export default VetRecordAdd;
