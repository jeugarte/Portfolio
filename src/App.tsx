import React from 'react';
import PageRouter from './components/PageRouter';
import styles from './styles/App.module.scss';

// You might import styles here if you have any
// import './App.css';

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.app}>
  
      {children} 
      
      <footer>Footer</footer>
    </div>
  );
}

export default App;



