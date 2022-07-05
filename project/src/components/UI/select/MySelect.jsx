import React from 'react';
import cl from './MySelect.module.scss'

const MySelect = ({className, disabled, options, defaultValue, value, onChange }) => {
    return (
        <select 
            disabled={disabled}
            className={[cl.select, className === 'status' ? cl.status : ''].join(' ')}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;