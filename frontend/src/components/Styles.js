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
    padding: 4rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
        margin: 1.25rem 0.5rem;
        font-size: 1.2rem;
    }

    div:last-of-type {
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
    }

    @media (min-width: 992px) {
        padding: 2rem 4rem;
    }

    @media (min-width: 1312px) {
        button {
            min-width: 125px;
        }
    }
`;
