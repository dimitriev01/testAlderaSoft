import React from 'react';
import cl from './MyInput.module.scss'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={[
            cl.myInput, 
            props.className === 'task__text__item' ? cl.task__text__item : 
            props.className === 'search__item' ? cl.search__item : ''].join(' ')} />
    );
});

export default MyInput;