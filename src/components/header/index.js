import React from 'react'
import styles from './index.module.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="UWC BLOG" />
            <ul className={styles.navitems}>
                <Link className={styles.linkat} to="/"><li className={styles.navlink}><span>Home</span></li></Link>
                <Link className={styles.linkat} to="/about"><li className={styles.navlink}><span>About</span></li></Link>
                <Link className={styles.linkat} to="/contact"><li className={styles.navlink}><span>Contact</span></li></Link>
            </ul>
        </header>
    )
}

export default Header