import React, { useState, useContext } from 'react';

import {
    ModalWrapper,
    ModalSubWrapper,
    InputWrapper,
    TextareaWrapper,
    ButtonWrapper,
} from '../../Styles';

import { PuppyContext } from '../../PuppyContext';

const initialState = {
    name: null,
    phone: null,
    address: null,
    web: null,
    memo: null,
};

const VetClinic = ({ isMoreSectionOpen, setIsMoreSectionOpen }) => {
    const [vetData, setVetData] = useState(initialState);
    const [isEditOn, setIsEditOn] = useState(false);

    const { selectedPuppyInfo, handleGetPuppy } = useContext(PuppyContext);

    // Function that will close modal
    const handleModalClose = () => {
        setIsMoreSectionOpen({ ...isMoreSectionOpen, vet: false });
    };

    // Function that will save input data
    const handleChange = (ev, item) => {
        setVetData({ ...vetData, [item]: ev.target.value });
    };

    const handleEditBtn = (ev, value) => {
        ev.preventDefault();

        setIsEditOn(value);
        setVetData(selectedPuppyInfo.vet);
    };

    // Funtion that will send inserted data to database
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (vetData.name) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem('pup')}/vet`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: vetData }),
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
                <h2>Veterinary Clinic</h2>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <InputWrapper>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            defaultValue={
                                selectedPuppyInfo.vet
                                    ? selectedPuppyInfo.vet.name
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'name')}
                            required
                            disabled={
                                selectedPuppyInfo.vet && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            defaultValue={
                                selectedPuppyInfo.vet
                                    ? selectedPuppyInfo.vet.phone
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'phone')}
                            required
                            disabled={
                                selectedPuppyInfo.vet && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>

                    <TextareaWrapper>
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            defaultValue={
                                selectedPuppyInfo.vet
                                    ? selectedPuppyInfo.vet.address
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'address')}
                            disabled={
                                selectedPuppyInfo.vet && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </TextareaWrapper>
                    <InputWrapper>
                        <label htmlFor="web">Website</label>
                        <input
                            type="url"
                            id="web"
                            defaultValue={
                                selectedPuppyInfo.vet
                                    ? selectedPuppyInfo.vet.web
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'web')}
                            required
                            disabled={
                                selectedPuppyInfo.vet && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <TextareaWrapper>
                        <label htmlFor="memo">Memo</label>
                        <textarea
                            id="memo"
                            defaultValue={
                                selectedPuppyInfo.vet
                                    ? selectedPuppyInfo.vet.memo
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'memo')}
                            disabled={
                                selectedPuppyInfo.vet && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </TextareaWrapper>
                    <ButtonWrapper>
                        {selectedPuppyInfo.vet && !isEditOn ? (
                            <button onClick={(ev) => handleEditBtn(ev, true)}>
                                Edit
                            </button>
                        ) : !selectedPuppyInfo.vet ? (
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

export default VetClinic;
