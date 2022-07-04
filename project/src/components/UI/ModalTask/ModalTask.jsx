import React, { useEffect } from 'react';
import Task from '../task/Task';
import cl from './ModalTask.module.scss'

const ModalTask = ({visible, setVisible, tasks}) => {

    function checkColorCircle(){
        tasks.map((task)=>{
            return ((task.period - task.date) < 259200000 || task.status === 'Новая');
        })
    }

    const rootClasses = [cl['modal-task']]
    if (visible){
       rootClasses.push(cl['modal-task-active'])
    }

    return (
        <div className={ rootClasses.join(' ')}>
            <div className={cl['modal-content']}>
                <span className={cl.status}>
                    Статус: <div className={[cl.status__circle, checkColorCircle() ? cl['status__circle-soon'] : cl['status__circle-late'] ].join(' ')}></div>
                </span>
                <div className={cl.info}>
                    {localStorage.getItem('tasks')}
                </div>
                
            </div>
        </div>
    );
};

export default ModalTask;