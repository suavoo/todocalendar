import '../App.css';
import React from 'react';

export default function Header(props) {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

    const displayMonth = () => {
        const index = new Date(props.monday).getMonth();
        return months[index];
    };

    const displayYear = () => {
        const predate = new Date(props.monday).getUTCFullYear();
        return predate;
    };

    return (
        <div className='Header'>
            <h4>ToDoKalender</h4>
            <h3>{`${displayMonth()} ${displayYear()}`}</h3>
            <button className='logoutbutton'>Logout</button>
        </div>
    );
};