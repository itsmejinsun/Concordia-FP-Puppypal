import React, { useContext } from 'react';

import { DividedModalWrapper, DividedModalSubWrapper } from '../../Styles';
import { PuppyContext } from '../../PuppyContext';

const DeleteModal = () => {
    const { setIsDeleteClick, handleDeletePuppy } = useContext(PuppyContext);

    return (
        <DividedModalWrapper>
            <DividedModalSubWrapper>
                <button
                    className="close"
                    onClick={() => setIsDeleteClick(false)}
                >
                    ⨉
                </button>
                <div>
                    <p>Do you want to remove?</p>
                    <button onClick={() => handleDeletePuppy()}>Remove</button>
                </div>
            </DividedModalSubWrapper>
        </DividedModalWrapper>
    );
};

export default DeleteModal;
