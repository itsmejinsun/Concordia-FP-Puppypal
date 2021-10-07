import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faHatWizard } from '@fortawesome/free-solid-svg-icons';

const HolidayByDay = ({ value }) => {
    const [fetchedData, setFetchedData] = useState();

    const day = moment(value).format('MM-DD');

    useEffect(() => {
        fetch(`/api/petHoliday/day/${day}`)
            .then((res) => res.json())
            .then((data) => setFetchedData(data.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper>
            <FontAwesomeIcon icon={faPaw} className="icon" />
            <h2>
                <small>on </small>
                {moment(value).format('MMMM Do')}
            </h2>

            {fetchedData && fetchedData.length > 0 ? (
                fetchedData.map((data) => <li key={data}>{data}</li>)
            ) : (
                <>
                    <p>No holiday(event)</p>
                    <div>
                        <FontAwesomeIcon icon={faHatWizard} className="icon" />
                        <p>It is another great day</p>
                        <p>to play with your puppy</p>
                    </div>
                </>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
    padding: 0 2rem;

    .icon {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
    }

    h2 {
        margin-bottom: 2rem;
    }

    li {
        margin: 0.5rem 0;
        text-align: left;
    }

    div {
        background-color: var(--input-color-primary);
        border-radius: 10px;
        padding: 1rem 1.5rem;
        margin-top: 1rem;

        p {
            margin: 0.5rem 0;
        }
    }
`;
export default HolidayByDay;
