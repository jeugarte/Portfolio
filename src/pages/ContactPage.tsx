import React from 'react';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'
import { ReactComponent as Github } from '../assets/git.svg'
import { ReactComponent as Instagram } from '../assets/insta.svg'
import { ReactComponent as Email } from '../assets/email.svg'

import styles from '../styles/ContactPage.module.scss'

const ContactPage = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.iconContainer}>
                <a href="https://www.linkedin.com/in/joseph-ugarte/" target="_blank" rel="noreferrer">
                    <Linkedin />
                </a>
            </div>
            <div className={styles.iconContainer}>
                <a href="https://github.com/jeugarte" target="_blank" rel="noreferrer">
                    <Github />
                </a>
            </div>
            <div className={styles.iconContainer}>
                <a href="https://www.instagram.com/joseph.ugt/" target="_blank" rel="noreferrer">
                    <Instagram />
                </a>
            </div>
            <div className={styles.iconContainer}>
                <a href="mailto:jeugarte14@gmail.com" target="_blank" rel="noreferrer">
                    <Email />
                </a>
            </div>
        </div>
    )
}

export default ContactPage;