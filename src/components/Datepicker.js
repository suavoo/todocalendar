import '../Datepicker.css';
import React, { useState, useEffect } from 'react';

export default function DatePicker(props) {
    const [datesOfCurrentMonth, setDatesOfCurrentMonth] = useState([]);
    const [daysOfCurrentMonth, setDaysOfCurrentMonth] = useState([]);
    const [firstOfCurrentMonth, setFirstOfCurrentMonth] = useState();
    const [value, setValue] = useState(new Date(props.startdate)); 
    const [visible, setVisible] = useState(false); 
    
    const germanMonths = [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];

    const hourLabels = [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
    ];

    const todayObj = new Date(); 
    const todayOfMonth = value.getDate();

    // creates array of dates for this month, which will then be rendered 
    const createThisMonth = () => {
        const dates = [];
        const days = [];
        let lastDayOfMonth = new Date(value.getFullYear(), value.getMonth()+1, 0);
        let daysUntilEndOfMonth = lastDayOfMonth.getDate() - value.getDate();
        let lastWeekday = lastDayOfMonth.getDay();
        let daysLeftInWeek = 7 - lastWeekday;
        let firstDayOfMonth = new Date(value.getFullYear(), value.getMonth(), 1);
        let daysBefore = firstDayOfMonth.getDay();

        // get days from today until first of month
        for (let i = 1; i <= todayOfMonth; i++) {
            let day = value;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() - (todayOfMonth - i));
            dates.push(nextDay);
        };

        // get days from today until end of month
        for (let i = 1; i <= daysUntilEndOfMonth; i++) {
            let day = value;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() + i);
            dates.push(nextDay);
        };

        // get days from last day of the month until sunday
        for (let i = 1; i <= daysLeftInWeek; i++) {
            let day = lastDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() + i);
            dates.push(nextDay);
        };

        // get days from first day of the month until monday before
        for (let i = 1; i < daysBefore; i++) {
            let day = firstDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() - i);
            dates.unshift(nextDay);
        };

        // get sixth week for consistent render
        if (dates.length === 35) {
            for (let i = 1; i <= 7; i++) {
                let day = dates[34];
                let nextDay = new Date(day);
                nextDay.setDate(nextDay.getDate() + i);
                dates.push(nextDay);
            };
        };

        dates.map(d => {
            days.push(d.getDate());
        });

        setDatesOfCurrentMonth(dates);
        setDaysOfCurrentMonth(days);
        setFirstOfCurrentMonth(firstDayOfMonth);
    };
    
    useEffect(() => {
        createThisMonth();
        setValue(new Date(props.startdate));   
    }, [props.startdate]); 

    // creates the array for the following month and sets it to bes rendered
    const createNextMonth = () => {
        const dates = [];
        const days = [];
        let firstDayOfMonth = new Date(firstOfCurrentMonth.getFullYear(), firstOfCurrentMonth.getMonth()+1, 1);
        let lastDayOfMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth()+1, 0);
        let daysInMonth = lastDayOfMonth.getDate();
        let lastWeekday = lastDayOfMonth.getDay();
        let daysBefore = firstDayOfMonth.getDay();
        let daysLeftInWeek = 7 - lastWeekday;

        // get days of the month
        for (let i = 0; i < daysInMonth; i++) {
            let day = firstDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() + i);
            dates.push(nextDay);
        };

        // get days from last day of the month until sunday
        for (let i = 1; i <= daysLeftInWeek; i++) {
            let day = lastDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() + i);
            dates.push(nextDay);
        };

        // get days from first day of the month until monday before
        for (let i = 1; i < daysBefore; i++) {
            let day = firstDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() - i);
            dates.unshift(nextDay);
        };

        // get sixth week for consistent render
        if (dates.length === 35) {
            for (let i = 1; i <= 7; i++) {
                let day = dates[34];
                let nextDay = new Date(day);
                nextDay.setDate(nextDay.getDate() + i);
                dates.push(nextDay);
            };
        };

        dates.map(d => {
            days.push(d.getDate());
        });

        setDatesOfCurrentMonth(dates);
        setDaysOfCurrentMonth(days);
        setFirstOfCurrentMonth(firstDayOfMonth);
    };

    // creates the array for the previous month and sets it to be rendered
    const createPreviousMonth = () => {
        const dates = [];
        const days = [];
        let lastDayOfMonth = new Date(firstOfCurrentMonth.getFullYear(), firstOfCurrentMonth.getMonth(), 0);
        let daysInMonth = lastDayOfMonth.getDate();
        let firstDayOfMonth = new Date(lastDayOfMonth.getFullYear(), lastDayOfMonth.getMonth(), 1);
        let lastWeekday = lastDayOfMonth.getDay();
        let daysBefore = firstDayOfMonth.getDay();
        let daysLeftInWeek = 7 - lastWeekday;

        // get days of the month
        for (let i = 0; i < daysInMonth; i++) {
            let day = lastDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() - i);
            dates.unshift(nextDay);
        };

        // get days from last day of the month until sunday
        for (let i = 1; i <= daysLeftInWeek; i++) {
            let day = lastDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() + i);
            dates.push(nextDay);
        };

        // get days from first day of the month until monday before
        for (let i = 1; i < daysBefore; i++) {
            let day = firstDayOfMonth;
            let nextDay = new Date(day);
            nextDay.setDate(nextDay.getDate() - i);
            dates.unshift(nextDay);
        };

        // get sixth week for consistent render
        if (dates.length === 35) {
            for (let i = 1; i <= 7; i++) {
                let day = dates[34];
                let nextDay = new Date(day);
                nextDay.setDate(nextDay.getDate() + i);
                dates.push(nextDay);
            };
        };

        dates.map(d => {
            days.push(d.getDate());
        });

        setDatesOfCurrentMonth(dates);
        setDaysOfCurrentMonth(days);
        setFirstOfCurrentMonth(firstDayOfMonth);
    };

    const togglePicker = () => {
        setVisible(!visible);
    };

    // matches the current month rendered with the months name in german to be displayed in the title
    const getMonat = () => {
        if (firstOfCurrentMonth) {
            return germanMonths[firstOfCurrentMonth.getMonth()];
        }
    };

    // get the current year to be displayed in the title
    const getJahr = () => {
        if (firstOfCurrentMonth) {
            return firstOfCurrentMonth.getFullYear();
        } 
    };

    // changes the value to the date clicked at default time of 10 am
    const selectDate = (index) => { 
        const preDate = datesOfCurrentMonth[index];
        const datestring = preDate.toDateString(); 
        const newdate = new Date(`${datestring} 10:00:00 GMT+0100 (Central European Standard Time)`);
        setValue(newdate); 
        props.changeDate(newdate);
        setVisible(false);
    };

    // sets the class of the date so that today will be displayed in blue, and the value in lightblue
    const pickClass = (index) => {
        let dayIndex = datesOfCurrentMonth.findIndex(function(i) { return i.toDateString() === value.toDateString() });
        let todayIndex = datesOfCurrentMonth.findIndex(function(i) { return i.toDateString() === todayObj.toDateString() });
        if (index === dayIndex) {
            return 'datepicksactive'
        } else if (index === todayIndex) {
            return 'datepickstoday'
        } else {
            return 'datepicks'
        }
          
    };

    // changes the time of the value from it's default 10am to whatever is selected
    const selectTime = (e) => {
        const preDate = value;
        const datestring = value.toDateString();
        const newdate = new Date(`${datestring} ${e.target.value}:00 GMT+0100 (Central European Standard Time)`);
        setValue(newdate); 
        props.changeDate(newdate);
    };

    return(
        <div>
            <div className='inputcontainer'>
                <input type={'text'} className='dateinput' readOnly value={(value ? value.toDateString() : '')} onClick={togglePicker}></input>
                <select name='Uhrzeit' className='timeinput' id='time' defaultValue={hourLabels[props.index]} onChange={selectTime}>
                    {hourLabels.map((hour, index) => {
                        return <option key={index} index={index}>{hour}</option>
                    })}
                </select>
            </div>
            <div className={visible ? 'Pickercontainer' : 'Nocontainer'}>
                <button className='pickerbutton' onClick={createPreviousMonth} >back</button>
                <div className='Pickersubcontainer'>
                    <div className='pickertitle'>{`${getMonat()} ${getJahr()}`}</div>
                    <div className='Pickerdaysdiv'>
                        <div className='pickerdays'>Mo</div>
                        <div className='pickerdays'>Di</div>
                        <div className='pickerdays'>Mi</div>
                        <div className='pickerdays'>Do</div>
                        <div className='pickerdays'>Fr</div>
                        <div className='pickerdays'>Sa</div>
                        <div className='pickerdays'>So</div>  
                    </div>
                    <div className='Datepicker'>
                        {daysOfCurrentMonth.map((day, index) => {
                            return(
                                <div className={pickClass(index)} key={index} id={index} index={index} onClick={() => selectDate(index)} >{day}</div>
                            )
                        })}
                    </div>
                </div>
                <button className='pickerbutton' onClick={createNextMonth}>next</button>
            </div>
        </div>
    );
};