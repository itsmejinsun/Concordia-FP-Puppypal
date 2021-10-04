import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { PuppyContext } from '../../PuppyContext';

const initialState = {
    date: null,
    vet: null,
    category: null,
    name: null,
    file: null,
    memo: null,
    nextVisitDate: null,
    nextVisitTime: null,
};

const VaccineAddDetail = () => {
    const [inputData, setInputData] = useState(initialState);

    const { handleGetPuppy } = useContext(PuppyContext);
    console.log(inputData);

    // Function that will save input data
    const handleChange = (ev, key) => {
        setInputData({ ...inputData, [key]: ev.target.value.trim() });
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

    // Funtion that will send to database
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (inputData.name) {
            fetch(
                `/api/${localStorage.getItem(
                    'id'
                )}/puppy/${localStorage.getItem('pup')}/vaccine`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: inputData }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    handleGetPuppy();
                    // setIsEditOn(false);
                });
        }
    };

    return (
        <Wrapper>
            <h2>Add Vaccination</h2>
            <SubWrapper>
                <form onSubmit={handleSubmit}>
                    <InputWrapperLine>
                        <InputWrapperCol>
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                onChange={(ev) => handleChange(ev, 'date')}
                                required
                            ></input>
                        </InputWrapperCol>

                        <InputWrapperCol>
                            <label htmlFor="vet">Vet</label>
                            <input
                                type="text"
                                id="vet"
                                onChange={(ev) => handleChange(ev, 'vet')}
                            ></input>
                        </InputWrapperCol>
                    </InputWrapperLine>

                    <InputWrapperLine>
                        <InputWrapperCol>
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                onChange={(ev) => handleChange(ev, 'category')}
                                required
                            >
                                <option>Select</option>
                                <option value="vaccine">Vaccine</option>
                                <option value="dewormer">Dewormer</option>
                                <option value="other">Other</option>
                            </select>
                        </InputWrapperCol>

                        <InputWrapperCol>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                onChange={(ev) => handleChange(ev, 'name')}
                                required
                            ></input>
                        </InputWrapperCol>
                    </InputWrapperLine>

                    <FileInputWrapper>
                        <label htmlFor="file">Document</label>
                        <div>
                            <button>Upload file</button>
                            <input
                                type="file"
                                id="file"
                                accept="image/*,.pdf"
                                onChange={(ev) => handleFileChange(ev, '')}
                            />
                        </div>
                    </FileInputWrapper>

                    <TextareaWrapper>
                        <label htmlFor="memo">Memo</label>
                        <textarea
                            id="memo"
                            onChange={(ev) => handleChange(ev, 'memo')}
                        ></textarea>
                    </TextareaWrapper>

                    <InputWrapperRow>
                        <label htmlFor="nextVisit">Next visit</label>
                        <input
                            type="date"
                            id="nextVisitDate"
                            onChange={(ev) => handleChange(ev, 'nextVisitDate')}
                        ></input>
                        <input
                            type="time"
                            id="nextVisitTime"
                            onChange={(ev) => handleChange(ev, 'nextVisitTime')}
                        ></input>
                    </InputWrapperRow>

                    <ButtonWrapper>
                        <button type="submit">Save</button>
                    </ButtonWrapper>
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

        #name {
            width: 250px;
        }
    }
`;

const InputWrapperLine = styled.div`
    display: flex;
`;

const InputWrapperCol = styled.div`
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
`;

const FileInputWrapper = styled.div`
    margin: 0.5rem;
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
            margin-left: 3rem;
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

    textarea {
        width: 100%;
        padding: 0.25rem;
        margin: 0.25rem 0;
        font-family: inherit;
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

export default VaccineAddDetail;
