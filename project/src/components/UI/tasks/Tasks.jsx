import React from 'react';
import Task from '../task/Task';
import cl from './Tasks.module.scss'

const Tasks = ({ tasks, remove }) => {
    if (!tasks.length){
        return(
            <div className={cl['check-empty']}>
                Нет задач!
            </div>
        )
    }

    return (
        <>
            <div className={cl.title}>
                Ваши задачи:
            </div>
            <div className={cl.tasks}>
                {
                    tasks.map((task, i) =>
                        <Task remove={remove} num={i + 1} key={task.id} task={task} />
                    )}
            </div>
        </>
    );
};

export default Tasks;