import React, { useState, useContext } from 'react';

import {
    ModalWrapper,
    ModalSubWrapper,
    InputWrapper,
    FileInputWrapper,
    TextareaWrapper,
    ButtonWrapper,
} from '../../Styles';

import { PuppyContext } from '../../PuppyContext';

const initialState = {
    number: null,
    name: null,
    startDate: null,
    endDate: null,
    company: null,
    file: null,
    memo: null,
};

const Insurance = ({ isMoreSectionOpen, setIsMoreSectionOpen }) => {
    const [insuranceData, setInsuranceData] = useState(initialState);
    const [isEditOn, setIsEditOn] = useState(false);

    const { selectedPuppyInfo, handleGetPuppy } = useContext(PuppyContext);

    // Function that will close modal
    const handleModalClose = () => {
        setIsMoreSectionOpen({ ...isMoreSectionOpen, insurance: false });
    };

    // Function that will save input data
    const handleChange = (ev, item) => {
        setInsuranceData({ ...insuranceData, [item]: ev.target.value });
    };

    // Function that will save file input data
    const handleFileChange = (ev) => {
        const selected = ev.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setInsuranceData({ ...insuranceData, file: reader.result });
        };
        reader.readAsDataURL(selected);
    };

    const handleEditBtn = (ev, value) => {
        ev.preventDefault();

        setIsEditOn(value);
        setInsuranceData(selectedPuppyInfo.insurance);
    };

    // Funtion that will send inserted data to database
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (insuranceData.number) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem('pup')}/insurance`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: insuranceData }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    handleGetPuppy();
                    setIsEditOn(false);
                });
        }
    };

    return (
        <ModalWrapper>
            <ModalSubWrapper>
                <button className="close" onClick={() => handleModalClose()}>
                    ⨉
                </button>
                <h2>Pet Insurance</h2>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <InputWrapper>
                        <label htmlFor="number">Insurance #</label>
                        <input
                            type="text"
                            id="number"
                            defaultValue={
                                selectedPuppyInfo.insurance
                                    ? selectedPuppyInfo.insurance.number
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'number')}
                            required
                            disabled={
                                selectedPuppyInfo.insurance && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="name">Plan name</label>
                        <input
                            type="text"
                            id="name"
                            defaultValue={
                                selectedPuppyInfo.insurance
                                    ? selectedPuppyInfo.insurance.name
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'name')}
                            disabled={
                                selectedPuppyInfo.insurance && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="startDate">Start date</label>
                        <input
                            type="date"
                            id="startDate"
                            defaultValue={
                                selectedPuppyInfo.insurance
                                    ? selectedPuppyInfo.insurance.startDate
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'startDate')}
                            disabled={
                                selectedPuppyInfo.insurance && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="endDate">End date</label>
                        <input
                            type="date"
                            id="endDate"
                            defaultValue={
                                selectedPuppyInfo.insurance
                                    ? selectedPuppyInfo.insurance.endDate
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'endDate')}
                            disabled={
                                selectedPuppyInfo.insurance && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="issueBy">Company</label>
                        <input
                            type="text"
                            id="company"
                            defaultValue={
                                selectedPuppyInfo.insurance
                                    ? selectedPuppyInfo.insurance.company
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'company')}
                            disabled={
                                selectedPuppyInfo.insurance && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <FileInputWrapper>
                        <label htmlFor="file">Document</label>
                        {selectedPuppyInfo.insurance &&
                        selectedPuppyInfo.insurance.file &&
                        !isEditOn ? (
                            <button
                                onClick={() =>
                                    window.open(
                                        selectedPuppyInfo.insurance.file
                                    )
                                }
                            >
                                Open
                            </button>
                        ) : selectedPuppyInfo.insurance &&
                          !selectedPuppyInfo.insurance.file &&
                          !isEditOn ? null : (
                            <div>
                                <button>Upload file</button>
                                <input
                                    type="file"
                                    id="file"
                                    accept="image/*,.pdf"
                                    onChange={(ev) => handleFileChange(ev)}
                                />
                            </div>
                        )}
                    </FileInputWrapper>
                    <TextareaWrapper>
                        <label htmlFor="memo">Memo</label>
                        <textarea
                            id="memo"
                            defaultValue={
                                selectedPuppyInfo.insurance
                                    ? selectedPuppyInfo.insurance.memo
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'memo')}
                            disabled={
                                selectedPuppyInfo.insurance && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </TextareaWrapper>
                    <ButtonWrapper>
                        {selectedPuppyInfo.insurance && !isEditOn ? (
                            <button onClick={(ev) => handleEditBtn(ev, true)}>
                                Edit
                            </button>
                        ) : !selectedPuppyInfo.insurance ? (
                            <button className="fill" type="submit">
                                Save
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={(ev) => handleEditBtn(ev, false)}
                                >
                                    Cancel
                                </button>
                                <button className="fill" type="submit">
                                    Save
                                </button>
                            </>
                        )}
                    </ButtonWrapper>
                </form>
            </ModalSubWrapper>
        </ModalWrapper>
    );
};

export default Insurance;
