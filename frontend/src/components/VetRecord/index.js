import React, { useState } from 'react';

import { Wrapper, SubWrapper } from '../Styles';
import PuppyTop4 from './PuppyTop4';
import VetRecordList from './VetRecordList';
import VetRecordAdd from './VetRecordAdd/index';
import VetRecordEdit from './VetRecordEdit/index';

const VetRecord = () => {
    const [isVetRecordAddOpen, setIsVetRecordAddOpen] = useState(false);
    const [isVetRecordEditOpen, setIsVetRecordEditOpen] = useState(false);

    const [isVetRecordAdded, setIsVetRecordAdded] = useState(false);
    const [isVetRecordEditted, setIsVetRecordEditted] = useState(false);

    const [selectedVetRecord, setSelectedVetRecord] = useState();

    return (
        <Wrapper>
            <PuppyTop4 />
            <SubWrapper>
                <VetRecordList
                    isVetRecordAddOpen={isVetRecordAddOpen}
                    setIsVetRecordAddOpen={setIsVetRecordAddOpen}
                    isVetRecordEditOpen={isVetRecordEditOpen}
                    setIsVetRecordEditOpen={setIsVetRecordEditOpen}
                    setSelectedVetRecord={setSelectedVetRecord}
                    isVetRecordAdded={isVetRecordAdded}
                    isVetRecordEditted={isVetRecordEditted}
                />
                {isVetRecordAddOpen && (
                    <VetRecordAdd
                        setIsVetRecordAddOpen={setIsVetRecordAddOpen}
                        isVetRecordAdded={isVetRecordAdded}
                        setIsVetRecordAdded={setIsVetRecordAdded}
                    />
                )}
                {isVetRecordEditOpen && (
                    <VetRecordEdit
                        setIsVetRecordEditOpen={setIsVetRecordEditOpen}
                        isVetRecordEditted={isVetRecordEditted}
                        setIsVetRecordEditted={setIsVetRecordEditted}
                        selectedVetRecord={selectedVetRecord}
                    />
                )}
            </SubWrapper>
        </Wrapper>
    );
};

export default VetRecord;
