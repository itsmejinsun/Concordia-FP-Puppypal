import React from 'react';
import styled from 'styled-components';

import { PuppyTopWrapper } from '../Styles';
import puppy4 from '../../assets/puppy04.png';
import paw1 from '../../assets/paw1.png';

const PuppyTop4 = () => {
    return (
        <Wrapper>
            <img className="puppy" src={puppy4} alt="puppy04" />
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
            right: 70px;
            z-index: 1;
        }
        img.paw-right {
            position: absolute;
            top: 80px;
            right: 45px;
            z-index: 1;
        }
    }
`;

export default PuppyTop4;
