import React from 'react';

const VaccineFilter = ({ column }) => {
    const { filterValue, setFilter } = column;

    return (
        <span>
            Search:{' '}
            <input
                value={filterValue || ''}
                onChange={(ev) => setFilter(ev.target.value)}
            ></input>
        </span>
    );
};

export default VaccineFilter;
