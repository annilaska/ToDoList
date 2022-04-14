import React from 'react';
import css from './header.module.css'
import logo from './logo.svg'

export default function Header() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <img src={logo} alt='' />
                <h1>ToDo</h1>
            </div>
            <button className={css.button}>Clisk me</button>
        </header>
    )
}

 