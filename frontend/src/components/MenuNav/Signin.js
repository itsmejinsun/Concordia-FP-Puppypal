import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Signin = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            {!isAuthenticated ? (
                <Wrapper>
                    <Register
                        onClick={() =>
                            loginWithRedirect({ screen_hint: 'signup' })
                        }
                    >
                        Register
                    </Register>
                    <Login>
                        <span>or </span>
                        <button onClick={() => loginWithRedirect()}>
                            Sign in
                        </button>
                    </Login>
                </Wrapper>
            ) : (
                <Wrapper>
                    <User>Hi, {user.given_name}</User>
                    <Login>
                        <button onClick={() => logout()}>Sign out</button>
                    </Login>
                </Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Register = styled.button`
    color: #fff;
    background-color: var(--button-color-secondary);
    width: 60%;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    position: relative;
    cursor: pointer;

    &:after {
        content: 'woof!';
        color: var(--main-font-color);
        width: 60%;
        position: absolute;
        top: -20px;
        left: 20%;
        font-family: 'Architects Daughter', cursive;
        text-align: center;
        opacity: 0;
        transform: rotate(-5deg);
        transition: 0.2s ease-out;
    }

    &:hover {
        &:after {
            top: -24px;
            opacity: 1;
        }
    }
`;

const Login = styled.div`
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

        &:hover {
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

const User = styled.p`
    color: #fff;
    background-color: var(--button-color-secondary);
    width: 60%;
    padding: 0.75rem;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
`;

export default Signin;
