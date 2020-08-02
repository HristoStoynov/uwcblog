import React, { useContext } from 'react'
import styles from './index.module.css'
import { Link, Redirect } from 'react-router-dom'
import Context from '../../Context'

function Footer() {
    const logOut = useContext(Context).logOut

    function Log() {
        logOut()
        return (
            <Redirect to="/"></Redirect>
        )
    }

    const loggedIn = useContext(Context).loggedIn

    return (
        <footer className={styles.footer}>
            <div className={styles.footertext}>Blog developed by Hristo Stoynov</div>
            <Link to="/create"><span className={styles.postlink}>Post</span></Link>
            {loggedIn ? <span className={styles.loginlink} onClick={Log}>Log out</span> : <Link to="/login"><span className={styles.loginlink}>Log in</span></Link>}
        </footer>
    )

}

export default Footer