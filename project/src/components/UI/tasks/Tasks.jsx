import React from 'react';
import Task from '../task/Task';
import cl from './Tasks.module.scss'

const Tasks = ({ tasks, remove, status, setStatus, setModal, setTasks }) => {
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
                    tasks.map((task, i) =>
                        <Task
                            tasks={tasks}
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