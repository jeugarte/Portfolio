import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/TopBar.module.scss'
import { ReactComponent as homeicon } from '../assets/homeicon.svg'
import { ReactComponent as projectsicon } from '../assets/projecticon.svg'
import { ReactComponent as contacticon } from '../assets/contacticon.svg'
import { ReactComponent as Camel } from '../assets/camel.svg'
import { ReactComponent as Owl } from '../assets/owl.svg'
import { ReactComponent as Bear } from '../assets/bear.svg'


const TopBar = () => {

    const menuSelections = [
        { path: "/home", text: "Home", icon: "", Component: homeicon },
        { path: "/projects", text: "Projects", icon: "", Component: projectsicon },
        { path: "/contact", text: "Contact", icon: "", Component: contacticon }
    ]

    return (
        <div className={styles.TopBar}>
            <div className={styles.menuContainer}>
                <div className={styles.mainIcons}>
                    <Camel />
                    <Bear />
                    <Owl />
                </div>
                <ul className={styles.menuSelections}>
                    {menuSelections.map( (item, index) => (
                        <li className={styles.menuItemContainer} key={index}>
                            <div className={styles.icon}>
                                {item.Component && <item.Component />}
                            </div>
                            <Link className={styles.menuItem} to={item.path}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default TopBar;