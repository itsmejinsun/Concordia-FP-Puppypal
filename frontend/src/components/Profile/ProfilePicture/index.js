import React, { useContext } from 'react';

import { ModalSubWrapper, ModalWrapper } from '../../Styles';
import { PuppyContext } from '../../PuppyContext';
import ProfilePictureDetail from './ProfilePictureDetail';

const ProfilePicture = () => {
    const { setIsProfilePicOpen } = useContext(PuppyContext);

    return (
        <ModalWrapper>
            <ModalSubWrapper>
                <button
                    className="close"
                    onClick={() => setIsProfilePicOpen(false)}
                >
                    ⨉
                </button>
                <ProfilePictureDetail />
            </ModalSubWrapper>
        </ModalWrapper>
    );
};

export default ProfilePicture;
