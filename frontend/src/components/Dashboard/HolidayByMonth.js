import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone } from '@fortawesome/free-solid-svg-icons';

const HolidayByMonth = ({ value }) => {
    const [fetchedData, setFetchedData] = useState();

    const month = moment(value).format('MMMM').toLowerCase();

    useEffect(() => {
        fetch(`/api/petHoliday/month/${month}`)
            .then((res) => res.json())
            .then((data) => setFetchedData(data.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper>
            <FontAwesomeIcon icon={faBone} className="icon" />
            <h2>
                <small>in </small>
                {month.slice(0, 1).toUpperCase()}
                {month.slice(1)}
            </h2>
            {fetchedData &&
                fetchedData.map((data) => <li key={data}>{data}</li>)}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
    padding: 0 2rem;

    .icon {
        font-size: 1.5rem;
    }

    h2 {
        margin-bottom: 2rem;
    }

    li {
        margin: 0.5rem 0;
        text-align: left;
    }
`;
export default HolidayByMonth;
