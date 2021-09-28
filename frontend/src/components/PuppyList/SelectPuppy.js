import React from 'react';
import styled from 'styled-components';

const SelectPuppy = ({ setIsPuppyListOpen, setIsAddPuppyOpen }) => {
    return (
        <Wrapper>
            <button className="close" onClick={() => setIsPuppyListOpen(false)}>
                ⨉
            </button>
            <p>Please select or add your Puppy</p>
            <div>
                <button onClick={() => setIsAddPuppyOpen(true)}>+</button>
            </div>
            <div>
                <p>Do you want to sign out?</p>
                <button>Sign out</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #fff;
    width: 480px;
    height: 480px;
    margin-top: 2rem;
    border-bottom: solid 2px var(--main-background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    @media (min-width: 992px) {
        margin-top: 0;
        border-right: solid 2px var(--main-background-color);
    }
`;

export default SelectPuppy;
