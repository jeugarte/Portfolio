import React from 'react';
import styles from '../styles/HomePage.module.scss'
import PhotoCarousel from '../components/PhotoCarousel';

const HomePage = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <div className={styles.typewriter}>
                        Hey, I'm Joe
                    </div>
                    <div className={styles.empty} />
                </div>
                <div className={styles.subsection1}>
                    Student @ Cornell University
                </div>
                <div className={styles.subsection2}>
                    Software Engineer Intern @ Duolingo
                </div>
                <div className={styles.subsection3}>
                    Professional Development Chair for URMC
                </div>
                <div className={styles.subsection4}>
                    Developer & DEI Lead for Hack4Impact
                </div>
            </div>
            <div className={styles.carouselContainer}>
                <PhotoCarousel />
            </div>
        </div>
    )
}

export default HomePage;