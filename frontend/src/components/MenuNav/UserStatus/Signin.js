import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Signin = ({ isSigninOpen }) => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Wrapper className={`${isSigninOpen}`}>
            <Register
                onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
            >
                Register
            </Register>
            <SigninBtn>
                <span>or </span>
                <button onClick={() => loginWithRedirect()}>Sign in</button>
            </SigninBtn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-bottom: solid 2px var(--main-background-color);

    &.true {
        display: flex;
    }

    @media (min-width: 688px) {
        display: flex;
        margin-top: 6rem;
        border-bottom: 0;
    }
`;

const Register = styled.button`
    color: #fff;
    background-color: var(--button-color-secondary);
    padding: 0.5rem 2.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    position: relative;
    cursor: pointer;
`;

const SigninBtn = styled.div`
    margin-top: 0.25rem;
    font-weight: 500;

    span {
        color: var(--button-color-secondary);
        font-size: 0.9rem;
    }

    button {
        color: var(--button-color-secondary);
        background: none;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;

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

export default Signin;
