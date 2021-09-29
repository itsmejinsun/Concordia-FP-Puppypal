import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { PuppyContext } from './PuppyContext';
import GlobalStyles from './GlobalStyles';
import MainNav from './MainNav';
import MenuNav from './MenuNav/index';
import Home from './Home/index';
import Profile from './Profile/index';
import PuppyList from './PuppyList/index';

const App = () => {
    const { isPuppyListOpen } = useContext(PuppyContext);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <MainNav />
            <Main>
                <MenuNav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </Main>
            {isPuppyListOpen && <PuppyList />}
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
