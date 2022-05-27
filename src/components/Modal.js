import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import '../Modal.css';
import { CalendarContext } from '../context/calendarContext';
import Task from './Task';

const Modal = ({ isShowing, hide, hour, task, index }) => {
    const [tasks, setTasks] = useContext(CalendarContext);

    const changeStart = (id, value) => {
        const newTasks = [...tasks];
        newTasks.map(t => {
            if (t.id === id) {
                t.startdate = value.toString(); 
            }
        })
        setTasks(newTasks);
    };

    return(
        (isShowing ? ReactDOM.createPortal(
            <React.Fragment>
              <div className="modal-overlay"/>
              <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal">
                  <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <Task task={task ? task : null} hour={hour} hide={hide}  index={index}/>
                </div>
              </div>
            </React.Fragment>, document.body
          ) : null)
    );
};


export default Modal;