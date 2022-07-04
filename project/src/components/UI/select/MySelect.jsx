import React from 'react';
import cl from './MySelect.module.scss'

const MySelect = ({ disabled, options, defaultValue, value, onChange }) => {
    return (
        <select
            disabled={disabled}
            className={cl.select}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;