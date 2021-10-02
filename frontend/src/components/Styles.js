import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 4;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
`;

export const SubWrapper = styled.div`
    background-color: var(--main-background-color);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100%;
    min-height: 588px;
    padding: 2rem;
    margin-top: 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    @media (min-width: 688px) {
        margin-top: 0;
    }
`;

export const DividedSection = styled.div`
    background-color: #fff;
    flex-basis: 45%;
    min-width: 45%;
    min-height: 500px;
    margin: 1rem;
    padding: 4rem 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
        margin: 0.75rem;
        font-size: 1.1rem;
    }

    .btnWrapper {
        display: flex;
        justify-content: space-evenly;
    }

    button {
        color: var(--button-color-primary);
        background: none;
        border: solid 2px var(--button-color-primary);
        border-radius: 10px;
        min-width: 110px;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        font-family: inherit;
        font-size: 1.2rem;
        cursor: pointer;

        &:hover,
        &:focus {
            outline: none;
            animation: shake 1s;
            transform-origin: center;
        }
    }

    @media (min-width: 992px) {
        padding: 2rem;
    }

    @media (min-width: 1312px) {
        padding: 2rem 6rem;

        button {
            min-width: 125px;
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

export const ModalWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: contrast(1) blur(10px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const ModalSubWrapper = styled.div`
    background-color: #fff;
    width: 480px;
    height: 480px;
    margin-top: 2rem;
    border-bottom: solid 2px var(--main-background-color);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    .close {
        color: grey;
        background: none;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }

    h2 {
        margin-top: 1rem;
    }

    @media (min-width: 992px) {
        margin-top: 0;
        border-right: solid 2px var(--main-background-color);
    }
`;

export const DividedModalWrapper = styled.div`
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: contrast(1) blur(10px);
    width: 100%;
    height: 100%;
    margin-top: 0;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const DividedModalSubWrapper = styled.div`
    background-color: #fff;
    min-width: 280px;
    min-height: 200px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .close {
        color: grey;
        background: none;
        padding: 0;
        margin: 0;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: right;
        position: absolute;
        top: 0;
        right: 10px;
        cursor: pointer;
    }

    .close:hover {
        animation: none;
    }

    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    button {
        color: #fff;
        background-color: var(--button-color-primary);
        font-size: 1rem;
        margin-top: 1rem;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
    display: flex;
    align-items: center;

    &:first-of-type {
        margin-top: 0;
    }

    label {
        flex: 1;
        margin-right: 1rem;
    }

    input {
        max-width: 240px;
        flex: 2;
        font-family: inherit;
        font-size: 1rem;
        text-align: center;
    }

    input:disabled {
        background: none;
        border: none;
        font-weight: bold;
    }
`;

export const FileInputWrapper = styled.div`
    position: relative;
    overflow: hidden;

    button {
        border: 1px solid var(--main-font-color);
        color: var(--main-font-color);
        background: none;
        min-width: 75px;
        padding: 0.2rem 1.5rem;
        margin-left: 3rem;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.2s ease-in;

        &:hover {
            color: #fff;
            background-color: var(--main-font-color);
        }
    }

    div {
        position: relative;
        display: inline-block;

        input {
            font-size: 100px;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
        }
    }
`;

export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.5rem;

    textarea {
        width: 100%;
        padding: 0.25rem;
        margin: 0.25rem 0 1rem;
        font-family: inherit;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.25rem;

    button {
        color: var(--button-color-primary);
        background: none;
        border: solid 2px var(--button-color-primary);
        border-radius: 10px;
        min-width: 110px;
        padding: 0.25rem 1rem;
        margin: 0 0.5rem;
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
