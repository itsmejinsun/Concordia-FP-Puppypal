import React from 'react';
import styled from 'styled-components';

import { PuppyTopWrapper } from '../Styles';
import puppy6 from '../../assets/puppy06.png';
import paw2 from '../../assets/paw2.png';

const PuppyTop6 = () => {
    return (
        <PuppyTopWrapper>
            <img className="puppy" src={puppy6} alt="puppy06" />
            <div>
                <img className="paw-left" src={paw2} alt="paw01" />
                <img className="paw-right" src={paw2} alt="paw01" />
            </div>
        </PuppyTopWrapper>
    );
};

export default PuppyTop6;
