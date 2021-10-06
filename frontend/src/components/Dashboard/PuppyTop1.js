import React from 'react';
import styled from 'styled-components';

import { PuppyTopWrapper } from '../Styles';
import puppy1 from '../../assets/puppy01.png';
import paw2 from '../../assets/paw2.png';

const PuppyTop1 = () => {
    return (
        <Wrapper>
            <img className="puppy" src={puppy1} alt="puppy01" />
            <div>
                <img className="paw-left" src={paw2} alt="paw-left" />
                <img className="paw-right" src={paw2} alt="paw-right" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(PuppyTopWrapper)`
    img.puppy {
        transform: rotate(135deg);
        width: 110px;
    }

    div {
        img {
            width: 22px;
        }

        img.paw-left {
            position: absolute;
            top: 80px;
            right: 85px;
            z-index: 1;
        }
        img.paw-right {
            position: absolute;
            top: 80px;
            right: 35px;
            z-index: 1;
        }
    }
`;

export default PuppyTop1;
