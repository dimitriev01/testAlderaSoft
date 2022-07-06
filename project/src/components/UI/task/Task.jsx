import React, { useEffect, useMemo, useRef, useState } from 'react';
import MyBtn from '../button/MyBtn';
import MyInput from '../input/MyInput';
import MySelect from '../select/MySelect';
import cl from './Task.module.scss'
import ModalTask from '../ModalTask/ModalTask';

const Task = ({ task, num, remove, setTasks, setModal, tasks }) => {

    const [edit, setEdit] = useState(false)
    const [taskEdit, setTaskEdit] = useState({ ...task })

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
        // setTasks({taskEdit})
        setTaskEdit(taskEdit, { ...task})
        // localStorage.setItem('tasks', JSON.stringify({...taskEdit}))
    },[taskEdit])

    return (
        <li className={cl.task}>
            <div className={cl.task__text}>
                Номер задачи: {num}
                <div>Название задачи:
                    <MyInput
                        ref={nameTaskRef}
                        className='task__text__item'
                        disabled
                        value={taskEdit.nameTask}
                        // onChange={e => setTasks({ ...taskEdit, nameTask: e.target.value })}
                        onChange={e => setTaskEdit({ ...taskEdit, nameTask: e.target.value })}
                    />
                </div>
                <div>Описание задачи:
                    <MyInput
                        ref={descriptionTaskRef}
                        className='task__text__item'
                        disabled
                        value={taskEdit.descriptionTask}
                        onChange={e => setTaskEdit({ ...taskEdit, descriptionTask: e.target.value })}
                    />
                </div>
                <div>Тег задачи:
                    <MyInput
                        ref={tagTaskRef}
                        className='task__text__item'
                        disabled
                        value={taskEdit.tagTask}
                        onChange={e => setTaskEdit({ ...taskEdit, tagTask: e.target.value })}
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
                        value={formatDate(new Date(taskEdit.period))}
                        onChange={e => setTaskEdit({ ...taskEdit, period: e.target.value })}
                    />
                </div>
            </div>

            <span 
            onClick={() => remove(task)} 
            className={cl.task__delete}>
                X
            </span>

            <div className={cl.task__tools}>
                <MySelect
                    value={task.status}
                    onChange={selectedStatus => setTaskEdit({...taskEdit, status: selectedStatus})}
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