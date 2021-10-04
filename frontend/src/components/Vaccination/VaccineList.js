import React, { useState, useEffect } from 'react';

import VaccineTable from './VaccineTable/index';

const VaccineList = ({ setIsVaccineAddOpen }) => {
    const [vaccineData, setVaccineData] = useState([]);

    // Function that will open add vaccine modal
    const handleClick = () => {
        setIsVaccineAddOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Fetch selected puppy's all vaccine list
    useEffect(() => {
        fetch(
            `/api/${localStorage.getItem('id')}/puppy/${localStorage.getItem(
                'pup'
            )}/vaccine`,
            { method: 'GET' }
        )
            .then((res) => res.json())
            // .then((data) => console.log(data.data));
            .then((data) => setVaccineData(data.data));
    }, []);

    return (
        <div>
            <h1>Vaccination</h1>
            <button onClick={handleClick}>Add</button>
            {vaccineData.length > 0 && (
                <VaccineTable vaccineData={vaccineData} />
            )}
        </div>
    );
};

export default VaccineList;
