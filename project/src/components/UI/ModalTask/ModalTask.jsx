import React, {  useState, useMemo } from 'react';
import MySelect from '../select/MySelect';
import cl from './ModalTask.module.scss'

const ModalTask = ({visible, setVisible, setTasks, tasks}) => {

    const [taskModal, setTaskModal] = useState(tasks)

    function checkColorCircle(){
        return ((Date.parse(taskModal.period) - Date.parse(taskModal.date)) < 259200000);
    }
    
    const rootClasses = [cl['modal-task']]
    if (visible){
       rootClasses.push(cl['modal-task-active'])
    }

    return (
        <div className={ rootClasses.join(' ')} onClick={()=>{setVisible(false)}}>
            <div className={cl['modal-content']} onClick={e=>{e.stopPropagation()}}>
                <span className={cl.status}>
                    Статус: <div className={[cl.status__circle, checkColorCircle ? cl['status__circle-soon'] : cl['status__circle-late'] ].join(' ')}></div>
                </span>
                <MySelect
                    className='status'
                    value={taskModal.status}
                    onChange={selectedStatus => setTaskModal({...taskModal, status: selectedStatus})}
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