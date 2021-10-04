import React from 'react';
import styled from 'styled-components';

import { PuppyTopWrapper } from '../Styles';
import puppy3 from '../../assets/puppy03.png';
import paw1 from '../../assets/paw1.png';

const PuppyTop6 = () => {
    return (
        <Wrapper>
            <img className="puppy" src={puppy3} alt="puppy03" />
            <div>
                <img className="paw-left" src={paw1} alt="paw-left" />
                <img className="paw-right" src={paw1} alt="paw-right" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(PuppyTopWrapper)`
    div {
        img {
            width: 22px;
        }

        img.paw-left {
            position: absolute;
            top: 80px;
            right: 80px;
            z-index: 1;
        }
        img.paw-right {
            position: absolute;
            top: 80px;
            right: 25px;
            z-index: 1;
        }
    }
`;

export default PuppyTop6;
