import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming you have an App.tsx file as your root component
import PageRouter from './components/PageRouter';

// If you're using service workers (with Create React App for example)
// import * as serviceWorker from './serviceWorker';

// Styles can also be imported here if using CSS/SCSS modules or libraries like styled-components
// import './index.css'; 

ReactDOM.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you're using service workers (with Create React App for example)
// serviceWorker.unregister(); // or serviceWorker.register() depending on your needs
