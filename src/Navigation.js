import React, { Fragment, useContext } from 'react';
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
    const loggedIn = useContext(Context).loggedIn
    console.log(useContext(Context).loggedIn)
    console.log(useContext(Context).id)
    return (
        <Fragment>
            <Router>
                <div className={styles.pagecontainer}>
                    <Header />
                    <div className={styles.contentwrap}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/view/:id" component={View} />
                            <Route path="/create">{loggedIn ? (<Create />) : (<Redirect to="/login" />)}</Route>
                            <Route path="/contact">{loggedIn ? (<Contact />) : (<Redirect to="/login" />)}</Route>
                            <Route path="/login">{loggedIn ? (<Redirect to="/" />) : (<Login />)}</Route>
                            <Route path="/register">{loggedIn ? (<Redirect to="/" />) : (<Register />)}</Route>
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
