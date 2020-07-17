import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.pagecontainer}>
      <Header />
      <div className={styles.contentwrap}>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
