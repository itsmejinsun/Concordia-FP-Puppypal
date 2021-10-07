import React from 'react';
import styled from 'styled-components';

import { SubWrapper } from '../Styles';
import Girl from '../../assets/hugging-dog-girl.png';
import Boy from '../../assets/hugging-dog-boy.png';

const Introduction = () => {
    return (
        <Wrapper>
            <Contents>
                <Img src={Girl} alt="hugging-dog-girl" />
                <Text>
                    <h2>Puppy’s lives are too short.</h2>
                    <p>
                        For such a short life, they make our life whole. They
                        have nothing but love and trust. So, while they never
                        stop loving us, we want to make sure they have a healthy
                        life. Please use us for you and your puppy to be happy
                        together for a long.
                    </p>
                </Text>
            </Contents>
            <Quote>
                <h3>“Take care of our puppies as they care about us”</h3>
            </Quote>
            <Contents>
                <Text className="second">
                    <h2>
                        Use <span>Puppypal</span>
                    </h2>
                    <p>To keep your puppy’s all information in one place </p>
                    <p>To manage your puppy’s documents easily </p>
                    <p>To share your puppy’s information </p>
                    <p>To check your puppy’s status </p>
                    <p>To track your puppy’s daily activity</p>
                </Text>
                <Img src={Boy} alt="hugging-dog-boy" />
            </Contents>
        </Wrapper>
    );
};

const Wrapper = styled(SubWrapper)`
    padding: 2rem 4rem;

    @media (min-width: 992px) {
        padding: 2rem 6rem;
    }

    @media (min-width: 1312px) {
        padding: 2rem 8rem;
    }
`;

const Contents = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-of-type {
        flex-direction: column-reverse;
    }

    @media (min-width: 992px) {
        flex-direction: row;

        &:last-of-type {
            flex-direction: row;
        }
        .second {
            text-align: right;
        }
    }
`;

const Text = styled.div`
    margin: 0 1rem;

    h2 {
        margin: 1rem 0;
    }

    p {
        line-height: 1.3;
        font-size: 1.025rem;
    }

    span {
        color: var(--button-color-primary);
    }
`;

const Img = styled.img`
    width: 150px;
    margin: 0 1.5rem;
`;

const Quote = styled.div`
    background-color: var(--nav-selected-color);
    text-align: center;
    padding: 1.2rem;
    margin: 1rem 2.5rem;
    border-radius: 5px;
`;

export default Introduction;
