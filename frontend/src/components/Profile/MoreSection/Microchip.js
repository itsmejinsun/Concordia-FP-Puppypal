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
    const { selectedPuppyInfo } = useContext(PuppyContext);

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
                    handleModalClose();
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
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="place">Register place</label>
                        <input
                            type="text"
                            id="place"
                            defaultValue={
                                selectedPuppyInfo.microchip
                                    ? selectedPuppyInfo.microchip.place
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'place')}
                        />
                    </InputWrapper>
                    <FileInputWrapper>
                        <label htmlFor="file">Document</label>
                        {selectedPuppyInfo.microchip &&
                        selectedPuppyInfo.microchip.file ? (
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
                            <>
                                <button>Upload file</button>
                                <input
                                    type="file"
                                    id="file"
                                    accept="image/*,.pdf"
                                    onChange={(ev) => handleFileChange(ev)}
                                />
                            </>
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
                        />
                    </TextareaWrapper>
                    <ButtonWrapper>
                        <button type="submit">Save</button>
                    </ButtonWrapper>
                </form>
            </ModalSubWrapper>
        </ModalWrapper>
    );
};

export default Microchip;
