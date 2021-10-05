import React from 'react';
import styled from 'styled-components';

const AddMedication = ({ inputMedData, setInputMedData, handleSaveMed }) => {
    // Function that will save input data
    const handleChange = (ev, key) => {
        setInputMedData({ ...inputMedData, [key]: ev.target.value });
    };

    return (
        <Wrapper>
            <h2>Add Medication</h2>
            <SubWrapper>
                <form onSubmit={(ev) => handleSaveMed(ev)}>
                    <InputWrapperLine>
                        <InputWrapperCol>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                onChange={(ev) => handleChange(ev, 'name')}
                                required
                            ></input>
                        </InputWrapperCol>

                        <InputWrapperCol>
                            <label htmlFor="dose">Dose</label>
                            <input
                                type="text"
                                id="dose"
                                onChange={(ev) => handleChange(ev, 'dose')}
                            ></input>
                        </InputWrapperCol>
                    </InputWrapperLine>

                    <InputWrapperCol className="duration">
                        <label htmlFor="startDate">Duration</label>
                        <div>
                            <input
                                type="date"
                                id="startDate"
                                onChange={(ev) => handleChange(ev, 'startDate')}
                            ></input>
                            <span>~</span>
                            <input
                                type="date"
                                id="endDate"
                                onChange={(ev) => handleChange(ev, 'endDate')}
                            ></input>
                        </div>
                    </InputWrapperCol>

                    <InputWrapperRow className="select">
                        <label htmlFor="time">Every</label>
                        <select
                            id="time"
                            onChange={(ev) => handleChange(ev, 'time')}
                        >
                            <option>Select</option>
                            <option>Morning & Night</option>
                            <option>Morning</option>
                            <option>Lunch</option>
                            <option>Night</option>
                            <option>Other</option>
                        </select>
                        <span>/day</span>
                    </InputWrapperRow>

                    <TextareaWrapper>
                        <label htmlFor="memo">Memo</label>
                        <textarea
                            id="memo"
                            onChange={(ev) => handleChange(ev, 'memo')}
                        ></textarea>
                    </TextareaWrapper>

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
    height: 400px;
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

        .duration {
            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .select {
            display: flex;
            justify-content: flex-end;

            select {
                margin: 0 0.5rem;
            }
        }

        #name {
            width: 235px;
        }

        #dose {
            width: 100px;
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

const InputWrapperRow = styled.div`
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TextareaWrapper = styled.div`
    margin: 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    textarea {
        width: 100%;
        padding: 0.25rem;
        margin: 0.25rem 0;
        font-family: inherit;
    }
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

export default AddMedication;
