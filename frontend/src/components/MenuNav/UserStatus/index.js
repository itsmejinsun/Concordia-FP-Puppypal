import React, { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { PuppyContext } from '../../PuppyContext';
import Signin from './Signin';
import Signedin from './Signedin';
import SelectedPuppy from './SelectedPuppy';

const UserStatus = ({ isSigninOpen }) => {
    const { user, isAuthenticated } = useAuth0();
    const { setIsPuppyListOpen } = useContext(PuppyContext);

    const localUser = localStorage.getItem('id');
    const localPuppy = localStorage.getItem('pup');

    // Fetch to POST user information to database
    useEffect(() => {
        if (user && user.sub !== localUser) {
            fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then(() => {
                    localStorage.setItem('id', user.sub);
                    setIsPuppyListOpen(true);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            {!isAuthenticated ? (
                <Signin isSigninOpen={isSigninOpen} />
            ) : localPuppy ? (
                <SelectedPuppy
                    isSigninOpen={isSigninOpen}
                    localPuppy={localPuppy}
                />
            ) : (
                <Signedin isSigninOpen={isSigninOpen} />
            )}
        </>
    );
};

export default UserStatus;
