import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';

const CalendarSec = ({ value, setValue }) => {
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        fetch('/api/petHoliday/day')
            .then((res) => res.json())
            .then((data) => setFetchedData(Object.keys(data.data)));
    }, []);

    return (
        <>
            <Calendar
                style={{ height: 500 }}
                value={value}
                onClickDay={(date) => setValue(date)}
                onClickMonth={(date) => setValue(date)}
                tileClassName={({ date, view }) => {
                    if (
                        fetchedData &&
                        fetchedData.find(
                            (x) => x === moment(date).format('MM-DD')
                        )
                    ) {
                        return 'highlight';
                    }
                }}
            ></Calendar>
        </>
    );
};

export default CalendarSec;
