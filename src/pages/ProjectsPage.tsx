import React, { useState } from 'react';
import Lottie from "lottie-react";

import Sidebar from '../components/Sidebar';
import styles from '../styles/ProjectsPage.module.scss'
import DuoreadsPage from './DuoreadsPage';
import DuoDigitsPage from './DuoDigitsPage';
import TheWhetherBeePage from './TheWhetherBeePage';
import DresserPage from './DresserPage';
import Coding from '../assets/coding.json'
import { ReactComponent as MenuIcon } from '../assets/menuicon.svg'

const ProjectsPage = () => {

    const [activeProject, setActiveProject] = useState<string>("");
    const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);
    const [projectSelected, setProjectSelected] = useState<boolean>(false);

    const renderContent = () => {
        switch (activeProject) {
            case 'Duoreads':
                return (<DuoreadsPage />)
            case 'Duo Digits':
                return (<DuoDigitsPage />)
            default:
                return (
                        <Lottie animationData={Coding} loop={true} className={styles.lottieCoding}/>
                )
        }
    }

    React.useEffect(() => {
        const updateSidebarVisibility = () => {
            if (window.innerWidth < 768 && projectSelected) {
                setSidebarVisible(false);
            } else {
                setSidebarVisible(true);
            }
        };
    
        updateSidebarVisibility();
        window.addEventListener("resize", updateSidebarVisibility);
    
        return () => {
            window.removeEventListener("resize", updateSidebarVisibility);
        };
    }, [projectSelected, activeProject]);

    const handleProjectSelect = (project: string) => {
        setActiveProject(project);
        if (window.innerWidth < 768) {
            setSidebarVisible(false);
        }
        setProjectSelected(true);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className={styles.projectsPageContainer}>
            {isSidebarVisible && (
                <div className={styles.sidebarContainer}>
                    <Sidebar 
                        onProjectSelect={(project) => handleProjectSelect(project)} 
                        activeProject={activeProject}
                    />
                </div>
            )}
            <div className={styles.pageContainer}>
                {!isSidebarVisible && projectSelected && <button onClick={toggleSidebar}><MenuIcon /></button>}
                {renderContent()}
            </div>
        </div>
    );
}

export default ProjectsPage;