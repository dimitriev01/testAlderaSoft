import React from 'react';
import cl from './Task.module.scss'

const Task = (props) => {

    function formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return yy + '.' + mm + '.' + dd + ' ';
    }

    return (
        <li className={cl.task}>
            <div className={cl.task__text}>
                <div>Номер задачи: {props.num}</div>
                <div>Название задачи: {props.task.nameTask}</div>
                <div>Описание задачи: {props.task.descriptionTask}</div>
                <div>Тег задачи: {props.task.tagTask}</div>
                <div>
                    Время добавления: {formatDate(new Date(props.task.date))}
                </div>
                <div>
                    Срок выполнения: {formatDate(new Date(props.task.period))}
                </div>
            </div>
            
            <span onClick={() => props.remove(props.task)} className={cl.task__delete}>X</span>

            <input type='checkbox' name='status' id='status' value={props.task.status} onChange={() => props.task.status} className={cl.task__status}/>
            <label htmlFor="status"></label>
            
            <i onClick={() => console.log('edit task')} className={['fa-solid', 'fa-pen-to-square', cl.task__edit].join(' ')}></i>
        </li>
    );
};

export default Task;