// PageRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import App from '../App';
import TopBar from './TopBar';


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
        <Route path="*" element={<NavigateToHome />} />

    </Routes>
  );

  return (
    <App>
        <Router>
          <TopBar />
          {route}
          {/* <Redirect exact from="/" to="/home" /> */}
        </Router>
    </App>
  )
};

export default PageRouter;