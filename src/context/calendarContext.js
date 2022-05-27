import React, { useState, createContext } from 'react';

export const CalendarContext = createContext();

export const CalendarProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            id: "1641373200000",
            name: "Putzen",
            startdate: "Wed Jan 05 2022 10:00:00 GMT+0100 (Central European Standard Time)"
        },
        {
            id: "1641639600000",
            name: "Schlafen",
            startdate: "Sat Jan 08 2022 12:00:00 GMT+0100 (Central European Standard Time)"
        },
        { 
            id: "1641805200000",
            name: "Zeug",
            startdate: "Mon Jan 10 2022 10:00:00 GMT+0100 (Central European Standard Time)"
        },
        {
            id: "1642082400000",
            name: "Einkaufen",
            startdate: "Thu Jan 13 2022 15:00:00 GMT+0100 (Central European Standard Time)"
        },
        {
            id: "1645700400000",
            name: "Schau mal",
            startdate: "Thu Feb 24 2022 12:00:00 GMT+0100 (Central European Standard Time)"
        }
    ]);

    return(
        <CalendarContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </CalendarContext.Provider>
    );

};