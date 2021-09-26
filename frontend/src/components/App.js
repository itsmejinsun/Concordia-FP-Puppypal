import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import GlobalStyles from './GlobalStyles';
import MainNav from './MainNav';
import MenuNav from './MenuNav/index';
import Home from './Home/index';

const App = () => {
    const { user } = useAuth0();

    return (
        <BrowserRouter>
            <GlobalStyles />
            <MainNav />
            <Main>
                <MenuNav />
                <MainContents>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </MainContents>
            </Main>
        </BrowserRouter>
    );
};

const Main = styled.div`
    background-color: #fff;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    width: 95%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
`;
const MainContents = styled.div`
    flex: 10;
`;

export default App;
