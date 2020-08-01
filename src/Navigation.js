import React, { Fragment } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Register from './components/register';
import View from './components/view';
import Create from './components/create';
import NotFound from './components/notfound';
import styles from './Navigation.module.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Context from './Context'

function Navigation() {
    const loggedIn = Context._currentValue.loggedIn
    console.log(loggedIn)
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
                            <Route path="/view/:id" component={View} />
                            <Route path="/create" component={loggedIn ? (Create) : (Login)} />
                            <Route path="/login" component={loggedIn ? (Home) : (Login)} />
                            <Route path="/register" component={loggedIn ? (Home) : (Register)} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Fragment>
    );
}

export default Navigation;
