import React, { useState } from 'react';

import { ModalWrapper } from '../Styles';
import SelectPuppy from './SelectPuppy';
import AddPuppy from './AddPuppy';

const PuppyList = () => {
    const [isAddPuppyOpen, setIsAddPuppyOpen] = useState(false);

    return (
        <ModalWrapper>
            <SelectPuppy
                isAddPuppyOpen={isAddPuppyOpen}
                setIsAddPuppyOpen={setIsAddPuppyOpen}
            />
            {isAddPuppyOpen ? (
                <AddPuppy setIsAddPuppyOpen={setIsAddPuppyOpen} />
            ) : null}
        </ModalWrapper>
    );
};

export default PuppyList;
