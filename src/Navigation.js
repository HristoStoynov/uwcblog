import React, { Fragment, useContext } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import View from './pages/view';
import Edit from './pages/edit';
import Create from './pages/create';
import NotFound from './pages/notfound';
import styles from './Navigation.module.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Context from './Context'

function Navigation() {
    const loggedIn = useContext(Context).loggedIn
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
                            <Route path="/contact" component={Contact} />
                            <Route path="/create">{loggedIn ? (<Create />) : (<Redirect to="/login" />)}</Route>
                            <Route path="/edit/:id">{loggedIn ? (<Edit />) : (<Redirect to="/login" />)}</Route>
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
