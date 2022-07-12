import React from 'react';
import cl from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl['nav-links']}>
                <NavLink className={cl['nav-link']} to='/'>
                    <Button>
                        На главную
                    </Button>
                </NavLink>
                <NavLink className={cl['nav-link']} to='/tasks'>
                    <Button>
                        Задачи
                    </Button>
                </NavLink>
            </div>
            <h1 className={cl['nav-title']}>
                Навигация
            </h1>
        </nav>
    );
};

export default Navbar;