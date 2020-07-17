import React, { Fragment } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <div className={styles.pagecontainer}>
          <Header />
          <div className={styles.contentwrap}>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
