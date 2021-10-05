import React, { useEffect } from 'react';
import styled from 'styled-components';

const VetRecordEditDetail = ({
    inputData,
    setInputData,
    selectedVetRecord,
    isVetRecordEditted,
    setIsVetRecordEditted,
    setIsMedOpen,
    handleDeleteMed,
    isEditOn,
    setIsEditOn,
}) => {
    // fetch selected vet record data
    useEffect(() => {
        fetch(
            `/api/${localStorage.getItem('id')}/puppy/${localStorage.getItem(
                'pup'
            )}/vetRecord/${selectedVetRecord}`
        )
            .then((res) => res.json())
            .then((data) => setInputData(data.data));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditOn]);

    // Function that will save input data
    const handleChange = (ev, key) => {
        setInputData({ ...inputData, [key]: ev.target.value });
    };

    // Function that will open add medication modal
    const handleMed = (ev) => {
        ev.preventDefault();
        setIsMedOpen(true);
    };

    // Function that will save file input data
    const handleFileChange = (ev) => {
        const selected = ev.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setInputData({ ...inputData, file: reader.result });
        };
        reader.readAsDataURL(selected);
    };

    // Function that will change edit mode
    const handleEdit = (ev, value) => {
        ev.preventDefault();
        setIsEditOn(value);
    };

    // Funtion that will send to database
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (inputData.date) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem(
                    'pup'
                )}/vetRecord/${selectedVetRecord}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: inputData }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setIsVetRecordEditted(!isVetRecordEditted);
                    setIsEditOn(false);
                });
        }
    };

    return (
        <Wrapper>
            <h2>Edit Vet Record</h2>
            <SubWrapper>
                <form onSubmit={handleSubmit}>
                    <InputWrapperLine>
                        <InputWrapperCol>
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                onChange={(ev) => handleChange(ev, 'date')}
                                defaultValue={inputData ? inputData.date : null}
                                required
                                disabled={isEditOn ? false : true}
                            ></input>
                        </InputWrapperCol>

                        <InputWrapperCol>
                            <label htmlFor="vet">Vet</label>
                            <input
                                type="text"
                                id="vet"
                                onChange={(ev) => handleChange(ev, 'vet')}
                                defaultValue={inputData ? inputData.vet : null}
                                disabled={isEditOn ? false : true}
                            ></input>
                        </InputWrapperCol>
                    </InputWrapperLine>

                    <InputWrapperCol>
                        <label htmlFor="reason">Reason</label>
                        <input
                            type="text"
                            id="reason"
                            onChange={(ev) => handleChange(ev, 'reason')}
                            defaultValue={inputData ? inputData.reason : null}
                            required
                            disabled={isEditOn ? false : true}
                        ></input>
                    </InputWrapperCol>

                    <InputWrapperLine>
                        <TextareaWrapper>
                            <label htmlFor="memo">Memo</label>
                            <textarea
                                id="memo"
                                rows="3"
                                onChange={(ev) => handleChange(ev, 'memo')}
                                defaultValue={inputData ? inputData.memo : null}
                                disabled={isEditOn ? false : true}
                            ></textarea>
                        </TextareaWrapper>

                        <TextareaWrapper>
                            <label htmlFor="medication">Medications</label>
                            <button onClick={(ev) => handleMed(ev)}>Add</button>
                            <MedList>
                                {inputData.medication &&
                                    inputData.medication.map((med) => (
                                        <div>
                                            <span
                                                tabIndex="0"
                                                onClick={(ev) =>
                                                    handleDeleteMed(ev)
                                                }
                                            >
                                                {med.name} ⨉
                                            </span>
                                        </div>
                                    ))}
                            </MedList>
                        </TextareaWrapper>
                    </InputWrapperLine>

                    <InputWrapperLine>
                        <InputWrapperRow>
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="text"
                                id="weight"
                                onChange={(ev) => handleChange(ev, 'weight')}
                                defaultValue={
                                    inputData ? inputData.weight : null
                                }
                                disabled={isEditOn ? false : true}
                            ></input>
                            <small>kg</small>
                        </InputWrapperRow>

                        <FileInputWrapper>
                            <label htmlFor="file">Document</label>
                            {inputData && inputData.file && !isEditOn ? (
                                <div>
                                    <button
                                        onClick={() =>
                                            window.open(inputData.file)
                                        }
                                    >
                                        Open
                                    </button>
                                </div>
                            ) : inputData && !inputData.file && !isEditOn ? (
                                <div>
                                    <button disabled>No file</button>
                                </div>
                            ) : (
                                <div>
                                    <button>Upload</button>
                                    <input
                                        type="file"
                                        id="file"
                                        accept="image/*,.pdf"
                                        onChange={(ev) => handleFileChange(ev)}
                                    />
                                </div>
                            )}
                        </FileInputWrapper>
                    </InputWrapperLine>

                    <InputWrapperRow>
                        <label htmlFor="nextVisit">Next visit</label>
                        <input
                            type="date"
                            id="nextVisitDate"
                            onChange={(ev) => handleChange(ev, 'nextVisitDate')}
                            defaultValue={
                                inputData ? inputData.nextVisitDate : null
                            }
                            disabled={isEditOn ? false : true}
                        ></input>
                        <input
                            type="time"
                            id="nextVisitTime"
                            onChange={(ev) => handleChange(ev, 'nextVisitTime')}
                            defaultValue={
                                inputData ? inputData.nextVisitTime : null
                            }
                            disabled={isEditOn ? false : true}
                        ></input>
                    </InputWrapperRow>

                    {!isEditOn ? (
                        <ButtonWrapper>
                            <button onClick={(ev) => handleEdit(ev, true)}>
                                Edit
                            </button>
                        </ButtonWrapper>
                    ) : (
                        <ButtonWrapper>
                            <button onClick={(ev) => handleEdit(ev, false)}>
                                Cancel
                            </button>
                            <button className="fill">Save</button>
                        </ButtonWrapper>
                    )}
                </form>
            </SubWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin: 0 0 1rem 1rem;
    }
