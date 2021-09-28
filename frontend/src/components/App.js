import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
// import { useAuth0 } from '@auth0/auth0-react';

import GlobalStyles from './GlobalStyles';
import MainNav from './MainNav';
import MenuNav from './MenuNav/index';
import Home from './Home/index';
import PuppyList from './PuppyList/index';

const App = () => {
    const [isPuppyListOpen, setIsPuppyListOpen] = useState(false);
    const [selectedPuppy, setSelectedPuppy] = useState();
    // const { user } = useAuth0();

    console.log(selectedPuppy);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <MainNav />
            <Main>
                <MenuNav setIsPuppyListOpen={setIsPuppyListOpen} />
                <MainContents>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </MainContents>
            </Main>
            {isPuppyListOpen && (
                <PuppyList
                    setIsPuppyListOpen={setIsPuppyListOpen}
                    setSelectedPuppy={setSelectedPuppy}
                />
            )}
        </BrowserRouter>
    );
};

const Main = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 688px) {
        flex-direction: row;
    }
`;
const MainContents = styled.div`
    flex: 10;
`;

export default App;
