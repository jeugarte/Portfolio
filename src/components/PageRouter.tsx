import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import App from '../App';
import TopBar from './TopBar';
import styles from '../styles/PageRouter.module.scss'


const PageRouter: React.FC = () => {

  const NavigateToHome: React.FC = () => {
    let navigate = useNavigate();
    React.useEffect(() => {
      navigate("/home");
    }, [navigate]);
  
    return null;
  };  

  const route = (
    <Routes>
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<HomePage />} path="/home" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route path="*" element={<NavigateToHome />} />

    </Routes>
  );

  return (
    <App>
        <Router>
          <div className={styles.page}>
            <TopBar />
            {route}
          </div>
        </Router>
    </App>
  )
};

export default PageRouter;
