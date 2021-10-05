import React from 'react';
import styled from 'styled-components';

import { PuppyTopWrapper } from '../Styles';
import puppy5 from '../../assets/puppy05.png';
import paw1 from '../../assets/paw1.png';
import paw2 from '../../assets/paw2.png';

const PuppyTop5 = () => {
    return (
        <Wrapper>
            <img className="puppy" src={puppy5} alt="puppy05" />
            <div>
                <img className="paw-left" src={paw1} alt="paw-left" />
                <img className="paw-right" src={paw2} alt="paw-right" />
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
            right: 15px;
            z-index: 1;
        }
    }
`;

export default PuppyTop5;
