import React from 'react';
import cl from './MyInput.module.scss'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={cl.myInput}/>
    );
});

export default MyInput;