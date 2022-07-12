import React from 'react';
import Input from '../Input/Input';
import MySelect from '../Select/Select';
import cl from './TaskFilter.module.scss'

const TaskFilter = ({ filter, setFilter }) => {
    return (
        <>
            <hr className={cl.line}/>
            <div className={cl.sort}>
                Сортировка задач:
                <MySelect
                    name='sort'
                    className='sort'
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue='Сортировка'
                    options={[
                        { value: 'nameTask', name: "По названию" },
                        { value: 'period', name: "По сроку" },
                    ]}
                />
            </div>
            <br></br>
            <div className={cl.search}>
               Поиск задач:  
                <Input
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder='Поиск по тэгу или статусу'
                    className='search__item'
                />
            </div>
        </>
    );
};

export default TaskFilter;