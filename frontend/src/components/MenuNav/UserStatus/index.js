import React, { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { PuppyContext } from '../../PuppyContext';
import Signin from './Signin';
import Signedin from './Signedin';
import SelectedPuppy from './SelectedPuppy';

const UserStatus = ({ isSigninOpen }) => {
    const { user, isAuthenticated } = useAuth0();
    const { setIsPuppyListOpen, selectedPuppy } = useContext(PuppyContext);

    const localItem = localStorage.getItem('id');

    useEffect(() => {
        if (user && user.sub !== localItem) {
            fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then(() => setIsPuppyListOpen(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            {!isAuthenticated ? (
                <Signin isSigninOpen={isSigninOpen} />
            ) : selectedPuppy ? (
                <SelectedPuppy />
            ) : (
                <Signedin isSigninOpen={isSigninOpen} />
            )}
        </>
    );
};

export default UserStatus;
