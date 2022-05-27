import '../App.css';
import React, { useContext, useEffect, useState } from 'react';
import { CalendarContext } from '../context/calendarContext';
import Modal from "./Modal";
import useModal from '../hooks/useModal';

export default function Hour(props) {
    const [tasks, setTasks] = useContext(CalendarContext);
    const [taskdates, setTaskdates] = useState([]);
    const {isShowing, showModal, hideModal} = useModal();
    
    const times = [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
    ];

    const setStartdates = () => {
        let taskdates = [];
        tasks.forEach(task => {
            taskdates.push(task.startdate);
        });
        setTaskdates(taskdates);
    };

    useEffect(() => {
        setStartdates();
    }, [tasks]); 

    const checkTasks = (hour) => {
        if (taskdates.includes(hour)) {
            return true;
        } else {
            return false;
        };
    };

    const getTask = (hour) => {
        const task = tasks.filter(t => t.startdate === hour);
        return task[0];
    };

    return (
        <div>
            {(checkTasks(props.hour) ? 
                <div className='task' hour={props.hour} onClick={showModal}>
                    {`${times[props.index]} ${(getTask(props.hour) ? getTask(props.hour).name : null)}`}
                </div>
                :
                <div className='hours' hour={props.hour} onClick={showModal}>
                    {times[props.index]}
                </div>
            )}
            <Modal
                isShowing={isShowing}
                hide={hideModal}
                hour={props.hour}
                task={getTask(props.hour)}
                index={props.index}
            />
        </div>
    );
};


