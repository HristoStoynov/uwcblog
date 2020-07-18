import React, { Fragment } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
//import View from './components/view';
import NotFound from './components/notfound';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <div className={styles.pagecontainer}>
          <Header />
          <div className={styles.contentwrap}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
