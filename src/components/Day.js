import '../App.css';
import React, { useState, useEffect } from 'react';
import Hour from './Hour';

export default function Day(props) {
    const [hoursOfDay, setHoursOfDay] = useState([]); 

    const tage = [
        'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
    ];

    const createDay = () => {
        const hours = [];

        for (let i = 0; i <= 23; i++) {
            const thisDayHourObj = new Date(`${props.day} ${i}:00:00`);
            const thisDayHour = thisDayHourObj.toString();
            hours.push(thisDayHour);
        };

        setHoursOfDay(hours);
    };

    useEffect(() => {
        createDay();
    }, [props.day]); 

    const displayDate = (day) => {
        const predate = new Date(day).getDate();
        return predate;
    };

    return (
        <div className='Day'>
            <div className='name'>
                {tage[new Date(props.day).getDay()]}
            </div>
            <div className={(props.day === props.todayObj.toDateString()) ? 'today' : 'date'}>
                {displayDate(props.day)}
            </div>
            {hoursOfDay.map((hour, index) => {
                return (
                    <Hour key={index} index={index} hour={hour}/>
                )
            })}
        </div>
    );
};