`;

const SubWrapper = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 0.2rem;
        }

        input,
        select {
            font-family: inherit;
            font-size: 0.9rem;
            text-align: center;
        }

        select {
            padding: 0.12rem;
        }

        input:disabled,
        select:disabled {
            background: none;
            font-weight: bold;
        }

        #date {
            width: 147px;
        }

        #vet {
            width: 200px;
        }

        #reason {
            width: 100%;
        }

        #weight {
            width: 50px;
            margin: 0 0.5rem;
        }
    }
`;

const InputWrapperLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputWrapperCol = styled.div`
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
`;

const FileInputWrapper = styled.div`
    margin-right: 0.5rem;
    position: relative;
    overflow: hidden;

    div {
        position: relative;
        display: inline-block;

        button {
            border: 1px solid var(--main-font-color);
            color: var(--main-font-color);
            background: none;
            min-width: 75px;
            padding: 0.2rem 1.5rem;
            margin-left: 1rem;
            border-radius: 10px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: 0.2s ease-in;

            &:hover,
            &:focus {
                color: #fff;
                background-color: var(--main-font-color);
            }
        }

        button:disabled {
            background-color: lightgrey;
            cursor: not-allowed;

            &:hover,
            &:focus {
                color: var(--main-font-color);
                background-color: lightgrey;
            }
        }

        input {
            font-size: 100px;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
        }
    }
`;

const TextareaWrapper = styled.div`
    margin: 0.25rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    textarea {
        width: 165px;
        padding: 0.25rem;
        margin: 0.25rem 0;
        font-family: inherit;
    }

    button {
        color: var(--button-color-primary);
        background: none;
        border: solid 1px var(--button-color-primary);
        border-radius: 5px;
        padding: 0 0.75rem;
        font-family: inherit;
        font-size: 0.8rem;
        position: absolute;
        top: -2px;
        right: 0;
        cursor: pointer;
        transition: 0.2s ease-in;

        &:hover {
            color: #fff;
            background-color: var(--button-color-primary);
        }
    }

    #medication {
        border: none;
    }
`;

const InputWrapperRow = styled.div`
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.75rem;

    button {
        color: var(--button-color-primary);
        background: none;
        border: solid 2px var(--button-color-primary);
        border-radius: 10px;
        min-width: 110px;
        padding: 0.25rem 1rem;
        margin: 0.25rem 0.5rem;
        font-family: inherit;
        font-size: 1.2rem;
        cursor: pointer;

        &.fill {
            color: #fff;
            background-color: var(--button-color-primary);
        }

        &:hover,
        &:focus {
            outline: none;
            animation: shake 1s;
            transform-origin: center;
        }
    }

    @keyframes shake {
        10%,
        90% {
            transform: rotate(-2deg);
        }
        20%,
        80% {
            transform: rotate(2deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(-2deg);
        }
        40%,
        60% {
            transform: rotate(2deg);
        }
    }
`;

const MedList = styled.div`
    background-color: var(--main-background-color);
    width: 175px;
    height: 72px;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    div {
        background-color: var(--button-color-secondary);
        border-radius: 5px;
        padding: 0.2rem 0.5rem;
        margin: 0.2rem;
        font-size: 0.9rem;
        display: inline-block;

        span {
            color: #fff;
            cursor: pointer;
        }
    }
`;

export default VetRecordEditDetail;
