import React, { useRef, useState } from 'react';
import MyBtn from '../button/MyBtn';
import MyInput from '../input/MyInput';
import cl from './TaskForm.module.scss'

const TaskForm = ({ createTask }) => {
    const [task, setTask] = useState({ nameTask: '', descriptionTask: '', tagTask: '', period: '', status: false })

    function addTask(e) {
        e.preventDefault();
        const newTask = {
            date: Date.now(),
            id: Date.now(),
            ...task
        }
        if (task.nameTask && task.descriptionTask && task.tagTask && task.period)
            createTask(newTask)
        else
            alert('Заполните все поля!')

        setTask({ nameTask: '', descriptionTask: '', tagTask: '', period: '' })
    }

    function formSubmitHandler (e) {
        // try {
        //     localStorage.setItem('nameTask', task.nameTask);
        //     localStorage.setItem('descriptionTask', task.descriptionTask);
        //     localStorage.setItem('tagTask', task.tagTask);
        //     localStorage.setItem('period', task.period);
        // } catch (error) {
        //     console.log(error)
        // }
        console.log('f');
    }
    

    const nameTaskRef = useRef();
    const descriptionTaskRef = useRef();
    const tagTaskRef = useRef();
    const periodRef = useRef();

    return (
        <form className={cl.form} onSubmit={formSubmitHandler}>
            <MyInput
                autoComplete='off'
                ref={nameTaskRef}
                value={task.nameTask}
                onChange={e => setTask({ ...task, nameTask: e.target.value })}
                type="text"
                name="nameTask"
                placeholder='Введите название'
            />
            <MyInput
                autoComplete='off'
                ref={descriptionTaskRef}
                value={task.descriptionTask}
                onChange={e => setTask({ ...task, descriptionTask: e.target.value })}
                type="text"
                name="descriptionTask"
                placeholder='Введите описание'
            />
            <MyInput
                autoComplete='off'
                ref={tagTaskRef}
                value={task.tagTask}
                onChange={e => setTask({ ...task, tagTask: e.target.value })}
                type="text"
                name="tagTask"
                placeholder='Введите тэг'
            />
            <MyInput
                ref={periodRef}
                value={task.period}
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