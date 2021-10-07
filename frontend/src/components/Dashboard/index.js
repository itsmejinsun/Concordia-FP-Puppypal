import React, { useState } from 'react';
import styled from 'styled-components';

import { Wrapper, SubWrapper } from '../Styles';
import PuppyTop1 from './PuppyTop1';
import Puppy from './Puppy';
import HolidayByMonth from './HolidayByMonth';
import HolidayByDay from './HolidayByDay';
import CalendarSec from './Calendar';

const Dashboard = () => {
    const [value, setValue] = useState(new Date());

    return (
        <Wrapper>
            <PuppyTop1 />
            <SubWrapper>
                <h1>Dashboard</h1>
                <Content>
                    <Container>
                        <Puppy />
                    </Container>
                    <Container>
                        <HolidayByMonth value={value} />
                    </Container>
                    <Container>
                        <HolidayByDay value={value} />
                    </Container>
                    <Container>
                        <CalendarSec value={value} setValue={setValue} />
                    </Container>
                </Content>
            </SubWrapper>
        </Wrapper>
    );
};

const Content = styled.div`
    margin: 1rem 0;
    display: grid;
    gap: 1.5rem;
    place-items: center;
    grid-template-columns: minmax(300px, 1fr);
    width: 100%;

    @media (min-width: 992px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }

    @media (min-width: 1570px) {
        grid-template-columns: repeat(3, minmax(300px, 1fr));
    }
`;

const Container = styled.div`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 6px;
    place-self: center;
    border-radius: 10px;
    width: 100%;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default Dashboard;
