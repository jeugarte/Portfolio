import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PageRouter from './components/PageRouter';

ReactDOM.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
  document.getElementById('root')
);