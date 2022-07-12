import React from 'react';
import Task from '../Task/Task';
import cl from './Tasks.module.scss'

const Tasks = ({/*setTagAndStatus, tagAndStatus,*/ tasks, remove, setModal, setTasks }) => {

    if (!tasks.length) {
        return (
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
            <ul className={cl.tasks}>
                {
                   tasks && tasks.map((task, i) =>
                        <Task
                            /*setTagAndStatus={setTagAndStatus}
                            tagAndStatus={tagAndStatus}*/
                            setModal={setModal}
                            setTasks={setTasks}
                            remove={remove}
                            num={i + 1}
                            key={task.id}
                            task={task}
                        />
                    )}
            </ul>
        </>
    );
};

export default Tasks;