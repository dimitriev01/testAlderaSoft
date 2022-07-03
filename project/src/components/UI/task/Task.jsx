import React, {  useState } from 'react';
import MyInput from '../input/MyInput';
import cl from './Task.module.scss'

const Task = (props) => {
    const [tools, setTools] = useState({checked: false, edit: false})

    function formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return yy + '.' + mm + '.' + dd + ' ';
    }

    function handleCkeckBox(e) {
        setTools({...tools, checked: e.target.checked})
    }

    return (
        <li className={cl.task}>
            <div className={cl.task__text}>
                Номер задачи: {props.num}
                <div>Название задачи: <MyInput className='task__text__item' disabled value={props.task.nameTask} /> </div>
                <div>Описание задачи: <MyInput className='task__text__item' disabled value={props.task.descriptionTask} /> </div>
                <div>Тег задачи: <MyInput className='task__text__item' disabled value={props.task.tagTask} /> </div>
                <div>
                    Время добавления: {formatDate(new Date(props.task.date))}
                </div>
                <div>
                    Срок выполнения: <MyInput className='task__text__item' disabled value={formatDate(new Date(props.task.period))} />
                </div>
            </div>

            <span onClick={() => props.remove(props.task)} className={cl.task__delete}>X</span>

            <div className={cl.task__tools} >
                <input
                    type='checkbox'
                    name='status'
                    id='status'
                    checked={tools.checked}
                    onChange={handleCkeckBox}
                    className={cl.task__tools__status}
                />
                <i 
                    onClick={() => setTools({...tools, edit: !tools.edit})} 
                    className={['fa-solid', 'fa-pen-to-square', cl.task__tools__edit, tools.edit ? cl['task__tools__edit-active'] : ''].join(' ')}>
                </i>
            </div>

        </li>
    );
};

export default Task;