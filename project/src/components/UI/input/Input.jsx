import React from 'react';
import cl from './Input.module.scss'

const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={[
            cl.Input, 
            props.className === 'form-input' ? cl['form-input'] :
            props.className === 'task__text__item' ? cl.task__text__item : 
            props.className === 'search__item' ? cl.search__item : ''].join(' ')} />
    );
});

export default Input;