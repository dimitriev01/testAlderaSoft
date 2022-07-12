import React, {  useState } from 'react';
import Button from '../Button/Button';
import MyInput from '../Input/Input';
import cl from './TaskForm.module.scss'

const TaskForm = ({ createTask }) => {
    const [task, setTask] = useState({ nameTask: '', descriptionTask: '', tagTask: '', period: '', status: 'Новая', edit: false })

    function addTask(e) {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            date: new Date(),
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
                className='form-input'
            />
            <MyInput
                required
                autoComplete='off'
                value={task.descriptionTask.trim()}
                onChange={e => setTask({ ...task, descriptionTask: e.target.value })}
                type="text"
                name="descriptionTask"
                placeholder='Введите описание'
                className='form-input'
            />
            <MyInput
                required
                autoComplete='off'
                value={task.tagTask.trim()}
                onChange={e => setTask({ ...task, tagTask: e.target.value })}
                type="text"
                name="tagTask"
                placeholder='Введите тэг'
                className='form-input'
            />
            <MyInput
                required
                value={task.period.trim()}
                onChange={e => setTask({ ...task, period: e.target.value })}
                type='date'
                name="period"
                placeholder='Введите срок'
                className='form-input'
            />
            <Button
                type='submit'
                onClick={addTask}
            >
                Добавить задачу
            </Button>
        </form>
    );
};

export default TaskForm;