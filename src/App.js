import './App.css';
import React from 'react';
import { CalendarProvider } from './context/calendarContext';

import Calendar from './components/Calendar';

export default function App() {
  
  return (
      <CalendarProvider>
        <div className="App">
          <Calendar/>
        </div>
      </CalendarProvider>
  );

};
