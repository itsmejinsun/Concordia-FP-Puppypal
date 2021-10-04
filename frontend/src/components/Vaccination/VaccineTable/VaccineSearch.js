import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import styled from 'styled-components';

const VaccineSearch = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    // Give time betweetn typing and search
    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
    }, 300);

    return (
        <Wrapper>
            <span>
                Search
                <input
                    value={value || ''}
                    onChange={(ev) => {
                        setValue(ev.target.value);
                        onChange(ev.target.value);
                    }}
                ></input>
            </span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: end;
    margin-top: 2rem;

    input {
        border: none;
        font-family: inherit;
        padding: 0.2rem;
        margin-left: 0.5rem;
    }
`;

export default VaccineSearch;
