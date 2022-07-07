import React, {  useState } from 'react';
import MyBtn from '../button/MyBtn';
import MyInput from '../input/MyInput';
import cl from './TaskForm.module.scss'

const TaskForm = ({ createTask }) => {
    const [task, setTask] = useState({ nameTask: '', descriptionTask: '', tagTask: '', period: '', status: 'Новая', edit: false })

    function addTask(e) {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            date: new Date(),
            period: new Date(task.period),
            ...task
        }
        if (task.nameTask && task.descriptionTask && task.tagTask && task.period)
            createTask(newTask)
        else
            alert('Заполните все поля!')

        setTask({ nameTask: '', descriptionTask: '', tagTask: '', period: '' })
    }

    return (
        <form className={cl.form} action="/example/handler.php">
            <MyInput
                required
                autoFocus
                autoComplete='off'
                value={task.nameTask.trim()}
                onChange={e => setTask({ ...task, nameTask: e.target.value })}
                type="text"
                name="nameTask"
                placeholder='Введите название'
            />
            <MyInput
                required
                autoComplete='off'
                value={task.descriptionTask.trim()}
                onChange={e => setTask({ ...task, descriptionTask: e.target.value })}
                type="text"
                name="descriptionTask"
                placeholder='Введите описание'
            />
            <MyInput
                required
                autoComplete='off'
                value={task.tagTask.trim()}
                onChange={e => setTask({ ...task, tagTask: e.target.value })}
                type="text"
                name="tagTask"
                placeholder='Введите тэг'
            />
            <MyInput
                required
                value={task.period.trim()}
                onChange={e => setTask({ ...task, period: e.target.value })}
                type='date'
                name="period"
                placeholder='Введите срок'
            />
            <MyBtn
                type='submit'
                style={{ marginTop: '20px' }}
                onClick={addTask}
            >
                Добавить задачу
            </MyBtn>
        </form>
    );
};

export default TaskForm;