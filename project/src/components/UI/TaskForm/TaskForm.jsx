import React, {  useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import cl from './TaskForm.module.scss'
import { useForm } from 'react-hook-form';

const TaskForm = ({ createTask }) => {

    const {
        register,
        handleSubmit,
        reset
      } = useForm();

    const onSubmit = (data) => {
        const newTask = {
            id: Date.now(),
            date: new Date(),
            edit: false,
            status: 'Новая',
            ...data
        }
        createTask(newTask)
        reset();
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                autoComplete='off'
                {...register("nameTask", { required : true })}
                placeholder='Введите название'
                className='form-input'
            />
            <Input
                autoComplete='off'
                {...register("descriptionTask", { required : true })}
                placeholder='Введите описание'
                className='form-input'
            />
            <Input
                autoComplete='off'
                {...register("tagTask", { required : true })}
                placeholder='Введите тэг'
                className='form-input'
            />
            <Input
                {...register("period", { required : true })}
                type='date'
                placeholder='Введите срок'
                className='form-input'
            />
            <Button>
                Добавить задачу
            </Button>
        </form>
    );
};

export default TaskForm;