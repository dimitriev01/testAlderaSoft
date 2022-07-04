import React from 'react';
import MyInput from '../input/MyInput';
import MySelect from '../select/MySelect';
import cl from './TaskFilter.module.scss'

const TaskFilter = ({ filter, setFilter }) => {
    return (
        <>
            <hr className={cl.line}/>
            <div className={cl.sort}>
                Сортировка задач: &#160; &#160; &#160;
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue='Сортировка'
                    options={[
                        { value: 'nameTask', name: "По названию" },
                        { value: 'period', name: "По сроку" },
                    ]}
                />
            </div>
            <div className={cl.search}>
                <br /> Поиск задач: &#160; &#160; &#160;
                <MyInput
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder='Поиск'
                    className='search__item'
                />
            </div>
        </>
    );
};

export default TaskFilter;