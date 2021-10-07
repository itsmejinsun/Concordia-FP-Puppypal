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
    date: null,
    place: null,
    file: null,
    memo: null,
};

const Microchip = ({ isMoreSectionOpen, setIsMoreSectionOpen }) => {
    const [microchipData, setMicrochipData] = useState(initialState);
    const [isEditOn, setIsEditOn] = useState(false);

    const { selectedPuppyInfo, handleGetPuppy } = useContext(PuppyContext);

    // Function that will close modal
    const handleModalClose = () => {
        setIsMoreSectionOpen({ ...isMoreSectionOpen, microchip: false });
    };

    // Function that will save input data
    const handleChange = (ev, item) => {
        setMicrochipData({ ...microchipData, [item]: ev.target.value });
    };

    // Function that will save file input data
    const handleFileChange = (ev) => {
        const selected = ev.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setMicrochipData({ ...microchipData, file: reader.result });
        };
        reader.readAsDataURL(selected);
    };

    // Function that will change input's disabled status
    const handleEditBtn = (ev, value) => {
        ev.preventDefault();

        setIsEditOn(value);
        setMicrochipData(selectedPuppyInfo.microchip);
    };

    // Funtion that will send inserted data to database
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (microchipData.number) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem('pup')}/microchip`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: microchipData }),
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
                <h2>Microchip</h2>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <InputWrapper>
                        <label htmlFor="number">Microchip #</label>
                        <input
                            type="text"
                            id="number"
                            defaultValue={
                                selectedPuppyInfo.microchip
                                    ? selectedPuppyInfo.microchip.number
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'number')}
                            required
                            disabled={
                                selectedPuppyInfo.microchip && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="date">Register date</label>
                        <input
                            type="date"
                            id="date"
                            defaultValue={
                                selectedPuppyInfo.microchip
                                    ? selectedPuppyInfo.microchip.date
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'date')}
                            disabled={
                                selectedPuppyInfo.microchip && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="place">Registered by</label>
                        <input
                            type="text"
                            id="place"
                            defaultValue={
                                selectedPuppyInfo.microchip
                                    ? selectedPuppyInfo.microchip.place
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'place')}
                            disabled={
                                selectedPuppyInfo.microchip && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <FileInputWrapper>
                        <label htmlFor="file">Document</label>
                        {selectedPuppyInfo.microchip &&
                        selectedPuppyInfo.microchip.file &&
                        !isEditOn ? (
                            <button
                                onClick={() =>
                                    window.open(
                                        selectedPuppyInfo.microchip.file
                                    )
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
                                selectedPuppyInfo.microchip
                                    ? selectedPuppyInfo.microchip.memo
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'memo')}
                            disabled={
                                selectedPuppyInfo.microchip && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </TextareaWrapper>
                    <ButtonWrapper>
                        {selectedPuppyInfo.microchip && !isEditOn ? (
                            <button onClick={(ev) => handleEditBtn(ev, true)}>
                                Edit
                            </button>
                        ) : !selectedPuppyInfo.microchip ? (
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

export default Microchip;
