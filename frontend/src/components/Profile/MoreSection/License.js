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
    issueDate: null,
    expireDate: null,
    issueBy: null,
    file: null,
    memo: null,
};

const License = ({ isMoreSectionOpen, setIsMoreSectionOpen }) => {
    const [licenseData, setLicenseData] = useState(initialState);
    const [isEditOn, setIsEditOn] = useState(false);

    const { selectedPuppyInfo, handleGetPuppy } = useContext(PuppyContext);

    // Function that will close modal
    const handleModalClose = () => {
        setIsMoreSectionOpen({ ...isMoreSectionOpen, license: false });
    };

    // Function that will save input data
    const handleChange = (ev, item) => {
        setLicenseData({ ...licenseData, [item]: ev.target.value });
    };

    // Function that will save file input data
    const handleFileChange = (ev) => {
        const selected = ev.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setLicenseData({ ...licenseData, file: reader.result });
        };
        reader.readAsDataURL(selected);
    };

    // Function that will change input's disabled status
    const handleEditBtn = (ev, value) => {
        ev.preventDefault();

        setIsEditOn(value);
        setLicenseData(selectedPuppyInfo.license);
    };

    // Funtion that will send inserted data to database
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (licenseData.number) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem('pup')}/license`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: licenseData }),
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
                <h2>Pet License</h2>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <InputWrapper>
                        <label htmlFor="number">License #</label>
                        <input
                            type="text"
                            id="number"
                            defaultValue={
                                selectedPuppyInfo.license
                                    ? selectedPuppyInfo.license.number
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'number')}
                            required
                            disabled={
                                selectedPuppyInfo.license && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="issueDate">Issue date</label>
                        <input
                            type="date"
                            id="issueDate"
                            defaultValue={
                                selectedPuppyInfo.license
                                    ? selectedPuppyInfo.license.issueDate
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'issueDate')}
                            disabled={
                                selectedPuppyInfo.license && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="expireDate">Expire date</label>
                        <input
                            type="date"
                            id="expireDate"
                            defaultValue={
                                selectedPuppyInfo.license
                                    ? selectedPuppyInfo.license.expireDate
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'expireDate')}
                            disabled={
                                selectedPuppyInfo.license && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="issueBy">Issued by</label>
                        <input
                            type="text"
                            id="issueBy"
                            defaultValue={
                                selectedPuppyInfo.license
                                    ? selectedPuppyInfo.license.issueBy
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'issueBy')}
                            disabled={
                                selectedPuppyInfo.license && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </InputWrapper>
                    <FileInputWrapper>
                        <label htmlFor="file">Document</label>
                        {selectedPuppyInfo.license &&
                        selectedPuppyInfo.license.file &&
                        !isEditOn ? (
                            <button
                                onClick={() =>
                                    window.open(selectedPuppyInfo.license.file)
                                }
                            >
                                Open
                            </button>
                        ) : selectedPuppyInfo.license &&
                          !selectedPuppyInfo.license.file &&
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
                                selectedPuppyInfo.license
                                    ? selectedPuppyInfo.license.memo
                                    : null
                            }
                            onChange={(ev) => handleChange(ev, 'memo')}
                            disabled={
                                selectedPuppyInfo.license && !isEditOn
                                    ? true
                                    : false
                            }
                        />
                    </TextareaWrapper>
                    <ButtonWrapper>
                        {selectedPuppyInfo.license && !isEditOn ? (
                            <button onClick={(ev) => handleEditBtn(ev, true)}>
                                Edit
                            </button>
                        ) : !selectedPuppyInfo.license ? (
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

export default License;
