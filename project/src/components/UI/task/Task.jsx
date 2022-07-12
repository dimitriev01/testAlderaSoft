import React, { useEffect,  useRef, useState } from 'react';
import Button from '../Button/Button';
import MyInput from '../Input/Input';
import MySelect from '../Select/Select';
import cl from './Task.module.scss'

const Task = ({/*setTagAndStatus, tagAndStatus,*/ task, num, remove, setTasks, setModal}) => {

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
            return input.current.disabled = edit;
        })
        setTaskEdit({ ...taskEdit, edit: !edit })
    }

    useEffect(()=>{
        setTasks(taskEdit)
    },[taskEdit,edit])

    const [tagAndStatus, setTagAndStatus] = useState({tagTask:'', status:''})

    return (
        <li className={cl.task}>
            <div className={cl.task__text}>
                Номер задачи: {num}
                <div>Название задачи:
                    <MyInput
                        placeholder='Введите название'
                        ref={nameTaskRef}
                        className='task__text__item'
                        disabled
                        value={taskEdit.nameTask}
                        onChange={e => setTaskEdit({ ...taskEdit, nameTask: e.target.value })}
                    />
                </div>
                <div>Описание задачи:
                    <MyInput
                        placeholder='Введите описание'
                        ref={descriptionTaskRef}
                        className='task__text__item'
                        disabled
                        value={taskEdit.descriptionTask}
                        onChange={e => setTaskEdit({ ...taskEdit, descriptionTask: e.target.value })}
                    />
                </div>
                <div>Тег задачи:
                    <MyInput
                        placeholder='Введите тег'
                        ref={tagTaskRef}
                        className='task__text__item'
                        disabled
                        value={taskEdit.tagTask}
                        onChange={e => setTaskEdit({ ...taskEdit, tagTask: e.target.value })}
                    />
                    {/* <div>
                        <MySelect
                            disabled
                            ref={tagTaskRef}
                            className='task__text__item'
                            name='tag'
                            value={tagAndStatus.tagTask}
                            onChange={selectedTag => setTagAndStatus({...tagAndStatus, tagTask: selectedTag})}
                            defaultValue='Тег'
                            options={[
                                { value: 'family', name: "Семья" },
                                { value: 'work', name: "Работа" },
                                { value: 'personal', name: "Личное" },
                                { value: 'other', name: "Другое" },
                            ]}
                        />
                    </div> */}
                    
                </div>
                <div>
                    Время добавления: {new Date(taskEdit.date).toLocaleDateString()}
                </div>
                <div>
                    Срок выполнения:
                    <MyInput
                        disabled
                        type='date'
                        ref={periodRef}
                        className='task__text__item'
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
                    disabled
                    name='status'
                    value={tagAndStatus.status}
                    onChange={selectedStatus => setTagAndStatus({...tagAndStatus, status: selectedStatus})}
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
                <Button
                    onClick={() => { setModal(true); }}
                >
                    Открыть
                </Button>
            </div>

        </li>
    );
};

export default Task;