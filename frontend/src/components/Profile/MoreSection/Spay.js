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
    date: null,
    clinic: null,
    contact: null,
    file: null,
    memo: null,
};

const Spay = ({ isMoreSectionOpen, setIsMoreSectionOpen }) => {
    const [spayData, setSpayData] = useState(initialState);
    const [isEditOn, setIsEditOn] = useState(false);

    console.log(spayData);
    const { selectedPuppyInfo, handleGetPuppy } = useContext(PuppyContext);

    // Function that will close modal
    const handleModalClose = () => {
        setIsMoreSectionOpen({ ...isMoreSectionOpen, spay: false });
    };

    // Function that will save input data
    const handleChange = (ev, item) => {
        setSpayData({ ...spayData, [item]: ev.target.value });
    };

    // Function that will save file input data
    const handleFileChange = (ev) => {
        const selected = ev.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setSpayData({ ...spayData, file: reader.result });
        };
        reader.readAsDataURL(selected);
    };

    const handleEditBtn = (ev, value) => {
        ev.preventDefault();

        setIsEditOn(value);
        setSpayData(selectedPuppyInfo.spay);
    };

    // Funtion that will send inserted data to database
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (spayData.date) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem('pup')}/spay`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: spayData }),
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
                <h2>Spay(Neuter)</h2>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <InputWrapper>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            defaultValue={
                                selectedPuppyInfo.spay
                                    ? selectedPuppyInfo.spay.date
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'date')}
                            required
                            disabled={
                                selectedPuppyInfo.spay && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="clinic">Clinic name</label>
                        <input
                            type="text"
                            id="clinic"
                            defaultValue={
                                selectedPuppyInfo.spay
                                    ? selectedPuppyInfo.spay.clinic
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'clinic')}
                            disabled={
                                selectedPuppyInfo.spay && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="contact">Clinic contact</label>
                        <input
                            type="text"
                            id="contact"
                            defaultValue={
                                selectedPuppyInfo.spay
                                    ? selectedPuppyInfo.spay.contact
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'contact')}
                            disabled={
                                selectedPuppyInfo.spay && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <FileInputWrapper>
                        <label htmlFor="file">Document</label>
                        {selectedPuppyInfo.spay &&
                        selectedPuppyInfo.spay.file &&
                        !isEditOn ? (
                            <button
                                onClick={() =>
                                    window.open(selectedPuppyInfo.spay.file)
                                }
                            >
                                Open
                            </button>
                        ) : (
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
                                selectedPuppyInfo.spay
                                    ? selectedPuppyInfo.spay.memo
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'memo')}
                            disabled={
                                selectedPuppyInfo.spay && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </TextareaWrapper>
                    <ButtonWrapper>
                        {selectedPuppyInfo.spay && !isEditOn ? (
                            <button onClick={(ev) => handleEditBtn(ev, true)}>
                                Edit
                            </button>
                        ) : !selectedPuppyInfo.spay ? (
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

export default Spay;
