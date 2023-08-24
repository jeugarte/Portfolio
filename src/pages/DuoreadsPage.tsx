import React from 'react';
import styles from '../styles/DuoreadsPage.module.scss'
import { ReactComponent as Duo } from '../assets/icon.svg'
import MainGIF from '../assets/duoreads-main.gif'

const DuoreadsPage = () => {
    return (
        <div className={styles.mainPageContainer}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Duoreads
                </div>
                <div className={styles.icon}>
                    <Duo />
                </div>
            </div>
            <div className={styles.subsection}>
                Duoreads is a project 4 interns and I developed as a part of the Thrive program. Duolingo teaches the four main language skills SWRL:
                Speech, Writing, Reading, & Listening. Duoreads focuses on teaching the 'R' in SWRL. By reading literature in a foreign language, users 
                will greatly heighten their reading ability and comprehension in the language they are learning.
            </div>
            <div className={styles.mainVideo}>
                <img src={MainGIF} alt="Duoreads" style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)'  }} />
            </div>
        </div>
    )
}

export default DuoreadsPage;