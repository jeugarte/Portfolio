import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/TopBar.module.scss'

const TopBar = () => {

    const menuSelections = [
        { path: "/about", text: "Home", icon: "" },
        { path: "/projects", text: "Projects", icon: "" },
        { path: "/contact", text: "Contact", icon: "" }
    ]

    return (
        <div className={styles.TopBar}>
            <div className={styles.menuContainer}>
                <p> Home icon goes here</p>
                <ul>
                    {menuSelections.map( (item, index) => (
                        <li className={styles.menuItemContainer} key={index}>
                            {/* Place icon image here */}
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default TopBar;