import React from 'react';
import './Navbar.scss'
import {NavLink} from "react-router-dom";
import MyBtn from '../button/MyBtn';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-links'>
                <NavLink className='nav-link' to='/'>
                    <MyBtn>
                        На главную
                    </MyBtn>
                </NavLink>
                <NavLink className='nav-link' to='/tasks'>
                    <MyBtn>
                        Задачи
                    </MyBtn>
                </NavLink>
            </div>
            <h1 className='nav-title'>
                Навигация
            </h1>
        </nav>
    );
};

export default Navbar;