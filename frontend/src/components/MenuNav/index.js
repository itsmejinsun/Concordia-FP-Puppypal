import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faSyringe,
    faBriefcaseMedical,
    faBook,
    faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <StyledLink exact activeClassName="active" to="/">
                        <Icon className="icon">
                            <FontAwesomeIcon icon={faHome} />
                        </Icon>
                        <p>HOME</p>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink activeClassName="active" to="/daily">
                        <Icon className="icon">
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </Icon>
                        <p>DAILY CARE</p>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink activeClassName="active" to="/vaccine">
                        <Icon className="icon">
                            <FontAwesomeIcon icon={faSyringe} />
                        </Icon>
                        <p>VACCINATION</p>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink activeClassName="active" to="/vetrecord">
                        <Icon className="icon">
                            <FontAwesomeIcon icon={faBriefcaseMedical} />
                        </Icon>
                        <p>VET RECORD</p>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink activeClassName="active" to="/library">
                        <Icon className="icon">
                            <FontAwesomeIcon icon={faBook} />
                        </Icon>
                        <p>LIBRARY</p>
                    </StyledLink>
                </li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--nav-background-color);
    flex: 1.5 100px;
    height: 100%;
    border-top-left-radius: 10px;
    font-family: var(--main-font);
    font-size: 1.25rem;
    padding-top: 2rem;
    &.active {
        background-color: var(--nav-selected-color);
    }
`;

const StyledLink = styled(NavLink)`
    padding: 1.2rem;
    display: flex;
    align-items: center;
    transition: all 0.4s ease-in;

    &.active {
        padding: 1.2rem 3rem;
        background-color: var(--nav-selected-color);

        &:hover {
            transform: none;
            box-shadow: none;

            .icon {
                animation: none;
            }
        }

        .icon {
            opacity: 1;
        }
    }

    &:hover {
        background-color: var(--nav-selected-color);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transform: scale(1.075);
        padding: 1.2rem 3rem;

        .icon {
            opacity: 1;
            animation: slide-in 0.4s ease-in forwards;
            transition: 1s;
        }
    }

    p {
        margin-left: 0.75rem;
    }

    @keyframes slide-in {
        0% {
            transform: translateX(-150%);
        }
        100% {
            transform: translateX(0);
        }
    }
`;

const Icon = styled.div`
    opacity: 0;
`;

export default Nav;
