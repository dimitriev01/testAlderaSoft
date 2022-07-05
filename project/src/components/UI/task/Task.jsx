import React, { useMemo, useRef, useState } from 'react';
import MyBtn from '../button/MyBtn';
import MyInput from '../input/MyInput';
import MySelect from '../select/MySelect';
import cl from './Task.module.scss'
import ModalTask from '../ModalTask/ModalTask';

const Task = ({ task, num, remove, setTasks,  setModal, tasks }) => {

    const [edit, setEdit] = useState(false)
    const [tasksEdit, setTasksEdit] = useState({ ...task })

    function formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10)
            yy = '200' + yy;
        else
            yy = '20' + yy;

        return yy + '-' + mm + '-' + dd;
    }

    const nameTaskRef = useRef();
    const descriptionTaskRef = useRef();
    const tagTaskRef = useRef();
    const periodRef = useRef();
    const inputsRefs = [nameTaskRef, descriptionTaskRef, tagTaskRef, periodRef];

    function giveEdit() {
        setEdit(!edit)
        inputsRefs.map((input) => {
            input.current.disabled = edit;
        })
    }

    useMemo(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasksEdit))
        setTasksEdit(tasksEdit)
    },[tasksEdit])

    return (
        <li className={cl.task}>
            <div className={cl.task__text}>
                Номер задачи: {num}
                <div>Название задачи:
                    <MyInput
                        ref={nameTaskRef}
                        className='task__text__item'
                        disabled
                        value={tasksEdit.nameTask}
                        onChange={e => setTasksEdit({ ...tasksEdit, nameTask: e.target.value })}
                    />
                </div>
                <div>Описание задачи:
                    <MyInput
                        ref={descriptionTaskRef}
                        className='task__text__item'
                        disabled
                        value={tasksEdit.descriptionTask}
                        onChange={e => setTasksEdit({ ...tasksEdit, descriptionTask: e.target.value })}
                    />
                </div>
                <div>Тег задачи:
                    <MyInput
                        ref={tagTaskRef}
                        className='task__text__item'
                        disabled
                        value={tasksEdit.tagTask}
                        onChange={e => setTasksEdit({ ...tasksEdit, tagTask: e.target.value })}
                    />
                </div>
                <div>
                    Время добавления: {formatDate(new Date(task.date)).split('-').reverse().join('.')}
                </div>
                <div>
                    Срок выполнения:
                    <MyInput
                        type='date'
                        ref={periodRef}
                        className='task__text__item'
                        disabled
                        value={formatDate(new Date(tasksEdit.period))}
                        onChange={e => setTasksEdit({ ...tasksEdit, period: e.target.value })}
                    />
                </div>
            </div>

            <span onClick={() => remove(task)} className={cl.task__delete}>X</span>

            <div className={cl.task__tools}>
                <MySelect
                    value={task.status}
                    onChange={selectedStatus => setTasksEdit({...tasksEdit, status: selectedStatus})}
                    disabled
                    defaultValue='Новая'
                    options={[
                        { value: 'inWork', name: "В работе" },
                        { value: 'done', name: "Завершена" },
                    ]}
                />
                <i
                    onClick={giveEdit}
                    className={['fa-solid', 'fa-pen-to-square', cl.task__tools__edit, edit ? cl['task__tools__edit-active'] : ''].join(' ')}>
                </i>
                <MyBtn
                    onClick={() => { setModal(true); }}
                >
                    Открыть
                </MyBtn>
            </div>

        </li>
    );
};

export default Task;