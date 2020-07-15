import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.pagecontainer}>
      <Header />
      <div className={styles.contentwrap}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
