import React, { useEffect, useState, useMemo } from 'react';
import MySelect from '../select/MySelect';
import Task from '../task/Task';
import cl from './ModalTask.module.scss'

const ModalTask = ({visible, setVisible, task, num}) => {

    const [tasksEdit, setTasksEdit] = useState({ ...task })

    function checkColorCircle(){
        return ((Date.parse(task.period) - Date.parse(task.date)) < 259200000);
    }
    
    const rootClasses = [cl['modal-task']]
    if (visible){
       rootClasses.push(cl['modal-task-active'])
    }

    useMemo(() => {
        //localStorage.setItem('tasks', JSON.stringify(tasksEdit))
    }, [tasksEdit.status])

    return (
        <div className={ rootClasses.join(' ')} onClick={()=>{setVisible(false)}}>
            <div className={cl['modal-content']} onClick={e=>{e.stopPropagation()}}>
                <span className={cl.status}>
                    Статус: <div className={[cl.status__circle, checkColorCircle ? cl['status__circle-soon'] : cl['status__circle-late'] ].join(' ')}></div>
                </span>
                <MySelect
                    className='status'
                    value={task.status}
                    onChange={selectedStatus => setTasksEdit({...tasksEdit, status: selectedStatus})}
                    defaultValue='Новая'
                    options={[
                        { value: 'inWork', name: "В работе" },
                        { value: 'done', name: "Завершена" },
                    ]}
                />
                <div className={cl.info}>
                    { localStorage.getItem('tasks') }
                </div>
                
            </div>
        </div>
    );
};

export default ModalTask;