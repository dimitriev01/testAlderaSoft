import React, { useEffect,  useRef, useState } from 'react';
import MyBtn from '../button/MyBtn';
import MyInput from '../input/MyInput';
import MySelect from '../select/MySelect';
import cl from './Task.module.scss'

const Task = ({ task, num, remove, setTasks, setModal}) => {

    const [edit, setEdit] = useState(false)
    const [taskEdit, setTaskEdit] = useState(task)

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
        setTaskEdit({ ...taskEdit, edit: !edit })
        return;
    }

    useEffect(()=>{
        setTasks(taskEdit)
    },[taskEdit,edit])

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
                    Время добавления: {new Date(taskEdit.date).toLocaleDateString()}
                </div>
                <div>
                    Срок выполнения:
                    <MyInput
                        type='date'
                        ref={periodRef}
                        className='task__text__item'
                        disabled
                        value={new Date(taskEdit.period).toLocaleDateString().split('.').reverse().join('-')}
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
                    value={taskEdit.status}
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