import React from 'react';

import SidebarItem from './SidebarItem';
import styles from '../styles/Sidebar.module.scss';

const Sidebar = ({onProjectSelect, activeProject}: {onProjectSelect: (project: string) => void, activeProject: string}) => {

    const sidebarItems = [
        {
            title: "Duoreads",
            onClick: (() => onProjectSelect("Duoreads")),
            isActive: activeProject === 'Duoreads'
        },
        {
            title: "Duo Digits",
            onClick: (() => onProjectSelect("Duo Digits")),
            isActive: activeProject === 'Duo Digits'
        },
        {
            title: "The Whether Bee",
            onClick: (() => onProjectSelect("The Whether Bee")),
            isActive: activeProject === 'The Whether Bee'
        },
        {
            title: "Dresser",
            onClick: (() => onProjectSelect("Dresser")),
            isActive: activeProject === 'Dresser'
        },
    ]

    return (
        <div className={styles.mainContainer}>
            {sidebarItems.map((section, index) => {
                return (
                    <div className={section.isActive ? styles.activeSectionNameContainer : styles.sectionNameContainer}>
                        <SidebarItem key={index} label={section.title} onClick={section.onClick} isActive={section.isActive} />
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar;