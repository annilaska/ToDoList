import React from 'react';
import css from './header.module.css'
import logo from './logo.svg'

export default function Header(props) {
    const {isLogged} = props
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <img src={logo} alt='' />
                <h1>ToDo App</h1>
            </div>
            <button className={css.button}>{isLogged ? 'Log out' : 'Log in'}</button>
        </header>
    )
}

 