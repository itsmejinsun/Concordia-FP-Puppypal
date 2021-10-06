import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { PuppyContext } from './PuppyContext';
import GlobalStyles from './GlobalStyles';
import MainNav from './MainNav';
import MenuNav from './MenuNav/index';
import Home from './Home/index';
import Dashboard from './Dashboard/index';
import DailyCare from './DailyCare/index';
import Vaccination from './Vaccination/index';
import VetRecord from './VetRecord/index';
import Library from './Library/index';
import Profile from './Profile/index';
import PuppyList from './PuppyList/index';
import ProfilePicture from './Profile/ProfilePicture/index';

const App = () => {
    const { isPuppyListOpen, isProfilePicOpen } = useContext(PuppyContext);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <MainNav />
            <Main>
                <MenuNav />
                <Switch>
                    <Route exact path="/">
                        {!localStorage.getItem('id') ? <Home /> : <Dashboard />}
                    </Route>
                    <Route path="/daily">
                        <DailyCare />
                    </Route>
                    <Route path="/vaccine">
                        <Vaccination />
                    </Route>
                    <Route path="/vetrecord">
                        <VetRecord />
                    </Route>
                    <Route path="/library">
                        <Library />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </Main>

            {/* Modals */}
            {isPuppyListOpen && <PuppyList />}
            {isProfilePicOpen && <ProfilePicture />}
        </BrowserRouter>
    );
};

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 688px) {
        flex-direction: row;
    }
`;

export default App;
