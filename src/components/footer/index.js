import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footertext}>Blog developed by Hristo Stoynov</div>
            <Link to="/create"><span className={styles.postlink}>Post</span></Link>
            <Link to="/login"><span className={styles.loginlink}>Log in</span></Link>
        </footer>
    )
}

export default Footer