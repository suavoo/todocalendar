import '../App.css';
import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import Day from './Day';
import { CalendarContext } from '../context/calendarContext';


export default function Calendar() {
    const [daysOfThisWeek, setDaysOfThisWeek] = useState([]);
    const [daysOfCurrentWeek, setDaysOfCurrentWeek] = useState([]);
    const [tasks, setTasks] = useContext(CalendarContext);

    const todayObj = new Date();
    const weekDay = todayObj.getDay();

    const todayIndex = (weekDay) => {
        if (weekDay === 0) {
        return weekDay + 6;
        } else {
        return weekDay - 1;
        }
    };

    const  createThisWeek = () => {
        const weekDays = [];
        const daysAfter = 6 - todayIndex(weekDay);
        const daysBefore = todayIndex(weekDay); 
    
        for (let i = 0; i <= daysBefore; i++) {
          let day = todayObj;
          let nextDay = new Date(day);
          nextDay.setDate(nextDay.getDate() - (todayIndex(weekDay) - i));
          const date = nextDay.toDateString();
          weekDays.push(date);
        };
    
        for (let i = 1; i <= daysAfter; i++) {
          let day = todayObj;
          let nextDay = new Date(day);
          nextDay.setDate(nextDay.getDate() + i);
          const date = nextDay.toDateString();
          weekDays.push(date);
        };
    
    
        setDaysOfThisWeek(weekDays);
        setDaysOfCurrentWeek(weekDays);
    };

    const createFollowingWeek = () => {
        const weekDays = [];
        const lastDay = daysOfCurrentWeek[6];
        const lastDayObj = new Date(lastDay);
    
        for (let i = 1; i <= 7; i++) {
          let nextDay = new Date(lastDayObj);
          nextDay.setDate(nextDay.getDate() + i);
          const date = nextDay.toDateString();
          weekDays.push(date);
        };
    
        setDaysOfCurrentWeek(weekDays);
    };

    const createPreviousWeek = () => {
        const weekDays = [];
        const firstDay = daysOfCurrentWeek[0];
        const firstDayObj = new Date(firstDay);
        
        for (let i = 0; i <= 6; i++) {
          let nextDay = new Date(firstDayObj);
          nextDay.setDate(nextDay.getDate() - (7 - i));
          const date = nextDay.toDateString();
          weekDays.push(date);
        };
        setDaysOfCurrentWeek(weekDays);
    };

    useEffect(() => {
        createThisWeek();
    }, []); 

    console.log(tasks);

    return (
        <div>
            <Header monday={daysOfCurrentWeek[0]} />
            <div className='Calendar'>
                <button className='previousWeek' onClick={createPreviousWeek}>vorher</button>
                {daysOfCurrentWeek.map((day, index) => {
                        return (
                            <Day key={index} day={day} todayObj={todayObj}/> 
                        )
                })}
                <button className='nextWeek' onClick={createFollowingWeek}>nacher</button>
            </div>
        </div>
    );
};