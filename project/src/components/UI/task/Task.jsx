import React from 'react';
import cl from './Task.module.scss'

const Task = (props) => {
    return (
        <li className={cl.tasks__elem}>
            <div className={cl.tasks__elem__text}>
                <div>Номер задачи: {props.num}</div>
                <div>Название задачи: {props.task.nameTask}</div>
                <div>Описание задачи: {props.task.descriptionTask}</div>
                <div>Тег задачи: {props.task.tagTask}</div>
            </div>
            <div className={cl.tasks__elem__icons}>
                <i onClick={() => console.log('detele task')} className={['fa-solid', 'fa-ban' , cl.tasks__icon].join(' ')}></i>
                <i onClick={() => console.log('edit task')} className={['fa-solid', 'fa-pen-to-square' , cl.tasks__icon].join(' ')}></i>
            </div>
        </li>
    );
};

export default Task;