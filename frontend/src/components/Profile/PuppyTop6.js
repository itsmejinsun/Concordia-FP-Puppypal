import React from 'react';
import styled from 'styled-components';

import { PuppyTopWrapper } from '../Styles';
import puppy6 from '../../assets/puppy06.png';
import paw2 from '../../assets/paw2.png';

const PuppyTop6 = () => {
    return (
        <Wrapper>
            <img className="puppy" src={puppy6} alt="puppy06" />
            <div>
                <img className="paw-left" src={paw2} alt="paw-left" />
                <img className="paw-right" src={paw2} alt="paw-right" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(PuppyTopWrapper)`
    img.puppy {
        transform: rotate(-45deg);
    }

    div {
        img {
            width: 20px;
        }

        img.paw-left {
            position: absolute;
            top: 82px;
            right: 70px;
            z-index: 1;
        }
        img.paw-right {
            position: absolute;
            top: 82px;
            right: 25px;
            z-index: 1;
        }
    }
`;

export default PuppyTop6;
