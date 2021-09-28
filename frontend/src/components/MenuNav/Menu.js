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

const Menu = ({ isMenuOpen }) => {
    return (
        <Wrapper className={`${isMenuOpen}`}>
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
    border-bottom: solid 2px var(--main-background-color);
    display: none;
    flex-direction: column;

    &.true {
        display: flex;
    }

    @media (min-width: 688px) {
        display: flex;
        margin-left: 1.5rem;
        border-bottom: 0;
    }
`;

const StyledLink = styled(NavLink)`
    padding: 1.1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transition: all 0.4s ease-in;

    &.active {
        padding: 1.1rem 3rem;
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
        padding: 1.1rem 3rem;

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

export default Menu;
