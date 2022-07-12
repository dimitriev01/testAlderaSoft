import React from 'react';
import cl from './Input.module.scss'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input required ref={ref} {...props} className={[
            cl.myInput, 
            props.className === 'form-input' ? cl['form-input'] :
            props.className === 'task__text__item' ? cl.task__text__item : 
            props.className === 'search__item' ? cl.search__item : ''].join(' ')} />
    );
});

export default MyInput;