import React from 'react'
import cl from './Button.module.scss'

const MyBtn = (props) => {
    return (
        <button {...props} className={cl.myBtn}>
            {props.children}
        </button>
    );
};

export default MyBtn;