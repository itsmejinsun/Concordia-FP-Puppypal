import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { PuppyContext } from '../PuppyContext';
import animatedDog from '../../assets/animated-dog.gif';

const Puppy = () => {
    const { selectedPuppyInfo } = useContext(PuppyContext);

    const getNextBday = () => {
        const nextYear = Number(moment(new Date()).format('yyyy')) + 1;
        const birthday = moment(selectedPuppyInfo.birthday).format('MM-DD');
        return birthday + '-' + nextYear;
    };

    return (
        <>
            {selectedPuppyInfo && (
                <Wrapper>
                    <h2>
                        {selectedPuppyInfo.name.slice(0, 1).toUpperCase()}
                        {selectedPuppyInfo.name.slice(1)}
                    </h2>

                    <p>
                        has lived for{' '}
                        <b>
                            {moment(new Date()).diff(
                                selectedPuppyInfo.birthday,
                                'days'
                            )}
                        </b>{' '}
                        days.
                    </p>
                    <p>—</p>
                    <p>
                        <b>{moment(getNextBday()).diff(new Date(), 'days')}</b>{' '}
                        days until next birthday
                    </p>
                    <p>—</p>
                    {selectedPuppyInfo.license && (
                        <>
                            <p>
                                Pet license expires on{' '}
                                <b>{selectedPuppyInfo.license.expireDate}</b>
                            </p>
                            <p>—</p>
                        </>
                    )}
                    {/* HARD CORDED FOR SHOW THE POSSIBILITY*/}
                    <p>
                        Next vaccines on <b>2021-11-16</b>
                    </p>

                    <img src={animatedDog} alt="animatedDog" />
                    {/* birthday / license expire / insurance espire / next vet visit / next vaccine  */}
                </Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    background-color: var(--input-color-primary);
    border-radius: 10px;
    width: 90%;
    height: 90%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 2rem;
    }

    p {
        width: 100%;
        text-align: center;
    }

    /* p:nth-of-type(odd) {
        background-color: #fff;
    } */

    img {
        width: 50px;
        margin-top: 1.5rem;
    }
`;

export default Puppy;
