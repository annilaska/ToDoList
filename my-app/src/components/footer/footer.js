import React from 'react';
import css from './footer.module.css'
import emailIcon from './email.svg'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <p className={css.contacts}>Contact us:
            <img className={css.icon} src={emailIcon} alt=''></img>
            <a href="mailto:annivini@.com">mailto:annivini@.com</a>
            </p>
        </footer>
    )
}