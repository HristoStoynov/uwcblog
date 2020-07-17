import React from 'react'
import image from '../../images/404.png'
import styles from './index.module.css'

const NotFound = () => {
    return (
        <div className={styles.notfoundcontainer}>
            <img src={image} alt="404" className={styles.img404} />
            <h1>Oopsie... Page not found... :(</h1>
        </div>
    )
}

export default NotFound