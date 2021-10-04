import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const VaccineSearch = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    // Give time betweetn typing and search
    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
    }, 300);

    return (
        <span>
            Search:{' '}
            <input
                value={value || ''}
                onChange={(ev) => {
                    setValue(ev.target.value);
                    onChange(ev.target.value);
                }}
            ></input>
        </span>
    );
};

export default VaccineSearch;
