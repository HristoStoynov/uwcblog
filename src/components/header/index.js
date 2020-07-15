import React from 'react'
import styles from './index.module.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="UWC BLOG" />
            <ul className={styles.navitems}>
                <li className={styles.navlink}><a href="/home">Home</a></li>
                <li className={styles.navlink}><a href="/about">About</a></li>
                <li className={styles.navlink}><a href="/contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header