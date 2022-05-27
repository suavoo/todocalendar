import '../App.css';
import React, { useContext, useState } from 'react';
import { CalendarContext } from '../context/calendarContext';
import DatePicker from './Datepicker';

export default function Task(props) {
    const [tasks, setTasks] = useContext(CalendarContext);
    const [taskdate, setTaskdate] = useState(props.hour);
    const [newTaskname, setNewtaskname] = useState(props.task ? props.task.name : '');

    const changeDate = (value) => {
        setTaskdate(value.toString());
    };

    const changeTaskname = (event) => {
        setNewtaskname(event.target.value);
    };

    const changeTasks = () => {
        if (props.task) {
            const newTasks = [...tasks];
            newTasks.map(t => {
                if (t.id === props.task.id) {
                    t.startdate = taskdate; 
                    t.name = newTaskname;
                }
            })
            setTasks(newTasks); 
            props.hide();
        } else if (newTaskname === '') {
            alert('Bitte geben Sie Ihrem Eintrag einen Namen');
        } else {
            const newTasks = [...tasks];
            newTasks.push({
                id: Date.parse(taskdate).toString(),
                name: newTaskname,
                startdate: taskdate
            })
            setTasks(newTasks); 
            props.hide();
        }
    };

    const deleteTask = () => {
        const newTasks = [...tasks];
        setTasks(newTasks.filter(t => t.id !== props.task.id)); 
        props.hide();
        console.log(newTasks.filter(t => t.id !== props.task.id));
    };

    console.log(taskdate);
    console.log(newTaskname);
    console.log(tasks);

    return(
        <div className='Calendar'>
            <div className='taskform'>
                <h1>Task</h1>
                <input 
                    type='text' 
                    name='taskname' 
                    required
                    placeholder='Aufgabe' 
                    defaultValue={(props.task ? props.task.name : '')} 
                    onChange={changeTaskname}
                />
                <DatePicker startdate={props.task ? props.task.startdate : props.hour} index={props.index} changeDate={changeDate}/> 
                
                {props.task ? <button className='deletebutton' onClick={deleteTask}>Task löschen</button> : null} 
                <button onClick={changeTasks}>Speichern</button>   
            </div>
        </div>
    );
};


