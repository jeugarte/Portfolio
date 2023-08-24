import React, { useState } from 'react';
import Lottie from "lottie-react";

import Sidebar from '../components/Sidebar';
import styles from '../styles/ProjectsPage.module.scss'
import DuoreadsPage from './DuoreadsPage';
import DuoDigitsPage from './DuoDigitsPage';
import TheWhetherBeePage from './TheWhetherBeePage';
import DresserPage from './DresserPage';
import Coding from '../assets/coding.json'

const ProjectsPage = () => {

    const [activeProject, setActiveProject] = useState<string>("");

    const renderContent = () => {
        switch (activeProject) {
            case 'Duoreads':
                return (<DuoreadsPage />)
            case 'Duo Digits':
                return (<DuoDigitsPage />)
            case 'The Whether App':
                return (<TheWhetherBeePage />)
            case 'Dresser':
                return (<DresserPage />)
            default:
                return (
                    
                        <Lottie animationData={Coding} loop={true} className={styles.lottieCoding}/>
                    
                    
                )
        }
    }

    return (
        <div className={styles.projectsPageContainer}>
            <div className={styles.sidebarContainer}>
                <Sidebar 
                    onProjectSelect={(project) => setActiveProject(project)} 
                    activeProject={activeProject}
                />
            </div>
            <div className={styles.pageContainer}>
                {renderContent()}
            </div>
        </div>
        
    )
}

export default ProjectsPage;